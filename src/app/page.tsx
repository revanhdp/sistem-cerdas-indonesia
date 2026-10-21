import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { TransitMap } from "@/components/TransitMap";
import { Icon } from "@/components/icons";
import { Roundel, SectionHeading, StationPhoto, wrap } from "@/components/transit";
import {
  about,
  advantages,
  cta,
  facts,
  line,
  nav,
  projects,
  services,
  site,
  testimonials,
  waLink,
} from "@/content/site";

const section = "py-14 lg:py-20";

export default function Home() {
  return (
    <>
      <JsonLd />
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Langsung ke konten
      </a>
      <Header />
      <main id="konten">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Advantages />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="beranda" aria-labelledby="judul-beranda" className="map-paper">
      <div className={`${wrap} grid items-center gap-10 pb-12 pt-10 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-14`}>
        <div className="lg:col-span-6">
          <h1
            id="judul-beranda"
            className="text-[clamp(2.2rem,4.4vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.025em]"
          >
            {site.name}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-2">{site.headline}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={waLink("Halo PT Sistem Cerdas Indonesia, saya ingin berkonsultasi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-paper transition-colors hover:bg-web"
            >
              Konsultasi sekarang
            </a>
            <a href="#layanan" className="text-[15px] font-semibold underline-offset-4 hover:underline">
              Lihat layanan →
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <p className="text-sm text-ink-2">Dipercaya oleh</p>
            <ul className="flex items-center gap-3">
              {testimonials.items.map((t) => (
                <li key={t.org}>
                  <Image
                    src={t.logo}
                    alt={t.org}
                    title={t.org}
                    width={40}
                    height={40}
                    className="size-10 rounded-full bg-white object-contain p-1 ring-1 ring-line"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="lg:col-span-6">
          <TransitMap orientation="h" className="hidden h-auto w-full md:block" />
          <TransitMap orientation="v" className="mx-auto h-auto w-full max-w-xs md:hidden" />
          <figcaption className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-ink-2">
            {services.items.map((s) => (
              <span key={s.key} className="flex items-center gap-1.5">
                <span aria-hidden="true" className="size-2 rounded-full" style={{ background: s.color }} />
                {s.short}
              </span>
            ))}
          </figcaption>
        </figure>
      </div>

      <div className="border-y border-line bg-paper">
        <dl className={`${wrap} grid sm:grid-cols-3`}>
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`py-4 sm:py-5 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0 sm:pl-8" : ""}`}
            >
              <dt className="flex items-center gap-2 text-xs text-ink-2 sm:text-[13px]">
                <span aria-hidden="true" className="h-0.5 w-4" style={{ background: services.items[i].color }} />
                {f.label}
              </dt>
              <dd className="mt-1 font-semibold leading-snug">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" aria-labelledby="judul-tentang">
      <div className={`${wrap} ${section}`}>
        <div>
          <SectionHeading id="judul-tentang">Tentang kami</SectionHeading>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed">{about.body}</p>
              <ul className="mt-6 grid gap-x-6 gap-y-2 text-[15px] text-ink-2 sm:grid-cols-2">
                {about.points.map((p) => (
                  <li key={p} className="flex gap-2.5 leading-snug">
                    <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-web" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <StationPhoto
              src="/photos/tim-bekerja.jpg"
              alt="Tim pengembang bekerja bersama di depan laptop"
              color={line("web").color}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="lg:col-span-5"
            />
          </div>

          <div className="mt-12 grid gap-8 border-t border-line pt-10 lg:grid-cols-3 lg:gap-12">
            <div>
              <h3 className="font-bold">Company&rsquo;s value</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{about.value}</p>
            </div>
            <div>
              <h3 className="font-bold">Visi PT SCID</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{about.vision}</p>
            </div>
            <div>
              <h3 className="font-bold">Misi PT SCID</h3>
              <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink-2">
                {about.missions.map((m) => (
                  <li key={m} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ink" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="layanan" aria-labelledby="judul-layanan" className="bg-paper-2">
      <div className={`${wrap} ${section}`}>
        <SectionHeading id="judul-layanan" lead={services.lead}>
          Layanan
        </SectionHeading>

        <ol className="mt-12">
          {services.items.map((s, i) => {
            const examples = projects.filter((p) => p.line === s.key);
            return (
              <li
                key={s.key}
                aria-labelledby={`layanan-${s.key}`}
                className="relative grid gap-7 border-t border-ink/15 py-10 lg:grid-cols-12 lg:gap-12"
              >
                <span aria-hidden="true" className="absolute -top-px left-0 h-[3px] w-20" style={{ background: s.color }} />

                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <Roundel code={s.code} color={s.color} size={36} dark={s.key === "app"} />
                    <span aria-hidden="true" className="text-sm font-semibold tabular-nums text-ink-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 id={`layanan-${s.key}`} className="mt-4 text-[clamp(1.45rem,2.4vw,1.85rem)] font-bold leading-tight tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-ink-2">{s.body}</p>
                  <a
                    href={waLink(`Halo PT Sistem Cerdas Indonesia, saya ingin bertanya soal layanan ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-[15px] font-semibold underline decoration-2 underline-offset-4"
                    style={{ textDecorationColor: s.color }}
                  >
                    Tanya soal {s.short.toLowerCase()} →
                  </a>
                </div>

                <div className="lg:col-span-7">
                  <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                    {s.parts.map((part) => (
                      <div key={part.name}>
                        <dt className="flex items-center gap-2.5 font-semibold leading-snug">
                          <span aria-hidden="true" className="size-2 shrink-0" style={{ background: s.color }} />
                          {part.name}
                        </dt>
                        <dd className="mt-1.5 pl-[18px] text-[15px] leading-relaxed text-ink-2">{part.note}</dd>
                      </div>
                    ))}
                  </dl>

                  {examples.length > 0 && (
                    <div className="mt-7 border-t border-line pt-5">
                      <p className="text-xs font-medium text-ink-2">Contoh proyek</p>
                      <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-4">
                        {examples.map((p) => (
                          <li key={p.title} className="flex items-center gap-3">
                            <span className="relative size-12 shrink-0 overflow-hidden bg-ink">
                              <Image src={p.photo} alt="" fill sizes="48px" className="object-cover grayscale-[0.4]" />
                            </span>
                            <span className="text-sm leading-snug">
                              <span className="block font-semibold">{p.title}</span>
                              <span className="block text-ink-2">{p.client}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyek" aria-labelledby="judul-proyek">
      <div className={`${wrap} ${section}`}>
        <div>
          <SectionHeading id="judul-proyek">Proyek</SectionHeading>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
            {projects.map((p, i) => {
              const l = line(p.line);
              return (
                <article key={p.title} className={`group ${i === 1 ? "md:mt-12" : ""}`}>
                  <StationPhoto src={p.photo} alt={p.alt} color={l.color} sizes="(min-width: 768px) 30vw, 100vw" />
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-ink-2">
                    <span aria-hidden="true" className="size-2 rounded-full" style={{ background: l.color }} />
                    {l.short}
                  </div>
                  <h3 className="mt-1.5 text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-2">{p.client}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{p.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section id="keunggulan" aria-labelledby="judul-keunggulan" className="bg-ink text-paper">
      <div className={`${wrap} ${section}`}>
        <div>
          <SectionHeading id="judul-keunggulan" dark>
            Mengapa PT SCID
          </SectionHeading>
          <ul className="mt-10 grid gap-px border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => {
              const s = services.items[i % services.items.length];
              return (
                <li key={a.title} className="bg-ink p-6">
                  <span
                    className="flex size-10 items-center justify-center rounded-full"
                    style={{ background: s.color, color: s.key === "app" ? "#1b2a3a" : "#fbfcfd" }}
                  >
                    <Icon name={a.icon} />
                  </span>
                  <h3 className="mt-4 font-bold leading-snug">{a.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-paper/70">{a.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonial" aria-labelledby="judul-testimonial" className="bg-paper-2">
      <div className={`${wrap} ${section}`}>
        <SectionHeading id="judul-testimonial">Kata mitra kami</SectionHeading>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col border border-line bg-card p-6">
                <div className="flex items-center gap-3">
                  <Image src={t.logo} alt={`Logo ${t.org}`} width={36} height={36} className="size-9 rounded-full object-contain ring-1 ring-line" />
                  <span className="text-sm font-semibold leading-tight">{t.org}</span>
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 border-t border-line pt-3 text-sm">
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-ink-2">{t.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CtaBanner() {
  // Empat jalur layanan masuk dari kanan dan berhenti di stasiun masing-masing.
  const lines = [
    { d: "M400 40 H230", end: [230, 40], color: "#eef1f4" },
    { d: "M400 80 H270 L240 110 H170", end: [170, 110], color: "#d9a21b" },
    { d: "M400 120 H320 L290 150 H230", end: [230, 150], color: "#0e8a7b" },
    { d: "M400 175 H300", end: [300, 175], color: "#b8432b" },
  ];
  return (
    <section aria-labelledby="judul-cta" className="relative overflow-hidden bg-web text-paper">
      <svg
        viewBox="0 0 400 210"
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-auto md:block"
        preserveAspectRatio="xMaxYMid meet"
      >
        {lines.map((l) => (
          <g key={l.d}>
            <path d={l.d} fill="none" stroke={l.color} strokeWidth={4} strokeLinejoin="round" />
            <circle cx={l.end[0]} cy={l.end[1]} r={6} fill="#1f5fbf" stroke={l.color} strokeWidth={3} />
          </g>
        ))}
      </svg>
      <div className={`${wrap} relative py-12 lg:py-16`}>
        <div className="max-w-xl">
          <h2 id="judul-cta" className="text-[clamp(1.6rem,2.8vw,2.25rem)] font-bold leading-tight tracking-[-0.015em]">
            {cta.heading}
          </h2>
          <p className="mt-3 text-paper/85">{cta.body}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={waLink("Halo PT Sistem Cerdas Indonesia, saya ingin berkonsultasi tentang kebutuhan IT.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-paper px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
            >
              Chat WhatsApp
            </a>
            <a href="#kontak" className="text-[15px] font-semibold underline-offset-4 hover:underline">
              Isi formulir →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const mapQuery = encodeURIComponent(`${site.address.street}, ${site.address.city}`);
  return (
    <section id="kontak" aria-labelledby="judul-kontak">
      <div className={`${wrap} ${section}`}>
        <div>
          <SectionHeading id="judul-kontak">Kontak</SectionHeading>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <iframe
                title={`Peta lokasi kantor ${site.name}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-[4/3] w-full border border-line"
              />
              <address className="mt-4 text-[15px] not-italic leading-relaxed">
                <span className="font-semibold">Kantor kami</span>
                <br />
                <span className="text-ink-2">
                  {site.address.street}, {site.address.city}
                </span>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className={`${wrap} grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-12`}>
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-paper">
              <Image src="/logo-mark.png" alt="" width={24} height={23} />
            </span>
            <p className="font-semibold">{site.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">{site.summary}</p>
        </div>
        <nav aria-label="Menu footer" className="lg:col-span-3 lg:col-start-7">
          <p className="text-sm font-semibold">Menu</p>
          <ul className="mt-2 space-y-1.5 text-sm text-paper/75">
            <li>
              <a href="#beranda" className="hover:text-paper hover:underline">Beranda</a>
            </li>
            {nav.filter((n) => n.id !== "kontak").map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-paper hover:underline">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold">Sosial media</p>
          <ul className="mt-2 space-y-1.5 text-sm text-paper/75">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper hover:underline">
                  {s.label}: {s.handle}
                </a>
              </li>
            ))}
            <li>
              <a href={waLink("Halo PT Sistem Cerdas Indonesia")} target="_blank" rel="noopener noreferrer" className="hover:text-paper hover:underline">
                WhatsApp: {site.whatsapp.display}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <p className={`${wrap} py-4 text-xs text-paper/55`}>
          © {site.copyrightYear} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
