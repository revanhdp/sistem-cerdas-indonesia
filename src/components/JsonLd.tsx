import { services, site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "id-ID",
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        alternateName: site.shortName,
        slogan: site.tagline,
        description: site.description,
        url: site.url,
        logo: `${site.url}/logo.png`,
        image: `${site.url}/logo.png`,
        telephone: site.whatsapp.display,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        areaServed: "ID",
        sameAs: site.socials.map((s) => s.href),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: site.whatsapp.display,
          availableLanguage: ["id", "en"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan PT SCID",
          itemListElement: services.items.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.body },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
