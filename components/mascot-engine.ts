import * as THREE from "three";
import {
  GLTFLoader,
  type GLTF,
} from "three/examples/jsm/loaders/GLTFLoader.js";
export type CharacterState =
  "idle" | "greeting" | "listening" | "thinking" | "reply" | "walking";
export type CharacterController = {
  setState: (s: CharacterState, replay?: boolean) => void;
  setVisible: (v: boolean) => void;
  dispose: () => void;
};
export async function mountCharacter(
  host: HTMLElement,
): Promise<CharacterController> {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setSize(host.clientWidth, host.clientHeight);
  renderer.domElement.style.cssText =
    "display:block;width:100%;height:100%;background:transparent;pointer-events:none";
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.append(renderer.domElement);
  const scene = new THREE.Scene(),
    camera = new THREE.OrthographicCamera(-2.08, 2.08, 2.08, -2.08, 0.1, 30);
  camera.position.set(0, 1.8, 8);
  camera.lookAt(0, 1.8, 0);
  scene.add(new THREE.HemisphereLight(0xfff6e7, 0x54414b, 2.2));
  const key = new THREE.DirectionalLight(0xffffff, 2.8);
  key.position.set(-3, 5, 6);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffe2c6, 1.1);
  fill.position.set(3, 2, 4);
  scene.add(fill);
  let gltf: GLTF;
  try {
    const loader = new GLTFLoader();
    // Lossless compressed transfer; use the GLB on older browsers.
    if (typeof DecompressionStream !== "undefined") {
      try {
        const response = await fetch("/fire-character.glb.gz", {
          signal: AbortSignal.timeout(15000),
        });
        if (!response.ok || !response.body)
          throw new Error("Character download failed");
        const bytes = await new Response(
          response.body.pipeThrough(new DecompressionStream("gzip")),
        ).arrayBuffer();
        gltf = await loader.parseAsync(bytes, "/");
      } catch {
        gltf = await loader.loadAsync("/fire-character.glb");
      }
    } else gltf = await loader.loadAsync("/fire-character.glb");
  } catch (error) {
    renderer.dispose();
    renderer.domElement.remove();
    throw error;
  }
  scene.add(gltf.scene);
  const mixer = new THREE.AnimationMixer(gltf.scene),
    actions = new Map(
      gltf.animations.map((clip) => [clip.name, mixer.clipAction(clip)]),
    );
  const head = gltf.scene.getObjectByName("Head"),
    eyes = [
      gltf.scene.getObjectByName("Eye_L"),
      gltf.scene.getObjectByName("Eye_R"),
    ];
  const flameMeshes: {
    mesh: THREE.Mesh;
    original: Float32Array;
    minY: number;
    range: number;
  }[] = [];
  gltf.scene.traverse((object) => {
    if (object instanceof THREE.Mesh && /flame|fire|core/i.test(object.name)) {
      const positions = object.geometry.getAttribute("position");
      if (positions) {
        object.material = Array.isArray(object.material)
          ? object.material.map((material) => material.clone())
          : object.material.clone();
        const materials = Array.isArray(object.material)
          ? object.material
          : [object.material];
        for (const material of materials) {
          if (material instanceof THREE.MeshStandardMaterial) {
            material.emissive.copy(material.color);
            material.emissiveIntensity = 0.16;
          }
        }
        object.geometry.computeBoundingBox();
        const bounds = object.geometry.boundingBox!;
        flameMeshes.push({
          mesh: object,
          minY: bounds.min.y,
          range: Math.max(0.01, bounds.max.y - bounds.min.y),
          original: new Float32Array(positions.array),
        });
      }
    }
  });
  const restHead = head?.quaternion.clone(),
    restEyes = eyes.map((eye) => eye?.scale.clone());
  // Reuse temporaries; gaze settles at the same speed on 30/60/120 Hz screens.
  const gazeRotation = new THREE.Quaternion();
  const gazeEuler = new THREE.Euler();
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let visible = true,
    disposed = false,
    frame = 0,
    last = 0,
    elapsed = 0,
    state: CharacterState = "idle",
    action: THREE.AnimationAction | undefined;
  let lookX = 0,
    lookY = 0,
    targetX = 0,
    targetY = 0,
    finiteEnd = Infinity;
  let renderCount = 0;
  let drawing = false;
  const setState = (next: CharacterState, replay = false) => {
    if (state === next && action && !replay) return;
    state = next;
    const selected = actions.get(next);
    if (selected) {
      selected.reset().setEffectiveWeight(1).play();
      if (action && action !== selected)
        action.crossFadeTo(selected, 0.4, false);
      action = selected;
    }
    finiteEnd =
      next === "greeting" || next === "reply"
        ? elapsed + (selected?.getClip().duration ?? 3)
        : Infinity;
    host.dataset.state = next;
    resume();
  };
  function draw(time: number) {
    frame = 0;
    if (disposed || !visible || document.hidden) return;
    drawing = true;
    const delta = last ? Math.min((time - last) / 1000, 0.06) : 0;
    last = time;
    elapsed += delta;
    if (!reduced.matches) {
      mixer.update(delta);
      // Anchored base, stronger motion at the tips. No textures or particles.
      for (const { mesh, original, minY, range } of flameMeshes) {
        const position = mesh.geometry.getAttribute("position");
        for (let i = 0; i < position.count; i++) {
          const x = original[i * 3],
            y = original[i * 3 + 1],
            z = original[i * 3 + 2];
          const tip = THREE.MathUtils.clamp((y - minY) / range, 0, 1);
          const ripple =
            Math.sin(elapsed * 5.1 + y * 4 + z * 2) * 0.027 +
            Math.sin(elapsed * 8.3 + y * 7) * 0.011;
          position.setXYZ(
            i,
            x + ripple * tip * tip,
            y + Math.sin(elapsed * 6 + x * 3) * 0.018 * tip,
            z,
          );
        }
        position.needsUpdate = true;
        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        for (const material of materials) {
          if (material instanceof THREE.MeshStandardMaterial)
            material.emissiveIntensity = 0.16 + 0.025 * Math.sin(elapsed * 7.1);
        }
      }
      // Retire faded clips so long conversations keep only one active state.
      actions.forEach((candidate) => {
        if (
          candidate !== action &&
          candidate.isRunning() &&
          candidate.getEffectiveWeight() === 0
        )
          candidate.stop();
      });
      if (elapsed > finiteEnd) setState("idle");
      lookX = THREE.MathUtils.damp(lookX, targetX, 5, delta);
      lookY = THREE.MathUtils.damp(lookY, targetY, 5, delta);
      if (head && restHead)
        head.quaternion.multiply(
          gazeRotation.setFromEuler(
            gazeEuler.set(lookY * 0.045, lookX * 0.08, 0),
          ),
        );
      const phase = elapsed % 4.3,
        blink =
          phase > 3.9 && phase < 4.08
            ? Math.max(0.07, Math.abs((phase - 3.99) / 0.09))
            : 1;
      eyes.forEach((eye, i) => {
        if (eye && restEyes[i]) eye.scale.y = restEyes[i]!.y * blink;
      });
    } else {
      mixer.stopAllAction();
      gltf.scene.traverse((object) => {
        if (object instanceof THREE.SkinnedMesh) object.skeleton.pose();
      });
      for (const { mesh, original } of flameMeshes) {
        const position = mesh.geometry.getAttribute("position");
        (position.array as Float32Array).set(original);
        position.needsUpdate = true;
      }
      if (head && restHead) head.quaternion.copy(restHead);
      eyes.forEach((eye, i) => {
        if (eye && restEyes[i]) eye.scale.copy(restEyes[i]!);
      });
    }
    renderer.render(scene, camera);
    host.dataset.frames = String(++renderCount);
    drawing = false;
    if (!reduced.matches) frame = requestAnimationFrame(draw);
  }
  function resume() {
    if (!disposed && visible && !document.hidden && !frame && !drawing) {
      last = 0;
      frame = requestAnimationFrame(draw);
    }
  }
  const visibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
    } else resume();
  };
  const motion = () => {
    if (!reduced.matches) {
      action = undefined;
      setState(state);
    }
    resume();
  };
  const pointer = (event: PointerEvent) => {
    const box = host.getBoundingClientRect();
    targetX = THREE.MathUtils.clamp(
      (event.clientX - box.x - box.width / 2) / 350,
      -1,
      1,
    );
    targetY = THREE.MathUtils.clamp(
      (event.clientY - box.y - box.height / 2) / 350,
      -1,
      1,
    );
  };
  const greet = () => {
      if (state === "idle") setState("greeting");
    },
    parent = host.closest("button");
  parent?.addEventListener("pointerenter", greet);
  parent?.addEventListener("focus", greet);
  window.addEventListener("pointermove", pointer, { passive: true });
  document.addEventListener("visibilitychange", visibility);
  reduced.addEventListener("change", motion);
  const resize = new ResizeObserver(() => {
    const width = Math.max(1, host.clientWidth),
      height = Math.max(1, host.clientHeight);
    const aspect = width / height;
    camera.left = -2.08 * aspect;
    camera.right = 2.08 * aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    resume();
  });
  const contextLost = (event: Event) => {
    event.preventDefault();
    cancelAnimationFrame(frame);
    frame = 0;
    host.dataset.renderer = "unavailable";
  };
  const contextRestored = () => {
    host.dataset.renderer = "ready";
    resume();
  };
  renderer.domElement.addEventListener("webglcontextlost", contextLost);
  renderer.domElement.addEventListener("webglcontextrestored", contextRestored);
  resize.observe(host);
  host.dataset.renderer = "ready";
  setState("idle");
  return {
    setState,
    setVisible(value) {
      visible = value;
      if (!value) {
        cancelAnimationFrame(frame);
        frame = 0;
        last = 0;
      } else resume();
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      mixer.stopAllAction();
      mixer.uncacheRoot(gltf.scene);
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", motion);
      window.removeEventListener("pointermove", pointer);
      parent?.removeEventListener("pointerenter", greet);
      parent?.removeEventListener("focus", greet);
      gltf.scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          (Array.isArray(object.material)
            ? object.material
            : [object.material]
          ).forEach((m) => m.dispose());
        }
      });
      renderer.domElement.removeEventListener("webglcontextlost", contextLost);
      renderer.domElement.removeEventListener(
        "webglcontextrestored",
        contextRestored,
      );
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
