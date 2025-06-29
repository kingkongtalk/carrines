"use client";

import { Phone, MapPin, User } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section with contact cards */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Support */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Contact Support</h3>
                <p className="text-sm text-gray-400">Get in touch with our dedicated support staff</p>
              </div>
            </div>

            {/* Track Order */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Track Order</h3>
                <p className="text-sm text-gray-400">Check the status of your order</p>
              </div>
            </div>

            {/* My Account */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">My Account</h3>
                <p className="text-sm text-gray-400">Manage your personal information</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">LET'S STAY CONNECTED</h3>
            <p className="text-gray-400 mb-4">
              Designed for the industry's best, by the industry's best. Keep up
              to date with our newsletter.
            </p>
            <p className="text-sm text-gray-400">
              Your personal information is protected. View our{" "}
              <button className="text-white underline">Privacy Policy</button>.
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">▶</span>
              </div>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Wheel Pros Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Vehicle Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">2025 Catalog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Investors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Support & Dealers */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Warranty</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns and Exchanges</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Wheel Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">ESG</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Dealers</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Find a Dealer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Become a Dealer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Dealerline</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
              <span>COPYRIGHT © 2025</span>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">CCPA</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Accessibility</a>
            </div>
            <div className="text-white font-bold text-lg">
              [HOONIGAN]
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
