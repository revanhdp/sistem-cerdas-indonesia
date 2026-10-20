import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { TransitMap } from "@/components/TransitMap";
import { Rail, Roundel, StationHeading, StationLine, StationPhoto, indent, wrap } from "@/components/transit";
import {
  about,
  advantages,
  cta,
  line,
  nav,
  projects,
  services,
  site,
  stats,
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="beranda" aria-labelledby="judul-beranda">
      <div className={`${wrap} grid items-center gap-10 pb-12 pt-10 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-14`}>
        <div className="lg:col-span-6">
          <h1
            id="judul-beranda"
            className="text-[clamp(2.2rem,4.4vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.025em]"
          >
            {site.name}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-2">{site.headline}</p>
          <a
            href={waLink("Halo PT Sistem Cerdas Indonesia, saya ingin berkonsultasi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-paper transition-colors hover:bg-web"
          >
            Konsultasi sekarang
          </a>
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

      <div className="border-y border-line">
        <dl className={`${wrap} grid grid-cols-3`}>
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col-reverse py-5 ${i > 0 ? "border-l border-line pl-4 sm:pl-8" : ""}`}>
              <dt className="mt-0.5 text-sm text-ink-2">{s.label}</dt>
              <dd className="text-[clamp(1.6rem,3.6vw,2.4rem)] font-bold leading-none tracking-[-0.02em]">{s.value}</dd>
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
        <Rail />
        <div className={indent}>
          <StationHeading id="judul-tentang">Tentang kami</StationHeading>
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
        <Rail />
        <div className={indent}>
          <StationHeading id="judul-layanan" lead={services.intro}>
            Layanan PT SCID
          </StationHeading>

          <div className="mt-10 divide-y divide-line">
            {services.items.map((s) => {
              const transfer = "transfer" in s ? s.transfer : null;
              return (
                <article
                  key={s.key}
                  aria-labelledby={`layanan-${s.key}`}
                  className="grid gap-5 py-7 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="flex gap-3.5 lg:col-span-5">
                    <Roundel code={s.code} color={s.color} dark={s.key === "app"} />
                    <div>
                      <h3 id={`layanan-${s.key}`} className="text-lg font-bold leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{s.body}</p>
                    </div>
                  </div>
                  <div className="pl-[42px] lg:col-span-7 lg:pl-0 lg:pt-2">
                    <StationLine
                      color={s.color}
                      stops={s.stations.map((name, i) => {
                        const to = transfer?.at === i ? line(transfer.to) : null;
                        return {
                          key: name,
                          marker: to ? <span className="size-full rounded-full border-2 border-ink bg-paper" /> : undefined,
                          content: (
                            <p className="text-sm font-medium leading-snug">
                              {name}
                              {to && (
                                <span className="mt-1 flex items-center gap-1.5 text-xs font-normal text-ink-2">
                                  <span aria-hidden="true" className="size-1.5 rounded-full" style={{ background: to.color }} />
                                  Transit ke {to.short.toLowerCase()}
                                </span>
                              )}
                            </p>
                          ),
                        };
                      })}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyek" aria-labelledby="judul-proyek">
      <div className={`${wrap} ${section}`}>
        <Rail />
        <div className={indent}>
          <StationHeading id="judul-proyek">Proyek yang sudah berjalan</StationHeading>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
            {projects.map((p, i) => {
              const l = line(p.line);
              return (
                <article key={p.title} className={i === 1 ? "md:mt-12" : ""}>
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
    <section id="keunggulan" aria-labelledby="judul-keunggulan">
      <div className={`${wrap} ${section} pt-0 lg:pt-0`}>
        <Rail />
        <div className={indent}>
          <StationHeading id="judul-keunggulan">Mengapa PT Sistem Cerdas Indonesia?</StationHeading>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <li key={a.title} className="border-t border-line pt-4">
                <h3 className="font-bold leading-snug">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{a.body}</p>
              </li>
            ))}
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
        <Rail />
        <div className={indent}>
          <StationHeading id="judul-testimonial" lead={testimonials.intro}>
            Apa kata mereka tentang PT SCID?
          </StationHeading>
          <div className="mt-10">
            <StationLine
              color={line("rnd").color}
              markerSize={44}
              stops={testimonials.items.map((t) => ({
                key: t.name,
                marker: (
                  <span className="flex size-full items-center justify-center rounded-full border-2 border-rnd bg-white">
                    <Image src={t.logo} alt={`Logo ${t.org}`} width={32} height={32} className="size-8 rounded-full object-contain" />
                  </span>
                ),
                content: (
                  <figure className="md:mt-1">
                    <blockquote className="text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="mt-3 text-sm">
                      <span className="block font-semibold">{t.name}</span>
                      <span className="block text-ink-2">{t.role}</span>
                    </figcaption>
                  </figure>
                ),
              }))}
            />
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
        {/* Jalur utama berakhir di sini, di stasiun terakhir. */}
        <span aria-hidden="true" className="absolute left-4 top-0 h-[4.6rem] w-px bg-line sm:left-6 lg:left-10 lg:h-[6.1rem]" />
        <div className={indent}>
          <StationHeading id="judul-kontak" lead={cta.body}>
            {cta.heading}
          </StationHeading>

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
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">{site.description}</p>
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
