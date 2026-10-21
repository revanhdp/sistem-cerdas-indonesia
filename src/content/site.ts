// Konten diringkas dari https://sistemcerdas.id/ — ubah di sini, bukan di komponen.

export const site = {
  url: "https://sistemcerdas.id",
  name: "PT Sistem Cerdas Indonesia",
  shortName: "PT SCID",
  tagline: "For Smart Future",
  copyrightYear: 2026,
  headline: "Teknologi responsif yang membantu bisnis bekerja lebih cepat dan lebih baik.",
  // Ringkasan pendek untuk footer; `description` tetap utuh untuk meta SEO.
  summary: "Software house di Malang untuk UMKM, perusahaan, dan kampus.",
  description:
    "PT Sistem Cerdas Indonesia adalah mitra teknologi yang menghadirkan solusi digital, sistem cerdas, dan inovasi berbasis teknologi untuk menjawab kebutuhan bisnis di era modern.",
  address: {
    street: "Jl. Emas No. 104, Purwantoro",
    city: "Malang",
    region: "Jawa Timur",
    country: "ID",
  },
  whatsapp: {
    display: "+62 857-185-1234",
    number: "628571851234",
  },
  socials: [
    { label: "Instagram", handle: "@smartsystem.id", href: "https://www.instagram.com/smartsystem.id/" },
    { label: "TikTok", handle: "@sistemcerdas", href: "https://www.tiktok.com/@sistemcerdas" },
  ],
} as const;

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const nav = [
  { id: "tentang", label: "Tentang" },
  { id: "layanan", label: "Layanan" },
  { id: "proyek", label: "Proyek" },
  { id: "keunggulan", label: "Keunggulan" },
  { id: "testimonial", label: "Testimoni" },
  { id: "kontak", label: "Kontak" },
] as const;

// Pengganti angka-angka capaian: hanya fakta yang bisa dicek, bukan klaim.
export const facts = [
  { label: "Kantor", value: "Malang, Jawa Timur" },
  { label: "Melayani", value: "UMKM, perusahaan, dan kampus" },
  { label: "Cara mulai", value: "Ceritakan kebutuhan lewat WhatsApp" },
] as const;

export const about = {
  body: "Perusahaan teknologi di Malang yang membangun solusi digital untuk UMKM, perusahaan, dan universitas, lewat pengembangan produk dan kolaborasi riset.",
  points: ["Layanan jangka panjang", "Tim ahli profesional", "Optimasi sistem IT", "Efisiensi bisnis"],
  value: "Pendekatan teknologi yang cerdas, fleksibel, dan berdampak nyata.",
  vision: "Perusahaan teknologi terdepan di Indonesia dengan solusi digital yang inovatif, adaptif, dan berkelanjutan.",
  missions: [
    "Solusi digital yang cerdas dan mudah dipakai.",
    "Kolaborasi riset dengan universitas dan lembaga riset.",
    "Kemitraan jangka panjang dengan layanan responsif.",
  ],
} as const;

export const services = {
  lead: "Empat layanan yang bisa dipesan sendiri-sendiri atau digabung, dari website sampai riset bersama kampus.",
  items: [
    {
      key: "web",
      code: "W",
      short: "Website",
      color: "#1f5fbf",
      title: "Website",
      body: "Dari website sederhana untuk UMKM hingga sistem portal kampus.",
      parts: [
        { name: "Website UMKM", note: "Profil usaha, katalog produk, dan tombol pesan lewat WhatsApp." },
        { name: "Portal kampus", note: "Informasi, pendaftaran, dan layanan sivitas dalam satu pintu." },
      ],
    },
    {
      key: "app",
      code: "A",
      short: "Aplikasi seluler",
      color: "#d9a21b",
      title: "Aplikasi Seluler",
      body: "Aplikasi Android dan iOS untuk mendukung layanan digital.",
      parts: [
        { name: "Android", note: "Rilis di Google Play untuk jangkauan pengguna terluas." },
        { name: "iOS", note: "Rilis di App Store untuk pengguna iPhone dan iPad." },
      ],
    },
    {
      key: "rnd",
      code: "R",
      short: "Riset",
      color: "#0e8a7b",
      title: "Riset & Pengembangan",
      body: "Kerja sama dengan perguruan tinggi di Malang untuk riset terapan, pengembangan sistem informasi, dan pendampingan teknologi.",
      parts: [
        { name: "Riset terapan", note: "Mengubah pertanyaan penelitian jadi prototipe, seperti chatbot MoChi." },
        { name: "Sistem informasi", note: "Hasil riset yang matang lanjut dibangun jadi sistem utuh." },
        { name: "Pendampingan teknologi", note: "Pendampingan teknis selama penelitian berjalan." },
      ],
    },
    {
      key: "sis",
      code: "S",
      short: "Sistem informasi",
      color: "#b8432b",
      title: "Sistem Informasi & Otomasi",
      body: "Sistem terintegrasi untuk operasional yang efisien dan keputusan berbasis data.",
      parts: [
        { name: "Inventori", note: "Stok masuk dan keluar tercatat, termasuk yang tersebar di beberapa marketplace." },
        { name: "ERP ringan", note: "Penjualan, pembelian, dan keuangan dasar di satu tempat, tanpa kerumitan ERP besar." },
        { name: "Sistem akademik", note: "Data mahasiswa, jadwal, dan nilai untuk kampus atau lembaga pendidikan." },
        { name: "Aplikasi internal", note: "Alat khusus untuk alur kerja yang tidak ada di aplikasi siap pakai." },
      ],
    },
  ],
} as const;

