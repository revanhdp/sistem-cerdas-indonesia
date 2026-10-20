"use client";

import { services, waLink } from "@/content/site";

// Belum ada backend email, jadi pesan dirangkai dan dikirim lewat WhatsApp.
export function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      "Halo PT Sistem Cerdas Indonesia,",
      `Nama: ${f.get("nama")}`,
      f.get("instansi") ? `Instansi/usaha: ${f.get("instansi")}` : null,
      `Layanan: ${f.get("layanan")}`,
      "",
      String(f.get("pesan")),
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-1.5 block w-full rounded-none border border-line bg-card px-3 py-2.5 text-[15px] font-normal text-ink placeholder:text-ink-2/70 focus-visible:border-ink focus-visible:outline-none";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-semibold">
        Nama
        <input name="nama" required autoComplete="name" className={field} />
      </label>
      <label className="text-sm font-semibold">
        Instansi atau usaha <span className="font-normal text-ink-2">(opsional)</span>
        <input name="instansi" autoComplete="organization" className={field} />
      </label>
      <label className="text-sm font-semibold sm:col-span-2">
        Layanan yang dibutuhkan
        <select name="layanan" required defaultValue="" className={field}>
          <option value="" disabled>
            Pilih layanan
          </option>
          {services.items.map((s) => (
            <option key={s.key}>{s.title}</option>
          ))}
          <option>Belum tahu, ingin konsultasi dulu</option>
        </select>
      </label>
      <label className="text-sm font-semibold sm:col-span-2">
        Ceritakan kebutuhan Anda
        <textarea name="pesan" required rows={4} className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-paper transition-colors hover:bg-web"
        >
          Kirim lewat WhatsApp
        </button>
        <p className="text-sm text-ink-2">Pesan akan dibuka di WhatsApp sebelum dikirim.</p>
      </div>
    </form>
  );
}
