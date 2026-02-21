import Link from "next/link";
import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-lg">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900">AM Truck</span>
              <span className="font-bold text-xl text-orange-500"> Market</span>
              <p className="text-xs text-gray-400 leading-none">Buy & Sell Trucks</p>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="/trucks" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
              Browse Trucks
            </Link>
            <Link href="/trucks" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              + List Your Truck
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
}