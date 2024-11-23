import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white">
            株式会社CodeWith
          </Link>
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
        </div>
      </div>
    </header>
  );
};

export default Header;