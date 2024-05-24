import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Favicon from "/public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wibu Nation",
  description: "Tempatnya para wibu yang suka nonton anime dan manga",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className} bg-color-dark min-h-screen flex-col flex">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
