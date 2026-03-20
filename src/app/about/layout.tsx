import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Muha Investments — founded in October 2021 in Blantyre, Malawi. A growing transport and property development company with 4 partners, 8+ assets, and a commitment to building Malawi's future.",
  keywords: [
    "Muha Investments about",
    "investment company Blantyre Malawi",
    "transport company history Malawi",
    "property development company Malawi",
    "Blantyre business",
  ],
  openGraph: {
    title: "About Muha Investments | Transport & Property in Malawi",
    description:
      "Founded in 2021 in Blantyre, Muha Investments has grown to 4 partners and 8+ assets — building Malawi's future through transport and property development.",
    url: "https://www.muha-investments.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
