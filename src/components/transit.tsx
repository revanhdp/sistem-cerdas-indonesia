import Image from "next/image";

export const wrap = "relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10";

/** Judul bagian. */
export function SectionHeading({
  id,
  children,
  lead,
  dark = false,
}: {
  id: string;
  children: React.ReactNode;
  lead?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="text-[clamp(1.6rem,2.8vw,2.25rem)] font-bold leading-tight tracking-[-0.015em] text-balance">
        {children}
      </h2>
      {lead && <p className={`mt-3 leading-relaxed ${dark ? "text-paper/70" : "text-ink-2"}`}>{lead}</p>}
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
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover grayscale-[0.6] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0" />
        <span aria-hidden="true" className="absolute inset-0 mix-blend-multiply" style={{ background: color, opacity: 0.22 }} />
      </div>
    </div>
  );
}
