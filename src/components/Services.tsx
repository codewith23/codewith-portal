import { Laptop, Users, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Laptop className="h-12 w-12 text-primary" />,
      title: "IT教育",
      description:
        "すべての世代に向けたIT教育を提供し、デジタルリテラシーの向上を支援します。",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "ITコンサルティング",
      description:
        "お客様のビジネスに最適なIT戦略を提案し、デジタル化をサポートします。",
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "ソフトウェア開発",
      description:
        "最新技術を活用し、お客様のニーズに合わせた高品質なソフトウェアを開発します。",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          サービス内容
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;