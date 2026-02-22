"use client";
import { useState } from "react";
import TruckCard from "@/components/trucks/TruckCard";
import { dummyTrucks } from "@/lib/data";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TrucksPage() {
  const t = useTranslations();
  const [search, setSearch] = useState("");

  const filtered = dummyTrucks.filter((truck) =>
    `${truck.brand} ${truck.model} ${truck.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{t("featured.title")}</h1>
          {/* Search */}
          <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 max-w-lg">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={t("hero.search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none text-gray-700 text-sm py-1"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-500 mb-6">{filtered.length} {t("trucks.available")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((truck) => (
            <TruckCard key={truck.id} truck={truck} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No trucks found</p>
          </div>
        )}
      </div>
    </main>
  );
}