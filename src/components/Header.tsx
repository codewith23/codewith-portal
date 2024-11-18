import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: "IT教育", href: "/services/it-education" },
    { name: "ITコンサルティング", href: "/services/it-consulting" },
    { name: "ソフトウェア開発", href: "/services/software-development" },
  ];

  const menuItems = [
    { name: "ホーム", href: "/" },
    { name: "会社情報", href: "/#company" },
    { name: "ブログ", href: "/#blog" },
    { name: "お問い合わせ", href: "/#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed w-full bg-[#eb6100] z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">CodeWith</span>
          </Link>

          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <Link to="/" className="text-white hover:text-white/80 transition-colors duration-200">
                    ホーム
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
                    サービス
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4 bg-white">
                      {services.map((service) => (
                        <li key={service.href}>
                          <Link
                            to={service.href}
                            className="block p-2 hover:bg-gray-100 rounded"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {menuItems.slice(1).map((item) => (
                  <NavigationMenuItem key={item.name} className="px-4">
                    <button
                      onClick={() => scrollToSection(item.href.replace("/#", ""))}
                      className="text-white hover:text-white/80 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#eb6100] shadow-lg animate-fade-down">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="text-white hover:text-white/80 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                ホーム
              </Link>
              <div className="relative group">
                <button className="text-white hover:text-white/80 transition-colors duration-200 flex items-center">
                  サービス
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              {menuItems.slice(1).map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href.replace("/#", ""));
                    setIsOpen(false);
                  }}
                  className="text-white hover:text-white/80 transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;