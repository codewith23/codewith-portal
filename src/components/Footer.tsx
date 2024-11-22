import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">株式会社CodeWith</h3>
            <p className="text-white/80">
              すべての世代にITの恩恵を。
              <br />
              ITを通して地域活性化や世代を超えた共創に尽力します。
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <p className="text-white/80">
              〒583-0855
              <br />
              大阪府羽曳野市白鳥二丁目6番16号
              <br />
              info@codewith.co.jp
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">SNS</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; 2024 株式会社CodeWith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;