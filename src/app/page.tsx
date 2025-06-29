import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Wheels</h1>
              <p className="text-gray-600">(789)</p>
            </div>
            <ProductGrid />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
