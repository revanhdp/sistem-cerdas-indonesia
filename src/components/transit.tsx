import Image from "next/image";

// Kolom isi digeser ke kanan supaya jalur utama (rail) punya tempat di sisi kiri.
export const wrap = "relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10";
export const indent = "pl-7 sm:pl-10 lg:pl-14";

/** Jalur utama tipis yang menyambung dari satu bagian ke bagian berikutnya. */
export function Rail() {
  return <span aria-hidden="true" className="absolute inset-y-0 left-4 w-px bg-line sm:left-6 lg:left-10" />;
}

/** Judul bagian, dengan penanda stasiun kecil di atas jalur utama. */
export function StationHeading({ id, children, lead }: { id: string; children: React.ReactNode; lead?: React.ReactNode }) {
  return (
    <div className="max-w-2xl">
      <h2
        id={id}
        className="relative text-[clamp(1.6rem,2.8vw,2.25rem)] font-bold leading-tight tracking-[-0.015em] text-balance"
      >
        <span
          aria-hidden="true"
          className="absolute -left-[33px] top-[0.4em] size-[11px] rounded-full border-2 border-ink bg-paper sm:-left-[45px] lg:-left-[61px]"
        />
        {children}
      </h2>
      {lead && <p className="mt-3 leading-relaxed text-ink-2">{lead}</p>}
    </div>
  );
}

/** Simbol jalur: lingkaran berwarna dengan kode huruf, seperti penanda jalur MRT. */
export function Roundel({ code, color, size = 28, dark = false }: { code: string; color: string; size?: number; dark?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" aria-hidden="true" className="shrink-0">
      <circle cx="22" cy="22" r="22" fill={color} />
      <text x="22" y="22" dy="0.36em" textAnchor="middle" fontSize="21" fontWeight="700" fill={dark ? "#1b2a3a" : "#fbfcfd"}>
        {code}
      </text>
    </svg>
  );
}

type Stop = { key: string; marker?: React.ReactNode; content: React.ReactNode };

/**
 * Deretan stasiun di satu jalur. Di HP jalurnya vertikal, mulai md jalurnya horizontal.
 * `marker` menggantikan lingkaran stasiun standar (misalnya logo klien).
 */
export function StationLine({ color, stops, markerSize = 11 }: { color: string; stops: Stop[]; markerSize?: number }) {
  return (
    <ol
      style={{ "--m": `${markerSize}px` } as React.CSSProperties}
      className="grid gap-5 md:auto-cols-fr md:grid-flow-col md:gap-6"
    >
      {stops.map((s, i) => (
        <li key={s.key} className="relative flex gap-3 md:flex-col">
          {/* Ruas jalur ke stasiun berikutnya; stasiun terakhir tidak punya ruas sehingga jalur berhenti di sana. */}
          {i < stops.length - 1 && (
            <span
              aria-hidden="true"
              style={{ background: color }}
              className="absolute -bottom-5 left-[calc(var(--m)/2-1px)] top-[calc(var(--m)/2)] w-0.5 md:-right-6 md:bottom-auto md:left-[calc(var(--m)/2)] md:top-[calc(var(--m)/2-1px)] md:h-0.5 md:w-auto"
            />
          )}
          <span className="relative z-10 mt-1 flex size-[var(--m)] shrink-0 items-center justify-center md:mt-0">
            {s.marker ?? <span className="size-full rounded-full border-2 bg-paper" style={{ borderColor: color }} />}
          </span>
          <div className="min-w-0 md:pr-4">{s.content}</div>
        </li>
      ))}
    </ol>
  );
}

/** Foto dengan sudut kanan atas terpotong seperti tikungan jalur, pita tipis warna jalur, dan duotone ringan. */
export function StationPhoto({
  src,
  alt,
  color,
  sizes,
  className = "",
  aspect = "aspect-[4/3]",
  priority = false,
}: {
  src: string;
  alt: string;
  color: string;
  sizes: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <div className={`[clip-path:polygon(0_0,calc(100%-24px)_0,100%_24px,100%_100%,0_100%)] ${className}`}>
      <div className="h-1" style={{ background: color }} />
      <div className={`relative ${aspect} overflow-hidden bg-ink`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover grayscale-[0.6]" />
        <span aria-hidden="true" className="absolute inset-0 mix-blend-multiply" style={{ background: color, opacity: 0.22 }} />
      </div>
    </div>
  );
}
