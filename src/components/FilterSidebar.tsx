"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus } from "lucide-react";

const brands = [
  "American Racing",
  "Asanti",
  "Black Rhino",
  "Black Rhino UTV",
  "Cray",
  "DUB",
  "Fairway Alloys",
  "Foose",
  "Fuel Off-Road",
  "Fuel UTV",
  "Helo",
  "KMC UTV",
  "KMC Wheels",
  "Level 8"
];

const finishes = [
  "Black", "Blue", "Bronze", "Brushed", "Chrome", "Copper", "Custom",
  "Gold", "Gray", "Green", "Gun Metal", "Machined", "Orange", "Polished",
  "Red", "Silver", "Special Coated", "White"
];

const diameters = [
  "8\"", "10\"", "12\"", "14\"", "15\"", "16\"", "17\"", "18\"",
  "19\"", "20\"", "21\"", "22\"", "24\"", "26\"", "28\"", "30\""
];

export function FilterSidebar() {
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const [showMoreFinishes, setShowMoreFinishes] = useState(false);

  return (
    <div className="bg-white">
      <h2 className="text-lg font-semibold mb-4">Filter</h2>

      {/* Fitment */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-gray-900">Fitment</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <Checkbox />
            <span className="text-sm">SureFit</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <Checkbox />
            <span className="text-sm">SpecFit</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <Checkbox />
            <span className="text-sm">CustomFit</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <Checkbox />
            <span className="text-sm">CustomFitEXT</span>
          </label>
        </div>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-gray-900">Brand</h3>
        <div className="space-y-2">
          {brands.slice(0, showMoreBrands ? brands.length : 5).map((brand) => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer">
              <Checkbox />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowMoreBrands(!showMoreBrands)}
            className="text-sm text-blue-600 p-0 h-auto"
          >
            <Plus className="w-3 h-3 mr-1" />
            {showMoreBrands ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>

      {/* New */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-gray-900 flex items-center">
          New
          <ChevronDown className="w-4 h-4 ml-auto" />
        </h3>
      </div>

      {/* Featured */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-gray-900 flex items-center">
          Featured
          <ChevronDown className="w-4 h-4 ml-auto" />
        </h3>
      </div>

      {/* Finish */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-gray-900 flex items-center">
          Finish
          <ChevronDown className="w-4 h-4 ml-auto" />
        </h3>
        <div className="space-y-2">
          {finishes.slice(0, showMoreFinishes ? finishes.length : 6).map((finish) => (
            <label key={finish} className="flex items-center space-x-2 cursor-pointer">
              <Checkbox />
              <span className="text-sm">{finish}</span>
            </label>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowMoreFinishes(!showMoreFinishes)}
            className="text-sm text-blue-600 p-0 h-auto"
          >
            <Plus className="w-3 h-3 mr-1" />
            {showMoreFinishes ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>

      {/* Diameter */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-gray-900 flex items-center">
          Diameter
          <ChevronDown className="w-4 h-4 ml-auto" />
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {diameters.map((diameter) => (
            <button
              key={diameter}
              className="text-xs border border-gray-300 rounded px-2 py-1 hover:bg-gray-100 transition-colors"
            >
              {diameter}
            </button>
          ))}
        </div>
      </div>

      {/* Additional Filters */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">Bolt Pattern</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">Offset</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">Size</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">Lug Count</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">Material</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">Price</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
