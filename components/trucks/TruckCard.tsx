import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck } from "@/types/truck";

function formatPrice(price: number) {
  if (price >= 100000) {
    return "₹" + (price / 100000).toFixed(1) + " Lakh";
  }
  return "₹" + price.toLocaleString("en-IN");
}

export default function TruckCard({ truck }: { truck: Truck }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={truck.images[0]}
          alt={`${truck.brand} ${truck.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {truck.featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-orange-500 text-white flex items-center gap-1">
              <Star className="h-3 w-3 fill-white" /> Featured
            </Badge>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge className="bg-white text-gray-800 font-bold shadow">
            {truck.year}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-500 transition-colors">
          {truck.brand} {truck.model}
        </h3>

        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-orange-400" />
            {truck.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-orange-400" />
            {truck.year}
          </span>
        </div>

        <p className="text-gray-500 text-sm mt-3 line-clamp-2">
          {truck.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xs text-gray-400">Price</p>
            <p className="text-2xl font-bold text-orange-500">
              {formatPrice(truck.price)}
            </p>
          </div>
          <Link href={`/trucks/${truck.id}`}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}