import { ImageResponse } from "next/og";

export const alt =
  "Scale Company — Agência de Marketing Jurídico e Captação para Advogados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#010f1c",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.25) 0%, rgba(1, 15, 28, 0) 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "56px",
              backgroundColor: "#3B82F6",
              borderRadius: "4px",
            }}
          />
          <div style={{ fontSize: "44px", fontWeight: 700, letterSpacing: "-1px" }}>
            Scale Company
          </div>
        </div>
        <div
          style={{
            fontSize: "68px",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-2px",
            maxWidth: "980px",
          }}
        >
          Marketing Jurídico que Gera Contratos
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "32px",
            color: "rgba(255, 255, 255, 0.75)",
            maxWidth: "900px",
          }}
        >
          Google Ads, Meta Ads e CRM para escritórios de advocacia — dentro das
          normas da OAB
        </div>
      </div>
    ),
    { ...size }
  );
}
