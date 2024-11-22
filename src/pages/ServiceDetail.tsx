import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceDetails = {
  "it-education": {
    title: "IT教育",
    description: "すべての世代に向けたIT教育サービス",
    businesses: [
      {
        title: "CodeWithPlay\n子ども向けプログラミングスクール",
        description: "小学生から高校生を対象に、プログラミング教育を提供します。初心者はScratchなどのビジュアルプログラミング言語、中級者から上級者はPythonやJavaなどのプログラミング言語を扱います。楽しみながら学ぶを大事にしながら、論理的思考力を育てます。",
        image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
      },
      {
        title: "CodeWithMentor\n伴走型プログラミング学習サービス",
        description: "大学生以上を対象に、オンラインプラットフォームを通じて、現役エンジニアによる実践的なプログラミング教育を提供します。お客さまのニーズに合わせて、Web開発からAIまで幅広く対応します。",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      },
      {
        title: "CodeWithTraining\n実践型エンジニア研修サービス",
        description: "企業の新入社員向けに、実務で必要なプログラミングスキルやチーム開発の手法を教育します。社内の開発環境に合わせた研修カリキュラムを組むことで、即戦力となるエンジニアを育成します。",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      }
    ]
  },
  "it-consulting": {
    title: "DX学校 豊中校",
    description: "中小企業に特化したIT支援",
    businesses: [
      {
        title: "システム導入支援",
        description: "業務効率化を目指し、システムの選定から導入、運用までを一貫してサポートします。現状の業務フローを分析、貴社に最適なシステムの選定、導入時の課題解決から社員の皆様への使い方研修まで、徹底的に支援します。また、導入後も継続的な運用支援を提供し、システムが社内に定着するようフォローいたします。",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      },
      {
        title: "IT人材育成",
        description: "企業内のIT人材の育成をサポートします。企業ごとのニーズに応じた育成計画の策定から研修の実施までを支援し、技術力と管理能力を兼ね備えた人材を育成します。ITスキルの向上により、社内でのIT推進を強化し、企業の成長を支えます。",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      },
      {
        title: "DX支援",
        description: "企業のデジタルトランスフォーメーションを支援します。現状の業務課題を分析し、戦略立案から実行計画の策定、実施までトータルでサポートします。デジタル技術を活用して新たな価値を創出し、企業の競争力を強化します。",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      }
    ]
  },
  "software-development": {
    title: "ソフトウェア開発",
    description: "カスタマイズされたソフトウェアソリューション",
    businesses: [
      {
        title: "Webアプリケーション開発",
        description: "企業向けにカスタムWebアプリケーションを開発します。お客様のニーズを詳細にヒアリングし、業務に最適なソリューションを設計・構築します。UI/UXデザインからバックエンドの開発まで、最新技術を駆使して高品質なアプリケーションを提供します。業務効率の向上や新たなサービスの実現を通じて、ビジネスの成長を支援します。",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      },
      {
        title: "モバイルアプリケーション開発",
        description: "iOSおよびAndroid向けのモバイルアプリを開発します。顧客体験の向上を目指し、ユーザーフレンドリーなデザインと直感的な操作性を備えたアプリケーションを提供します。企画から開発、リリース後の運用・保守まで一貫してサポートし、企業のサービスをより多くのユーザーに届けるお手伝いをします。",
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
      },
      {
        title: "業務システム開発",
        description: "企業の業務プロセスを最適化するためのシステムを開発します。業務フローの詳細な分析を基に、効率化や自動化を実現するための業務システムを提案・構築します。既存システムとの連携やカスタマイズにも対応し、企業の生産性向上と業務負担の軽減を支援します。",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] opacity-5 bg-cover bg-center fixed -z-10" />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 gradient-text">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-12">{service.description}</p>
          
          <div className="space-y-16">
            {service.businesses.map((business, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={business.image}
                    alt={business.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-semibold gradient-text whitespace-pre-line">{business.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{business.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;