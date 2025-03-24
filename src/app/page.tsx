import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/layout/HeroSection";
import { ProductCard } from "@/components/ui/ProductCard";

const DEMO_PRODUCTS = [
  {
    id: "1",
    name: "Siyah Basic T-Shirt",
    price: 199.99,
    image: "/products/tshirt.jpg",
    category: "Giyim"
  },
  {
    id: "2",
    name: "Klasik Kot Pantolon",
    price: 399.99,
    image: "/products/jeans.jpg",
    category: "Giyim"
  },
  {
    id: "3",
    name: "Spor Ayakkabı",
    price: 899.99,
    image: "/products/sneakers.jpg",
    category: "Ayakkabı"
  },
  {
    id: "4",
    name: "Deri Cüzdan",
    price: 299.99,
    image: "/products/wallet.jpg",
    category: "Aksesuar"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Öne Çıkan Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEMO_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
