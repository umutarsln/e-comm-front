import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/urun/${id}`}>
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <Link href={`/urun/${id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-gray-600 transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">{price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</p>
          <Button size="icon" variant="secondary">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
} 