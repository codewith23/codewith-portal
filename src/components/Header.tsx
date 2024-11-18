import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "ホーム", href: "/" },
    { name: "サービス", href: "#services" },
    { name: "会社情報", href: "#company" },
    { name: "ブログ", href: "#blog" },
    { name: "お問い合わせ", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-primary z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">CodeWith</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-white/80 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-primary shadow-lg animate-fade-down">
            <nav className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;