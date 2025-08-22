import Script from 'next/script';

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Supersonic Customs",
    description: "Specialist soundproofing and acoustic treatment company serving South Africa, DRC, Zambia, Mozambique, and Namibia.",
    url: "https://supersoniccustoms.com",
    telephone: "+27 21 203 0054",
    email: "info@supersoniccustoms.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25B Gray Rd",
      addressLocality: "Paarden Eiland",
      addressRegion: "Cape Town",
      postalCode: "7405",
      addressCountry: "ZA"
    },
    areaServed: [
      {
        "@type": "Country",
        "name": "South Africa"
      },
      {
        "@type": "Country",
        "name": "Democratic Republic of Congo"
      },
      {
        "@type": "Country",
        "name": "Zambia"
      },
      {
        "@type": "Country",
        "name": "Mozambique"
      },
      {
        "@type": "Country",
        "name": "Namibia"
      }
    ],
    logo: "https://supersoniccustoms.com/logo.svg",
    image: "https://supersoniccustoms.com/logo.svg",
    sameAs: [],
    foundingDate: "2014",
    numberOfEmployees: "10-50"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://supersoniccustoms.com/#business",
    name: "Supersonic Customs",
    description: "Professional soundproofing and acoustic treatment services for residential, commercial, and industrial applications.",
    url: "https://supersoniccustoms.com",
    telephone: "+27 21 203 0054",
    email: "info@supersoniccustoms.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25B Gray Rd",
      addressLocality: "Paarden Eiland",
      addressRegion: "Cape Town",
      postalCode: "7405",
      addressCountry: "ZA"
    },
    openingHours: [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00"
    ],
    priceRange: "$-$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Acoustic Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soundproofing",
            description: "Professional noise isolation using mass, sealing, and decoupling techniques"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Acoustic Treatment",
            description: "Echo control and sound quality improvement using absorption and diffusion materials"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Noise & Vibration Control",
            description: "Specialized solutions for industrial machinery and equipment noise control"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ANC (Active Noise Cancellation)",
            description: "Cutting-edge active noise control systems using electronic processing"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sound System Design",
            description: "Professional audio system specification and design services"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Noise Impact Surveys",
            description: "Comprehensive noise impact assessments and compliance surveys"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Room-in-Room Construction",
            description: "Complete isolated room construction for maximum sound isolation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carpentry & Custom Manufacturing",
            description: "Expert carpentry and custom manufacturing for specialized acoustic installations"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AV Tech Supply & Install",
            description: "Complete audio-visual technology supply and installation services"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(organizationSchema)}
      </Script>

      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessSchema)}
      </Script>
    </>
  );
}
