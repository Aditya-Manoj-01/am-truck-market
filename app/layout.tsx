import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LanguageModal from "@/components/LanguageModal";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AM Truck Market | Buy & Sell Trucks in Maharashtra",
  description: "Maharashtra's most trusted platform for buying and selling commercial trucks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <LanguageModal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}