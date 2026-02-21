"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Phone, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { dummyTrucks } from "@/lib/data";
import { use } from "react";

function formatPrice(price: number) {
  if (price >= 100000) {
    return "₹" + (price / 100000).toFixed(1) + " Lakh";
  }
  return "₹" + price.toLocaleString("en-IN");
}

export default function TruckDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const truck = dummyTrucks.find((t) => t.id === id);
  if (!truck) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/trucks">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Listings
          </Button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={truck.images[0]}
              alt={`${truck.brand} ${truck.model}`}
              fill
              className="object-cover"
            />
            {truck.featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-orange-500 text-white flex items-center gap-1">
                  <Star className="h-3 w-3 fill-white" /> Featured
                </Badge>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h1 className="text-3xl font-extrabold text-gray-900">
              {truck.brand} {truck.model}
            </h1>

            <div className="flex items-center gap-4 mt-3 text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-orange-400" />
                {truck.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-orange-400" />
                {truck.year}
              </span>
            </div>

            <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <p className="text-sm text-gray-500">Asking Price</p>
              <p className="text-4xl font-extrabold text-orange-500 mt-1">
                {formatPrice(truck.price)}
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-bold text-gray-900 mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{truck.description}</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400">Brand</p>
                <p className="font-bold text-gray-800">{truck.brand}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400">Model</p>
                <p className="font-bold text-gray-800">{truck.model}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400">Year</p>
                <p className="font-bold text-gray-800">{truck.year}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400">Location</p>
                <p className="font-bold text-gray-800">{truck.location}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-lg flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> Contact Seller
              </Button>
              <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 rounded-xl">
                Send Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}