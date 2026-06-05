import { ImageResponse } from "next/og";

// Brand OG card (1200x630), referenced explicitly as /og in metadata.
// Dark base + orange accent, no external font/asset for robustness.
// Cached aggressively at the edge — the image never changes.

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0606",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "9999px",
              backgroundColor: "#ff6a1a",
              display: "flex",
            }}
          />
          <div
            style={{
              marginLeft: "24px",
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            PowerAgency
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "1000px",
            }}
          >
            Costruiamo asset che generano clienti.
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "32px",
              color: "#b9b2ad",
              maxWidth: "920px",
            }}
          >
            Sito · Lead generation · CRM. Un sistema solo, guidato dall&apos;AI.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "26px",
            fontWeight: 600,
            color: "#ff6a1a",
          }}
        >
          poweragency.it
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  );
}
