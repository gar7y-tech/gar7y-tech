/** Portable glTF skeletal clips, authored against the exported bind pose.
 * No flat-image animation. Each channel targets an actual weighted joint. */
import fs from "node:fs";
import { gzipSync } from "node:zlib";
import { Quaternion, Euler } from "three";
const path = new URL("../public/fire-character.glb", import.meta.url);
const input = fs.readFileSync(path),
  jsonLength = input.readUInt32LE(12);
const doc = JSON.parse(input.subarray(20, 20 + jsonLength).toString());
const binStart = 20 + jsonLength,
  binLength = input.readUInt32LE(binStart);
// Rebuild only geometry buffers before authoring clips. Repeated runs must not
// retain abandoned animation accessors or grow the downloadable character.
const sourceBin = input.subarray(binStart + 8, binStart + 8 + binLength);
const refs = [];
for (const mesh of doc.meshes)
  for (const primitive of mesh.primitives) {
    for (const key of Object.keys(primitive.attributes))
      refs.push([primitive.attributes, key]);
    if (primitive.indices !== undefined) refs.push([primitive, "indices"]);
    for (const target of primitive.targets || [])
      for (const key of Object.keys(target)) refs.push([target, key]);
  }
for (const skin of doc.skins)
  if (skin.inverseBindMatrices !== undefined)
    refs.push([skin, "inverseBindMatrices"]);
const accessorIds = [...new Set(refs.map(([obj, key]) => obj[key]))];
const accessorMap = new Map(accessorIds.map((id, index) => [id, index]));
const keptAccessors = accessorIds.map((id) => doc.accessors[id]);
const viewIds = new Set();
for (const a of keptAccessors) {
  if (a.bufferView !== undefined) viewIds.add(a.bufferView);
  if (a.sparse) {
    viewIds.add(a.sparse.indices.bufferView);
    viewIds.add(a.sparse.values.bufferView);
  }
}
for (const img of doc.images || [])
  if (img.bufferView !== undefined) viewIds.add(img.bufferView);
const chunks = [];
let offset = 0;
const viewMap = new Map(),
  keptViews = [];
for (const id of viewIds) {
  const old = doc.bufferViews[id];
  if (old.buffer !== 0) throw new Error("Expected single-buffer character");
  const pad = (4 - (offset % 4)) % 4;
  if (pad) {
    chunks.push(Buffer.alloc(pad));
    offset += pad;
  }
  viewMap.set(id, keptViews.length);
  keptViews.push({ ...old, byteOffset: offset });
  chunks.push(
    sourceBin.subarray(
      old.byteOffset || 0,
      (old.byteOffset || 0) + old.byteLength,
    ),
  );
  offset += old.byteLength;
}
for (const [obj, key] of refs) obj[key] = accessorMap.get(obj[key]);
for (const a of keptAccessors) {
  if (a.bufferView !== undefined) a.bufferView = viewMap.get(a.bufferView);
  if (a.sparse) {
    a.sparse.indices.bufferView = viewMap.get(a.sparse.indices.bufferView);
    a.sparse.values.bufferView = viewMap.get(a.sparse.values.bufferView);
  }
}
for (const img of doc.images || [])
  if (img.bufferView !== undefined)
    img.bufferView = viewMap.get(img.bufferView);
