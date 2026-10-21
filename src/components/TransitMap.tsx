import { services, type LineKey } from "@/content/site";

type Pt = readonly [number, number];
type Label = { at: Pt; lines: string[]; anchor: "start" | "middle" | "end" };

// Peta digambar dalam orientasi horizontal; versi HP memakai koordinat yang ditransposisi.
const HUB: Pt = [320, 260];

const routes: Record<LineKey, Pt[]> = {
  web: [[20, 100], [160, 100], [480, 420], [620, 420]],
  sis: [[20, 420], [160, 420], [480, 100], [620, 100]],
  app: [[20, 260], [620, 260]],
  rnd: [[320, 20], [320, 500]],
};

const stops: Record<LineKey, Pt[]> = {
  web: [[90, 100], [550, 420]],
  sis: [[90, 420], [550, 100]],
  app: [[120, 260], [520, 260]],
  rnd: [[320, 100], [320, 420]],
};

const labels: Record<"h" | "v", Label[]> = {
  h: [
    { at: [20, 80], lines: ["Website UMKM"], anchor: "start" },
    { at: [620, 400], lines: ["Portal kampus"], anchor: "end" },
    { at: [20, 400], lines: ["Inventori"], anchor: "start" },
    { at: [620, 80], lines: ["Aplikasi internal"], anchor: "end" },
    { at: [20, 240], lines: ["Android"], anchor: "start" },
    { at: [620, 240], lines: ["iOS"], anchor: "end" },
    { at: [340, 26], lines: ["Riset terapan"], anchor: "start" },
    { at: [340, 506], lines: ["Pendampingan teknologi"], anchor: "start" },
  ],
  v: [
    { at: [100, -40], lines: ["Website", "UMKM"], anchor: "middle" },
    { at: [420, 664], lines: ["Portal", "kampus"], anchor: "middle" },
    { at: [420, -14], lines: ["Inventori"], anchor: "middle" },
    { at: [100, 664], lines: ["Aplikasi", "internal"], anchor: "middle" },
    { at: [260, -14], lines: ["Android"], anchor: "middle" },
    { at: [260, 664], lines: ["iOS"], anchor: "middle" },
    { at: [4, 262], lines: ["Riset", "terapan"], anchor: "start" },
    { at: [500, 360], lines: ["Pendampingan", "teknologi"], anchor: "end" },
  ],
};

export function TransitMap({ orientation, className }: { orientation: "h" | "v"; className?: string }) {
  const t = ([x, y]: Pt): Pt => (orientation === "h" ? [x, y] : [y, x]);
  const viewBox = orientation === "h" ? "0 0 640 520" : "-10 -60 540 760";
  const fontSize = orientation === "h" ? 14 : 21;

  return (
    <svg viewBox={viewBox} className={className} role="img" aria-labelledby={`peta-${orientation}`}>
      <title id={`peta-${orientation}`}>
        Peta jalur layanan PT Sistem Cerdas Indonesia: website, aplikasi seluler, riset, dan sistem informasi
        yang bertemu di kantor Malang.
      </title>

      {services.items.map((s, i) => (
        <polyline
          key={s.key}
          points={routes[s.key].map((p) => t(p).join(",")).join(" ")}
          pathLength={1}
          fill="none"
          stroke={s.color}
          strokeWidth={orientation === "h" ? 6 : 8}
          strokeLinejoin="round"
          strokeLinecap="round"
          className="map-line"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}

      <g className="map-stop">
        {services.items.flatMap((s) =>
          stops[s.key].map((p) => {
            const [x, y] = t(p);
            return (
              <circle key={`${s.key}-${x}-${y}`} cx={x} cy={y} r={orientation === "h" ? 5 : 6} fill="#eef1f4" stroke={s.color} strokeWidth={3} />
            );
          }),
        )}

        {services.items.map((s) => {
          const [x, y] = t(routes[s.key][0]);
          const [ex, ey] = t(routes[s.key][routes[s.key].length - 1]);
          const r = orientation === "h" ? 11 : 15;
          return (
            <g key={s.key}>
              <circle cx={ex} cy={ey} r={r - 4} fill="#eef1f4" stroke={s.color} strokeWidth={3} />
              <circle cx={x} cy={y} r={r} fill={s.color} />
              <text
                x={x}
                y={y}
                dy="0.36em"
                textAnchor="middle"
                fontSize={r * 1.05}
                fontWeight={700}
                fill={s.key === "app" ? "#1b2a3a" : "#fbfcfd"}
              >
                {s.code}
              </text>
            </g>
          );
        })}

        {(() => {
          const [x, y] = t(HUB);
          return <circle cx={x} cy={y} r={orientation === "h" ? 26 : 32} fill="#eef1f4" stroke="#1b2a3a" strokeWidth={3} />;
        })()}
        {(() => {
          const [x, y] = t(HUB);
          return (
            <image href="/logo-mark.png" x={x - 22} y={y - 21} width={44} height={42} aria-hidden="true" />
          );
        })()}

        {labels[orientation].map((l) => (
          <text
            key={l.lines.join(" ")}
            x={l.at[0]}
            y={l.at[1]}
            textAnchor={l.anchor}
            fontSize={fontSize}
            fontWeight={500}
            fill="#46586b"
          >
            {l.lines.map((line, i) => (
              <tspan key={line} x={l.at[0]} dy={i === 0 ? 0 : "1.15em"}>
                {line}
              </tspan>
            ))}
          </text>
        ))}
      </g>
    </svg>
  );
}
