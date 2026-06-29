import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/contact";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 64,
          backgroundColor: "#2b4a3f",
          backgroundImage:
            "linear-gradient(135deg, rgba(30,52,44,0.95) 0%, rgba(43,74,63,0.85) 100%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#d4b896",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Mysore · India
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: "#f4efe6",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 28, color: "#f4efe6", opacity: 0.85 }}>
          {siteConfig.promise}
        </div>
        <div
          style={{
            width: 80,
            height: 2,
            backgroundColor: "#b8956b",
            marginTop: 32,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
