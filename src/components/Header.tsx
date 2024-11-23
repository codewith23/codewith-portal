import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            株式会社CodeWith
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary">
              ホーム
            </Link>
            <a href="/#services" className="text-gray-600 hover:text-primary">
              サービス内容
            </a>
            <a href="/#company" className="text-gray-600 hover:text-primary">
              会社情報
            </a>
            <Link to="/blog" className="text-gray-600 hover:text-primary">
              ブログ
            </Link>
            <a href="/#contact" className="text-gray-600 hover:text-primary">
              お問い合わせ
            </a>
            <Link to="/admin/blog">
              <Button variant="ghost" className="text-gray-600 hover:text-primary">
                <Shield className="h-4 w-4 mr-2" />
                管理者
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;