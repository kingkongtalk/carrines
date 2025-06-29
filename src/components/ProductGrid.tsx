"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "ROTIFORM OZR-T",
    material: "Cast Aluminum",
    sizes: ["18\"", "20\""],
    finishes: 3,
    image: "https://ext.same-assets.com/2960922491/141634221.png",
    isNew: false
  },
  {
    id: 2,
    name: "MOTEGI RACING BATTLE VI",
    material: "Flow Formed Aluminum",
    sizes: ["18\"", "19\""],
    finishes: 4,
    image: "https://ext.same-assets.com/2960922491/1771516347.png",
    isNew: true
  },
  {
    id: 3,
    name: "KMC UTV TORX UTV BEADLOCK",
    material: "Cast Aluminum",
    sizes: ["15\""],
    finishes: 2,
    image: "https://ext.same-assets.com/2960922491/1889171299.png",
    isNew: true
  },
  {
    id: 4,
    name: "FUEL OFF-ROAD RAIL",
    material: "Cast Aluminum",
    sizes: ["17\"", "20\""],
    finishes: 3,
    image: "https://ext.same-assets.com/2960922491/2214308200.png",
    isNew: true
  },
  {
    id: 5,
    name: "US MAGS ARLINGTON",
    material: "Cast Aluminum",
    sizes: ["20\"", "22\""],
    finishes: 2,
    image: "https://ext.same-assets.com/2960922491/2336682277.png",
    isNew: true
  },
  {
    id: 6,
    name: "KMC UTV AZTEC UTV BEADLOCK",
    material: "Cast Aluminum",
    sizes: ["15\""],
    finishes: 2,
    image: "https://ext.same-assets.com/2960922491/3195772337.png",
    isNew: true
  },
  {
    id: 7,
    name: "PERFORMANCE REPLICAS PR231",
    material: "Cast Aluminum",
    sizes: ["22\"", "24\""],
    finishes: 3,
    image: "https://ext.same-assets.com/2960922491/2597602288.png",
    isNew: true
  },
  {
    id: 8,
    name: "PERFORMANCE REPLICAS PR230",
    material: "Cast Aluminum",
    sizes: ["22\"", "24\""],
    finishes: 3,
    image: "https://ext.same-assets.com/2960922491/3953093817.png",
    isNew: true
  },
  {
    id: 9,
    name: "PETROL P3E",
    material: "Cast Aluminum",
    sizes: ["17\"", "18\"", "19\"", "20\""],
    finishes: 2,
    image: "https://ext.same-assets.com/2960922491/2009794542.png",
    isNew: true
  }
];

export function ProductGrid() {
  return (
    <div>
      {/* Sort and view options */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">No Vehicle Selected</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">View:</span>
          <span className="text-sm text-gray-600">Sort By:</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-yellow-400 text-black hover:bg-yellow-500">
                    NEW
                  </Badge>
                )}
                <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{product.material}</p>

                {product.finishes > 1 && (
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-1 mr-2">
                      {[...Array(Math.min(product.finishes, 4))].map((_, i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-gray-300 border"></div>
                      ))}
                      {product.finishes > 4 && (
                        <span className="text-xs text-gray-600">+{product.finishes - 4} More</span>
                      )}
                    </div>
                    <span className="text-xs text-gray-600">{product.finishes} finishes available</span>
                  </div>
                )}

                <div className="text-sm text-gray-600">
                  {product.sizes.join(" ")}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <Button variant="ghost" size="icon" disabled>
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button variant="default" size="sm" className="bg-black text-white">1</Button>
        <Button variant="ghost" size="sm">2</Button>
        <Button variant="ghost" size="sm">3</Button>
        <Button variant="ghost" size="sm">4</Button>
        <Button variant="ghost" size="sm">5</Button>

        <Button variant="ghost" size="icon">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
