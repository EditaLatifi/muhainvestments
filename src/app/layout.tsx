import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Muha Investments",
  description: "Building the future of transport & development in Malawi.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans bg-gray-50">
        <Header />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