export type LineKey = (typeof services.items)[number]["key"];
export const line = (key: LineKey) => services.items.find((s) => s.key === key)!;

// Proyek diturunkan dari testimoni di situs asli.
export const projects = [
  {
    title: "Sistem penjualan AremaToys",
    body: "Sistem penjualan yang terintegrasi dengan beberapa marketplace.",
    client: "AremaToys",
    line: "sis",
    photo: "/photos/proyek-arematoys.jpg",
    alt: "Gudang berisi rak dan kardus barang dagangan",
  },
  {
    title: "Chatbot MoChi",
    body: "Chatbot untuk penelitian ibu hamil, ibu menyusui, dan kader Posyandu.",
    client: "FIKES Universitas Brawijaya",
    line: "rnd",
    photo: "/photos/proyek-mochi.jpg",
    alt: "Tangan mengetik di laptop dengan stetoskop di meja",
  },
  {
    title: "EARCLIP HEALTH (ECH)",
    body: "Mitra riset untuk map guideline EARCLIP HEALTH.",
    client: "FIK Universitas Negeri Malang",
    line: "rnd",
    photo: "/photos/proyek-ech.jpg",
    alt: "Seorang perempuan berlatih sit-up di lantai",
  },
] as const satisfies readonly { line: LineKey; [k: string]: string }[];

export const advantages = [
  { icon: "chip", title: "Teknologi mutakhir", body: "Selalu memakai teknologi terbaru agar solusi efisien dan kompetitif." },
  { icon: "wrench", title: "Dukungan berkelanjutan", body: "Pemeliharaan dan dukungan teknis jangka panjang agar sistem tetap stabil." },
  { icon: "users", title: "Tim profesional", body: "Berpengalaman di software, cloud, keamanan sistem, dan implementasi IT." },
  { icon: "building", title: "Lintas industri", body: "Dipercaya klien pemerintahan, pendidikan, UMKM, dan swasta." },
  { icon: "bolt", title: "Cepat & efisien", body: "Proses terstruktur, selesai tepat waktu tanpa mengorbankan kualitas." },
  { icon: "shield", title: "Keamanan terjamin", body: "Standar perlindungan data di setiap proyek untuk mencegah kebocoran." },
] as const;

export const testimonials = {
  items: [
    {
      quote:
        "PT. SCI membantu penelitian kami untuk pembuatan chatbot (MoChi) membantu penelitian ibu hamil dan menyusui juga kader Posyandu.",
      name: "Widya Rahmawati, S.Gz., M.Gizi, Ph.D.",
      role: "Dosen FIKES UB",
      logo: "/clients/ub.png",
      org: "Universitas Brawijaya",
    },
    {
      quote:
        "Terima kasih PT.SCID atas supportnya untuk mitra kejasama di penelitian kami EARCLIP HEALTH (ECH) sebagai map guideline.",
      name: "Prisca Widiawati, M.Pd",
      role: "FIK Universitas Negeri Malang",
      logo: "/clients/um.png",
      org: "Universitas Negeri Malang",
    },
    {
      quote:
        "Sangat support untuk update sistem penjualan kami di toko AremaToys yang sudah terintegrasi beberapa platform Marketplace.",
      name: "S. Patrya",
      role: "CEO @AREMATOYS",
      logo: "/clients/arematoys.png",
      org: "AremaToys",
    },
  ],
} as const;

export const team = {
  heading: "The Engineers, Builders, and Innovators Behind Our Code",
  body: [
    "Kami adalah tim pengembang, desainer, dan pemikir teknologi yang memecahkan masalah kompleks dengan solusi yang bersih dan terukur.",
    "Bersama-sama, kita menggabungkan logika dengan kreativitas, dan ketepatan dengan tujuan.",
  ],
  members: [
    { name: "Y Yusmanto, M.T.", role: "Co-Founder - Direktur", initials: "YY" },
    { name: "Ir. Sukma Patyra, S.T.", role: "Marketing Manager", initials: "SP" },
    { name: "M. Nabil Ghifari, S.Kom.", role: "Chief Operating Officer", initials: "NG" },
    { name: "Sonny Witarto", role: "Keuangan", initials: "SW" },
  ],
} as const;

export const cta = {
  heading: "Wujudkan kebutuhan IT Anda",
  body: "Ceritakan kebutuhan Anda, kami bantu rancang solusinya.",
} as const;
