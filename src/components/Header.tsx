"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <div>
      {/* Top notification bar */}
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Want to get exclusive content and insider info? Subscribe to our newsletter</span>
          <div className="flex items-center space-x-6 text-sm">
            <button className="hover:text-gray-300">Dealer Login</button>
            <span>|</span>
            <button className="hover:text-gray-300">Support</button>
            <span>|</span>
            <button className="hover:text-gray-300">Wishlist</button>
            <span>|</span>
            <button className="hover:text-gray-300">Account</button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-black">WHEEL</span>
                <span className="text-red-600">PROS</span>
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                    Products
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Wheels</DropdownMenuItem>
                  <DropdownMenuItem>Accessories</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                Explore Brands
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                Dealers
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                About
              </Button>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Add Vehicle */}
              <Button variant="outline" className="hidden md:flex items-center">
                <User className="w-4 h-4 mr-2" />
                Add a Vehicle
              </Button>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search..."
                  className="w-64 pl-10"
                />
              </div>

              {/* Cart */}
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
