"use client";

import Image from "next/image";
import { useState } from "react";
import { nav, site, waLink } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <a href="#beranda" className="flex items-center gap-3">
          <Image src="/logo-mark.png" alt="" width={28} height={27} priority />
          <span className="text-[15px] font-semibold leading-tight">{site.name}</span>
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
