import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white">
            株式会社CodeWith
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-white/80">
              ホーム
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
                    サービス内容
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-white rounded-md shadow-lg">
                      <Link 
                        to="/services/it-education" 
                        className="block p-3 hover:bg-gray-50 rounded-md"
                      >
                        <div className="font-medium">IT教育</div>
                        <p className="text-sm text-gray-500">すべての世代に向けたIT教育を提供</p>
                      </Link>
                      <Link 
                        to="/services/it-consulting" 
                        className="block p-3 hover:bg-gray-50 rounded-md"
                      >
                        <div className="font-medium">DX学校 豊中校</div>
                        <p className="text-sm text-gray-500">中小企業に特化したIT支援</p>
                      </Link>
                      <Link 
                        to="/services/software-development" 
                        className="block p-3 hover:bg-gray-50 rounded-md"
                      >
                        <div className="font-medium">ソフトウェア開発</div>
                        <p className="text-sm text-gray-500">最新技術を活用した開発サービス</p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="/#company" className="text-white hover:text-white/80">
              会社情報
            </a>
            <Link to="/blog" className="text-white hover:text-white/80">
              ブログ
            </Link>
            <a href="/#contact" className="text-white hover:text-white/80">
              お問い合わせ
            </a>
            <Link to="/admin/blog">
              <Button variant="ghost" className="text-white hover:text-white/80">
                <Shield className="h-4 w-4 mr-2" />
                管理者
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-primary border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-white/80 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <div className="relative group">
                <button className="text-white hover:text-white/80 px-4 py-2 w-full text-left">
                  サービス内容
                </button>
                <div className="pl-8 space-y-2 mt-2">
                  <Link
                    to="/services/it-education"
                    className="block text-white hover:text-white/80 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    IT教育
                  </Link>
                  <Link
                    to="/services/it-consulting"
                    className="block text-white hover:text-white/80 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    DX学校 豊中校
                  </Link>
                  <Link
                    to="/services/software-development"
                    className="block text-white hover:text-white/80 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ソフトウェア開発
                  </Link>
                </div>
              </div>
              <a
                href="/#company"
                className="text-white hover:text-white/80 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                会社情報
              </a>
              <Link
                to="/blog"
                className="text-white hover:text-white/80 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ブログ
              </Link>
              <a
                href="/#contact"
                className="text-white hover:text-white/80 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </a>
              <Link
                to="/admin/blog"
                className="text-white hover:text-white/80 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="h-4 w-4 inline-block mr-2" />
                管理者
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;