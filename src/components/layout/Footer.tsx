import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Hakkımızda</h3>
            <ul className="space-y-2">
              <li><Link href="/hakkimizda" className="hover:text-gray-600">Şirket Bilgileri</Link></li>
              <li><Link href="/kariyer" className="hover:text-gray-600">Kariyer</Link></li>
              <li><Link href="/iletisim" className="hover:text-gray-600">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Müşteri Hizmetleri</h3>
            <ul className="space-y-2">
              <li><Link href="/yardim" className="hover:text-gray-600">Yardım Merkezi</Link></li>
              <li><Link href="/iade" className="hover:text-gray-600">İade ve Değişim</Link></li>
              <li><Link href="/kargo" className="hover:text-gray-600">Kargo Takip</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Politikalar</h3>
            <ul className="space-y-2">
              <li><Link href="/gizlilik" className="hover:text-gray-600">Gizlilik Politikası</Link></li>
              <li><Link href="/kullanim-kosullari" className="hover:text-gray-600">Kullanım Koşulları</Link></li>
              <li><Link href="/cerez" className="hover:text-gray-600">Çerez Politikası</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Bizi Takip Edin</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-600">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-600">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-600">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p>&copy; 2024 E-Ticaret. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 