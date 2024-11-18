import { Laptop, Users, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: <Laptop className="h-12 w-12 text-primary" />,
    title: "IT教育",
    description: "すべての世代に向けたIT教育を提供し、デジタルリテラシーの向上を支援します。",
    slug: "it-education",
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "ITコンサルティング",
    description: "お客様のビジネスに最適なIT戦略を提案し、デジタル化をサポートします。",
    slug: "it-consulting",
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "ソフトウェア開発",
    description: "最新技術を活用し、お客様のニーズに合わせた高品質なソフトウェアを開発します。",
    slug: "software-development",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          サービス内容
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.title} to={`/services/${service.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;