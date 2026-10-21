"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site, waLink } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tinggi header tetap supaya isi halaman tidak bergeser saat header berubah.
  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_18px_-12px_rgb(27_42_58/0.35)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <a href="#beranda" className="logo-link flex items-center gap-3" aria-label={site.name}>
          <span
            className={`block origin-left transition-transform duration-300 ease-out ${scrolled ? "scale-[0.78]" : "scale-100"}`}
          >
            <Image src="/logo-mark.png" alt="" width={38} height={37} priority className="logo-mark block" />
          </span>
          {/* Dua teks ditumpuk di satu sel: di atas halaman nama lengkap + tagline, saat scroll jadi singkatan. */}
          <span className="grid" aria-hidden="true">
            <span
              className={`col-start-1 row-start-1 leading-tight transition-all duration-300 ${
                scrolled ? "-translate-y-2 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <span className="block text-[15px] font-semibold">{site.name}</span>
              <span className="tagline-type block text-[10px] font-semibold uppercase tracking-[0.22em] text-web">
                {site.tagline}
              </span>
            </span>
            <span
              className={`col-start-1 row-start-1 self-center text-[17px] font-bold tracking-tight transition-all duration-300 ${
                scrolled ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              {site.shortName}
            </span>
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm text-ink-2">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={waLink("Halo PT Sistem Cerdas Indonesia, saya ingin berkonsultasi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-paper transition-colors hover:bg-web sm:inline-block"
          >
            Konsultasi
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-seluler"
            className="text-sm font-semibold lg:hidden"
          >
            {open ? "Tutup" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-seluler" aria-label="Navigasi seluler" className="border-t border-line lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-2 text-base font-medium"
                >
                  <span aria-hidden="true" className="size-2 rounded-full border-2 border-ink" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
