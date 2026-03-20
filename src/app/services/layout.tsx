import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Muha Investments offers passenger transport with 15-seater minibuses, goods logistics with 5-ton lorries, and property development in Blantyre, Malawi. Request a quote today.",
  keywords: [
    "passenger transport Blantyre",
    "goods transport Malawi",
    "lorry hire Malawi",
    "minibus hire Blantyre",
    "logistics company Malawi",
    "property development Malawi",
  ],
  openGraph: {
    title: "Our Services | Muha Investments",
    description:
      "Passenger transport, goods logistics, and property development in Malawi. Request a quote from Muha Investments today.",
    url: "https://www.muha-investments.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