doc.accessors = keptAccessors;
doc.bufferViews = keptViews;
const joints = doc.skins[0].joints.map((i) => ({ i, node: doc.nodes[i] }));
function accessor(values, type, count) {
  const data = Buffer.from(new Float32Array(values).buffer),
    pad = (4 - (offset % 4)) % 4;
  if (pad) {
    chunks.push(Buffer.alloc(pad));
    offset += pad;
  }
  const view =
    doc.bufferViews.push({
      buffer: 0,
      byteOffset: offset,
      byteLength: data.length,
    }) - 1;
  chunks.push(data);
  offset += data.length;
  const a = { bufferView: view, componentType: 5126, count, type };
  if (type === "SCALAR") {
    a.min = [values[0]];
    a.max = [values.at(-1)];
  }
  return doc.accessors.push(a) - 1;
}
const durations = {
  idle: 6,
  greeting: 3.6,
  listening: 4,
  thinking: 4.8,
  reply: 4,
  walking: 1.2,
};
doc.animations = [];
for (const [name, duration] of Object.entries(durations)) {
  const frames = Math.round(duration * 30) + 1,
    times = Array.from(
      { length: frames },
      (_, i) => (i * duration) / (frames - 1),
    );
  const inputIndex = accessor(times, "SCALAR", frames),
    anim = { name, samplers: [], channels: [] };
  function channel(node, path, values, type) {
    const output = accessor(values, type, frames);
    const sampler =
      anim.samplers.push({
        input: inputIndex,
        output,
        interpolation: "LINEAR",
      }) - 1;
    anim.channels.push({ sampler, target: { node, path } });
  }
  for (const { i, node } of joints) {
    const values = [],
      scale = [],
      rest = new Quaternion().fromArray(node.rotation || [0, 0, 0, 1]);
    for (const t of times) {
      const phase = t / duration,
        envelope = Math.sin(Math.PI * phase) ** 2;
      const breathe = Math.sin(phase * Math.PI * 2),
        sway = Math.sin(phase * Math.PI * 2);
      const gesture = Math.sin(phase * Math.PI * 4) * envelope;
      let x = 0,
        y = 0,
        z = 0;
      // Weight transfer stays small enough to keep feet inside the stage.
      if (node.name === "Root") {
        y = 0.018 * sway;
        z = 0.012 * sway;
      }
      if (node.name === "Torso") {
        x = 0.014 * breathe;
        z = 0.025 * sway;
      }
      if (node.name === "Head") {
        y = 0.055 * sway;
        x =
          name === "listening"
            ? 0.1 * envelope
            : name === "thinking"
              ? -0.08 * envelope
              : name === "reply"
                ? 0.075 * gesture
                : 0.016 * breathe;
        z =
          name === "listening"
            ? -0.07 * envelope
            : name === "thinking"
              ? 0.065 * envelope
              : 0;
      }
      if (node.name === "Flame") {
        z = 0.035 * Math.sin(phase * Math.PI * 2 + 0.45);
        x = 0.015 * breathe;
      }
      if (node.name === "Arm_R") {
        z =
          name === "greeting"
            ? -1.05 * envelope
            : name === "reply"
              ? -0.32 * envelope
              : 0.025 * breathe;
        y = name === "reply" ? 0.09 * gesture : 0;
      }
      if (node.name === "Forearm_R") {
        z =
          name === "greeting"
            ? -0.36 * envelope - 0.23 * Math.sin(phase * Math.PI * 8) * envelope
            : name === "reply"
              ? -0.25 * envelope
              : 0;
        x = name === "reply" ? -0.14 * gesture : 0;
      }
      if (node.name === "Hand_R") {
        x =
          name === "greeting"
            ? 0.28 * Math.sin(phase * Math.PI * 8) * envelope
            : name === "reply"
              ? 0.13 * gesture
              : 0.02 * breathe;
      }
      if (node.name === "Arm_L") {
        z =
          name === "thinking"
            ? 0.42 * envelope
            : name === "reply"
              ? 0.22 * envelope
              : -0.025 * breathe;
      }
      if (node.name === "Forearm_L") {
        x =
          name === "thinking"
            ? -0.32 * envelope
            : name === "reply"
              ? -0.16 * envelope
              : 0;
        z = name === "thinking" ? 0.16 * envelope : 0;
      }
      if (node.name === "Hand_L") {
        z =
          name === "reply"
            ? 0.14 * gesture
            : name === "thinking"
              ? 0.12 * envelope
              : 0;
      }
      if (node.name === "Leg_L") {
        x = 0.026 * breathe;
        z = -0.018 * sway;
      }
      if (node.name === "Leg_R") {
        x = -0.026 * breathe;
        z = -0.018 * sway;
      }
      if (node.name === "Foot_L") {
        x = -0.026 * breathe;
        z = 0.006 * sway;
      }
      if (node.name === "Foot_R") {
        x = 0.026 * breathe;
        z = 0.006 * sway;
      }
      if (name === "walking") {
        const stride = Math.sin(phase * Math.PI * 2);
        if (node.name === "Root") {
          y = -0.28;
          z = 0.025 * stride;
        }
        if (node.name === "Torso") {
          x = 0.04;
          z = -0.03 * stride;
        }
        if (node.name === "Head") {
          x = -0.025;
          y = 0.08;
        }
        if (node.name === "Leg_L") x = 0.3 * stride;
        if (node.name === "Leg_R") x = -0.3 * stride;
        if (node.name === "Foot_L") x = -0.18 * Math.max(0, stride);
        if (node.name === "Foot_R") x = -0.18 * Math.max(0, -stride);
        if (node.name === "Arm_L") x = -0.18 * stride;
        if (node.name === "Arm_R") x = 0.18 * stride;
        if (node.name.startsWith("Forearm")) x = -0.08;
      }
      const q = rest
        .clone()
        .multiply(new Quaternion().setFromEuler(new Euler(x, y, z)));
      values.push(...q.toArray());
      const s = node.scale || [1, 1, 1];
      scale.push(
        s[0],
        s[1] * (node.name === "Torso" ? 1 + 0.006 * breathe : 1),
        s[2],
      );
    }
    channel(i, "rotation", values, "VEC4");
    if (node.name === "Torso") channel(i, "scale", scale, "VEC3");
  }
  doc.animations.push(anim);
}
doc.buffers[0].byteLength = offset;
doc.asset.extras = {
  character: "MR ROBOT fire mascot",
  rig: "16 weighted joints",
  states: Object.keys(durations),
  source:
    "procedural reconstruction of the supplied character; visual fidelity pending motion review",
};
const binary = Buffer.concat(chunks);
let json = Buffer.from(JSON.stringify(doc));
json = Buffer.concat([json, Buffer.alloc((4 - (json.length % 4)) % 4, 32)]);
const header = Buffer.alloc(12);
header.writeUInt32LE(0x46546c67);
header.writeUInt32LE(2, 4);
header.writeUInt32LE(28 + json.length + binary.length, 8);
const j = Buffer.alloc(8);
j.writeUInt32LE(json.length);
j.writeUInt32LE(0x4e4f534a, 4);
const b = Buffer.alloc(8);
b.writeUInt32LE(binary.length);
b.writeUInt32LE(0x004e4942, 4);
fs.writeFileSync(path, Buffer.concat([header, j, json, b, binary]));
fs.writeFileSync(
  new URL("../public/fire-character.glb.gz", import.meta.url),
  gzipSync(fs.readFileSync(path), { level: 9 }),
);
console.log(
  JSON.stringify({
    meshes: doc.meshes.length,
    joints: joints.length,
    clips: doc.animations.map((a) => ({
      name: a.name,
      channels: a.channels.length,
    })),
    bytes: fs.statSync(path).size,
  }),
);
