import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Yeni Sezon Ürünleri Keşfedin
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            En yeni koleksiyonlarımız ve özel fırsatlarımızla tarzınızı yansıtın.
            Şimdi alışverişe başlayın!
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Hemen Alışverişe Başla
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Kampanyaları Keşfet
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
    </section>
  );
} 