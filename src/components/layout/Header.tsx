"use client";

import Link from "next/link";
import { ShoppingCart, User, ChevronDown, Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "../ui/dropdown-menu";

const categories = [
  {
    name: "Giyim",
    subcategories: [
      { name: "T-Shirt", href: "/kategori/t-shirt" },
      { name: "Pantolon", href: "/kategori/pantolon" },
      { name: "Elbise", href: "/kategori/elbise" },
      { name: "Ceket", href: "/kategori/ceket" },
    ],
  },
  {
    name: "Ayakkabı",
    subcategories: [
      { name: "Spor Ayakkabı", href: "/kategori/spor-ayakkabi" },
      { name: "Bot", href: "/kategori/bot" },
      { name: "Sandalet", href: "/kategori/sandalet" },
      { name: "Klasik", href: "/kategori/klasik" },
    ],
  },
  {
    name: "Aksesuar",
    subcategories: [
      { name: "Çanta", href: "/kategori/canta" },
      { name: "Cüzdan", href: "/kategori/cuzdan" },
      { name: "Kemer", href: "/kategori/kemer" },
      { name: "Takı", href: "/kategori/taki" },
    ],
  },
];

// Bu değer normalde bir state veya context'ten gelecek
const isAuthenticated = false;

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold">
              E-Ticaret
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              {categories.map((category) => (
                <DropdownMenu key={category.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                    {category.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {category.subcategories.map((sub) => (
                      <DropdownMenuItem key={sub.name} asChild>
                        <Link href={sub.href}>{sub.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                0
              </span>
            </Button>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/hesabim">Hesabım</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/siparislerim">Siparişlerim</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/favorilerim">Favorilerim</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/adreslerim">Adreslerim</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    Çıkış Yap
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" asChild>
                <Link href="/auth">Giriş Yap</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 