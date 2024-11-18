import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-orange-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fade-up">
            すべての世代にITの恩恵を
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            ITを通して地域活性化や世代を超えた共創に尽力します
          </p>
          <div className="flex justify-center space-x-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors duration-200"
            >
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-full hover:bg-gray-50 transition-colors duration-200"
            >
              サービスを見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;