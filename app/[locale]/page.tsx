"use client";
import Link from "next/link";
import { Search, Shield, Clock, Users, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import TruckCard from "@/components/trucks/TruckCard";
import { dummyTrucks } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();
  const featuredTrucks = dummyTrucks.filter((t: any) => t.featured);
  const latestTrucks = dummyTrucks.slice(0, 6);

  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1 text-orange-300 text-sm font-medium mb-6">
            🚛 {t("hero.badge")}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            {t("hero.title")}
            <span className="text-orange-400 block mt-2">{t("hero.subtitle")}</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {t("hero.description")}
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-2 flex gap-2 shadow-2xl">
            <div className="flex items-center gap-2 flex-1 px-3">
              <Search className="h-5 w-5 text-gray-400" />
              <input type="text" placeholder={t("hero.search")} className="flex-1 outline-none text-gray-700 text-sm py-2" />
            </div>
            <Link href="trucks">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-2 font-semibold">
                {t("hero.searchBtn")}
              </Button>
            </Link>
          </div>
          <div className="flex justify-center gap-10 mt-12 text-center">
            <div>
              <p className="text-3xl font-bold text-orange-400">500+</p>
              <p className="text-gray-400 text-sm">{t("hero.stat1")}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400">200+</p>
              <p className="text-gray-400 text-sm">{t("hero.stat2")}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400">50+</p>
              <p className="text-gray-400 text-sm">{t("hero.stat3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("why.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{t("why.v1title")}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t("why.v1desc")}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{t("why.v2title")}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t("why.v2desc")}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{t("why.v3title")}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t("why.v3desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">⭐ {t("featured.title")}</h2>
              <p className="text-gray-500 mt-1">{t("featured.subtitle")}</p>
            </div>
            <Link href="trucks">
              <Button variant="outline" className="flex items-center gap-2 border-orange-500 text-orange-500 hover:bg-orange-50">
                {t("featured.viewAll")} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTrucks.map((truck: any) => (
              <TruckCard key={truck.id} truck={truck} />
            ))}
          </div>
        </div>
      </section>

      {/* LATEST */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">🚛 {t("latest.title")}</h2>
              <p className="text-gray-500 mt-1">{t("latest.subtitle")}</p>
            </div>
            <Link href="trucks">
              <Button variant="outline" className="flex items-center gap-2 border-orange-500 text-orange-500 hover:bg-orange-50">
                {t("latest.viewAll")} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestTrucks.map((truck: any) => (
              <TruckCard key={truck.id} truck={truck} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t("cta.title")}</h2>
          <p className="text-orange-100 text-lg mb-8">{t("cta.desc")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-3 rounded-xl text-lg">
              + {t("cta.listBtn")}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-orange-400 font-semibold px-8 py-3 rounded-xl text-lg flex items-center gap-2">
              <Phone className="h-5 w-5" /> {t("cta.callBtn")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}