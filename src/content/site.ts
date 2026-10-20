// Seluruh konten diambil dari https://sistemcerdas.id/ — ubah di sini, bukan di komponen.

export const site = {
  url: "https://sistemcerdas.id",
  name: "PT Sistem Cerdas Indonesia",
  shortName: "PT SCID",
  tagline: "For Smart Future",
  copyrightYear: 2026,
  headline:
    "Penyedia Teknologi Responsif Terbesar yang Memberdayakan Bisnis untuk Bekerja Lebih Cepat dan Lebih Baik",
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

export const stats = [
  { value: "25+", label: "Project selesai" },
  { value: "10+", label: "Tim handal" },
  { value: "50+", label: "Pelanggan puas" },
] as const;

export const about = {
  body: "PT Sistem Cerdas Indonesia adalah perusahaan rintisan di bidang teknologi yang berfokus memberikan solusi digital untuk pelaku usaha dan institusi pendidikan. Berkantor di Malang, kami berkomitmen menjadi mitra strategis bagi UMKM, perusahaan maupun universitas melalui inovasi dan kolaborasi riset berbasis teknologi.",
  points: [
    "Berpengalaman menyediakan layanan jangka panjang",
    "Tim ahli yang profesional",
    "Layanan terbaik dalam mengoptimalkan sistem IT",
    "Meningkatkan efisiensi bisnis",
  ],
  value:
    "Sebagai mitra digital yang inovatif dan berpengalaman, kami siap membantu Anda mencapai tujuan melalui pendekatan teknologi yang cerdas, fleksibel, dan berdampak nyata.",
  vision:
    "Menjadi perusahaan teknologi terdepan di Indonesia yang menghadirkan solusi digital inovatif, adaptif, dan berkelanjutan.",
  missions: [
    "Mengembangkan solusi digital yang cerdas dan mudah digunakan.",
    "Mendorong kolaborasi riset dengan universitas dan lembaga riset.",
    "Membangun kemitraan jangka panjang melalui pelayanan responsif.",
  ],
} as const;

export const services = {
  intro:
    "Kami menyediakan beragam layanan berbasis IT yang disesuaikan dengan kebutuhan mitra kami, antara lain:",
  items: [
    {
      key: "web",
      code: "W",
      short: "Website",
      color: "#1f5fbf",
      title: "Pembuatan & Instalasi Website",
      body: "Mulai dari website sederhana untuk UMKM hingga sistem portal kampus.",
      stations: ["Website UMKM", "Portal kampus"],
    },
    {
      key: "app",
      code: "A",
      short: "Aplikasi seluler",
      color: "#d9a21b",
      title: "Pengembangan Aplikasi Seluler",
      body: "Solusi aplikasi Android dan iOS untuk mendukung layanan digital.",
      stations: ["Android", "iOS"],
    },
    {
      key: "rnd",
      code: "R",
      short: "Riset",
      color: "#0e8a7b",
      title: "Kolaborasi Riset & Pengembangan",
      body: "Bekerja sama dengan perguruan tinggi di Malang dalam program riset terapan, pengembangan sistem informasi, dan pendampingan teknologi.",
      stations: ["Riset terapan", "Pengembangan sistem informasi", "Pendampingan teknologi"],
      // Stasiun ke-2 bersinggungan dengan jalur Sistem Informasi.
      transfer: { at: 1, to: "sis" },
    },
    {
      key: "sis",
      code: "S",
      short: "Sistem informasi",
      color: "#b8432b",
      title: "Pengembangan Sistem Informasi & Otomasi Bisnis",
      body: "Menyediakan solusi sistem informasi terintegrasi—seperti manajemen inventori, ERP ringan, sistem akademik, hingga aplikasi internal perusahaan—untuk membantu mitra meningkatkan efisiensi operasional dan pengambilan keputusan berbasis data.",
      stations: ["Manajemen inventori", "ERP ringan", "Sistem akademik", "Aplikasi internal perusahaan"],
    },
  ],
} as const;

export type LineKey = (typeof services.items)[number]["key"];
export const line = (key: LineKey) => services.items.find((s) => s.key === key)!;

// Proyek diturunkan dari testimoni di situs asli.
export const projects = [
  {
    title: "Sistem penjualan AremaToys",
    body: "Pembaruan sistem penjualan toko AremaToys yang sudah terintegrasi dengan beberapa platform marketplace.",
    client: "AremaToys",
    line: "sis",
    photo: "/photos/proyek-arematoys.jpg",
    alt: "Gudang berisi rak dan kardus barang dagangan",
  },
  {
    title: "Chatbot MoChi",
    body: "Pembuatan chatbot MoChi untuk penelitian ibu hamil dan menyusui, juga kader Posyandu.",
    client: "FIKES Universitas Brawijaya",
    line: "rnd",
    photo: "/photos/proyek-mochi.jpg",
    alt: "Tangan mengetik di laptop dengan stetoskop di meja",
  },
  {
    title: "EARCLIP HEALTH (ECH)",
    body: "Mitra kerja sama penelitian EARCLIP HEALTH (ECH) sebagai map guideline.",
    client: "Pendidikan Kepelatihan Olahraga FIK – Univ. Negeri Malang",
    line: "rnd",
    photo: "/photos/proyek-ech.jpg",
    alt: "Seorang perempuan berlatih sit-up di lantai",
  },
] as const satisfies readonly { line: LineKey; [k: string]: string }[];

export const advantages = [
  {
    title: "Teknologi Mutakhir",
    body: "PT Sistem Cerdas Indonesia selalu mengadopsi teknologi terbaru untuk memastikan setiap solusi memiliki efisiensi tinggi dan keunggulan kompetitif.",
  },
  {
    title: "Pemeliharaan & Dukungan Berkelanjutan",
    body: "Kami menyediakan layanan pemeliharaan sistem dan dukungan teknis jangka panjang untuk memastikan aplikasi dan infrastruktur Anda stabil.",
  },
  {
    title: "Tim Profesional & Berkompeten",
    body: "Proyek Anda ditangani oleh tim ahli dengan pengalaman di bidang software, cloud computing, keamanan sistem, dan implementasi IT modern.",
  },
  {
    title: "Berpengalaman di Berbagai Industri",
    body: "Berbagai klien pemerintahan, pendidikan, UMKM, dan perusahaan swasta telah mempercayakan kebutuhan digital mereka kepada kami.",
  },
  {
    title: "Proses Cepat & Efisien",
    body: "Dengan metodologi kerja yang terstruktur dan penggunaan teknologi canggih, setiap proyek selesai tepat waktu tanpa mengorbankan kualitas.",
  },
  {
    title: "Keamanan Terjamin",
    body: "Kami menjunjung tinggi keamanan data. Setiap proyek dilengkapi standar perlindungan terbaik untuk mencegah risiko kebocoran dan ancaman siber.",
  },
] as const;

export const testimonials = {
  intro:
    "Terima kasih telah berkerjasama dengan kami PT Sistem Cerdas Indonesia, testimoni Anda memberikan semangat dan harapan bagi tim kami untuk terus berkembang.",
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
      role: "Pendidikan Kepelatihan Olahraga FIK – Univ. Negeri Malang",
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
  heading: "Wujudkan Kebutuhan IT Anda Bersama PT Sistem Cerdas Indonesia",
  body: "PT Sistem Cerdas Indonesia menawarkan rangkaian solusi teknologi yang dirancang secara presisi untuk mendukung perkembangan bisnis Anda. Dengan pendekatan yang efisien dan inovatif, kami membantu memperkuat sistem, meningkatkan produktivitas, dan mendorong perusahaan Anda beradaptasi secara optimal di era digital.",
} as const;
