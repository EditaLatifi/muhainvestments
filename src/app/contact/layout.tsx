import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Muha Investments in Blantyre, Malawi. Call us on +265 998 891 004 or send a message. We offer passenger transport, goods logistics, and property development services.",
  keywords: [
    "contact Muha Investments",
    "transport company contact Malawi",
    "Blantyre logistics contact",
    "hire lorry Malawi",
    "book minibus Blantyre",
  ],
  openGraph: {
    title: "Contact Muha Investments | Blantyre, Malawi",
    description:
      "Reach Muha Investments at +265 998 891 004. Based in Blantyre, Malawi — offering transport and property development services.",
    url: "https://www.muha-investments.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
