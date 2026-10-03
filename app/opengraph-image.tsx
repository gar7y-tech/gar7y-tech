import { ImageResponse } from "next/og";
export const alt = "MR ROBOT — Electronics, Oman";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    <div
      style={{
        background: "#171c24",
        color: "#f8f8f3",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 90,
      }}
    >
      <div style={{ fontSize: 100, fontWeight: 700, display: "flex" }}>
        MR ROBOT<span style={{ color: "#477bdd" }}>.</span>
      </div>
      <div style={{ fontSize: 30, marginTop: 30, color: "#c1c8d2" }}>
        SMART CHOICES. EVERYDAY TECHNOLOGY.
      </div>
      <div style={{ fontSize: 24, marginTop: 80 }}>
        AL BURAIMI · OMAN · RETAIL &amp; WHOLESALE
      </div>
    </div>,
    size,
  );
}
