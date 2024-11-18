import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const serviceDetails = {
  "it-education": {
    title: "IT教育",
    description: "すべての世代に向けたIT教育サービス",
    businesses: [
      {
        title: "子ども向けプログラミングスクール",
        description: "小学生から中学生を対象に、Scratch、Python、HTMLなどのプログラミング教育を提供します。楽しみながら論理的思考力を育てます。",
        image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
      },
      {
        title: "プログラミング学習サービスの運営",
        description: "オンラインプラットフォームを通じて、現役エンジニアによる実践的なプログラミング教育を提供。Web開発からAIまで幅広く対応します。",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      },
      {
        title: "新卒向けエンジニア研修",
        description: "企業の新入社員向けに、実務で必要なプログラミングスキルやチーム開発の手法を教育。即戦力となるエンジニアを育成します。",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      }
    ]
  },
  "it-consulting": {
    title: "ITコンサルティング",
    description: "ビジネスのデジタル化を支援",
    businesses: [
      {
        title: "DX戦略コンサルティング",
        description: "企業のデジタルトランスフォーメーションを支援。現状分析から戦略立案、実行計画の策定までトータルでサポートします。",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      },
      {
        title: "システム導入支援",
        description: "業務効率化のための最適なシステム選定から導入、運用までをサポート。社内のDX推進をお手伝いします。",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      },
      {
        title: "IT人材育成コンサルティング",
        description: "企業内IT人材の育成計画策定と実施をサポート。技術力と管理能力を兼ね備えた人材を育成します。",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      }
    ]
  },
  "software-development": {
    title: "ソフトウェア開発",
    description: "カスタマイズされたソフトウェアソリューション",
    businesses: [
      {
        title: "Webアプリケーション開発",
        description: "最新のフレームワークを使用した、スケーラブルなWebアプリケーションの設計・開発。レスポンシブデザインで多デバイス対応を実現します。",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      },
      {
        title: "モバイルアプリ開発",
        description: "iOS/Androidに対応したネイティブアプリの開発。ユーザビリティを重視した使いやすいアプリを提供します。",
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
      },
      {
        title: "業務システム開発",
        description: "企業の業務効率を向上させる基幹システムの開発。要件定義から保守運用まで一貫してサポートします。",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
      }
    ]
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    return <div>サービスが見つかりません</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 gradient-text">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-12">{service.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.businesses.map((business, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <img
                  src={business.image}
                  alt={business.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{business.title}</h3>
                  <p className="text-gray-600">{business.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;