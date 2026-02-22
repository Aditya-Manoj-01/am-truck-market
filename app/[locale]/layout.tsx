import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LanguageModal from "@/components/LanguageModal";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AM Truck Market | Buy & Sell Trucks in Maharashtra",
  description: "Maharashtra's most trusted platform for buying and selling commercial trucks.",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function LocaleLayout({ children, params }: any) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={geist.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageModal />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}