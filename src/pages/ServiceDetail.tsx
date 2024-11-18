import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceDetails = {
  "it-education": {
    title: "IT教育",
    description: "すべての世代に向けたIT教育サービス",
    content: `
      <h3>提供サービス</h3>
      <ul>
        <li>プログラミング基礎講座</li>
        <li>シニア向けデジタルリテラシー教室</li>
        <li>子供向けプログラミング教室</li>
        <li>企業向けDX研修</li>
      </ul>
    `,
  },
  "it-consulting": {
    title: "ITコンサルティング",
    description: "ビジネスのデジタル化を支援",
    content: `
      <h3>提供サービス</h3>
      <ul>
        <li>DX戦略立案</li>
        <li>業務効率化コンサルティング</li>
        <li>システム導入支援</li>
        <li>デジタルマーケティング支援</li>
      </ul>
    `,
  },
  "software-development": {
    title: "ソフトウェア開発",
    description: "カスタマイズされたソフトウェアソリューション",
    content: `
      <h3>提供サービス</h3>
      <ul>
        <li>Webアプリケーション開発</li>
        <li>モバイルアプリ開発</li>
        <li>業務システム開発</li>
        <li>システム保守・運用</li>
      </ul>
    `,
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
          <p className="text-xl text-gray-600 mb-8">{service.description}</p>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: service.content }} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;