import { Truck } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">AM Truck Market</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Maharashtra's most trusted platform for buying and selling commercial trucks. Connecting dealers, owners and buyers since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <Link href="/trucks" className="hover:text-orange-400 transition-colors">Browse All Trucks</Link>
              <Link href="/trucks" className="hover:text-orange-400 transition-colors">Featured Listings</Link>
              <Link href="/trucks" className="hover:text-orange-400 transition-colors">List Your Truck</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p>📞 +91 98765 43210</p>
              <p>📧 info@amtruckmarket.com</p>
              <p>📍 Mumbai, Maharashtra</p>
              <p className="mt-2 text-xs">Mon–Sat: 9AM to 7PM</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © 2026 AM Truck Market. All rights reserved. | Built for Maharashtra's transport community.
        </div>
      </div>
    </footer>
  );
}