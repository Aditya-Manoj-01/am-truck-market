"use client";
import TruckCard from "@/components/trucks/TruckCard";
import { dummyTrucks } from "@/lib/data";

export default function TrucksPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Browse All Trucks</h1>
          <p className="text-gray-400 mt-2">Find your perfect truck from our verified listings</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-gray-500 mb-6">{dummyTrucks.length} trucks available</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyTrucks.map((truck) => (
            <TruckCard key={truck.id} truck={truck} />
          ))}
        </div>
      </div>
    </main>
  );
}