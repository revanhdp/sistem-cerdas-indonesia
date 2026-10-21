import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { services, site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = await readFile(join(process.cwd(), "public/logo.png"));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#eef1f4",
          color: "#1b2a3a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={logoSrc} width={96} height={96} alt="" />
          <div style={{ fontSize: 30, letterSpacing: 2, color: "#46586b" }}>
            SISTEMCERDAS.ID · MALANG
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 34, marginTop: 24, color: "#46586b", maxWidth: 960 }}>
            Website, aplikasi seluler, sistem informasi & kolaborasi riset.
          </div>
        </div>
        <div style={{ display: "flex", gap: 44, borderTop: "3px solid #1b2a3a", paddingTop: 24 }}>
          {services.items.map((s) => (
            <div key={s.key} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 22, height: 22, borderRadius: 11, background: s.color }} />
              <span style={{ fontSize: 28, color: "#1b2a3a" }}>{s.short}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
