"use client";

/** Keep the approved artwork authoritative on every device. The reconstructed
 * GLB is intentionally not mounted: its silhouette does not match the reference. */
export function Mascot({
  large = false,
  walking = false,
  reaction = "",
  listening = false,
  thinking = false,
  responseId = 0,
}: {
  large?: boolean;
  walking?: boolean;
  reaction?: string;
  listening?: boolean;
  thinking?: boolean;
  responseId?: number;
}) {
  const state = walking
    ? "docking"
    : thinking
      ? "thinking"
      : listening
        ? "listening"
        : reaction || "idle";
  return (
    <span
      className={`mascot-stage ${large ? "large" : ""}`}
      aria-hidden="true"
      data-character="reference-artwork"
      data-renderer="reference-image"
      data-state={state}
      data-response={responseId}
    >
      {/* Preserve the supplied cutout at its native resolution and aspect ratio. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="mascot-reference"
        src="/fire-mascot.webp"
        alt=""
        width="1254"
        height="1254"
        decoding="async"
        draggable="false"
      />
    </span>
  );
}
