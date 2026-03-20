import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muha-investments.com"),
  title: {
    default: "Muha Investments | Transport & Property Development in Malawi",
    template: "%s | Muha Investments",
  },
  description:
    "Muha Investments is a leading transport and property development company in Blantyre, Malawi. Offering passenger transport, goods logistics with 5-ton lorries, and property development since 2021.",
  keywords: [
    "transport company Malawi",
    "logistics Malawi",
    "minibus hire Blantyre",
    "lorry hire Malawi",
    "goods transport Malawi",
    "passenger transport Blantyre",
    "investment company Malawi",
    "property development Blantyre",
    "Muha Investments",
  ],
  authors: [{ name: "Muha Investments" }],
  creator: "Muha Investments",
  openGraph: {
    type: "website",
    locale: "en_MW",
    url: "https://www.muha-investments.com",
    siteName: "Muha Investments",
    title: "Muha Investments | Transport & Property Development in Malawi",
    description:
      "Reliable passenger transport, goods logistics, and property development in Blantyre, Malawi. Serving communities since 2021.",
    images: [
      {
        url: "/MUHA.png",
        width: 800,
        height: 600,
        alt: "Muha Investments Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muha Investments | Transport & Property Development in Malawi",
    description:
      "Reliable passenger transport, goods logistics, and property development in Blantyre, Malawi.",
    images: ["/MUHA.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Muha Investments",
  description:
    "Transport and property development company in Blantyre, Malawi. Offering passenger transport, goods logistics, and property development.",
  url: "https://www.muha-investments.com",
  telephone: "+265998891004",
  email: "info@muha-investments.com",
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Blantyre",
    addressCountry: "MW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -15.7762,
    longitude: 35.0308,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
  sameAs: [
    "https://facebook.com",
    "https://twitter.com",
    "https://linkedin.com",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Transport & Investment Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Passenger Transport" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Goods Transport" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Development" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans bg-gray-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
