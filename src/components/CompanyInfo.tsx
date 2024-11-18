import { Building2, Calendar, User, Coins } from "lucide-react";

const CompanyInfo = () => {
  const companyDetails = [
    {
      icon: <Building2 className="h-6 w-6" />,
      label: "所在地",
      value: "大阪府羽曳野市白鳥二丁目6番16号",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      label: "設立",
      value: "2023年12月20日",
    },
    {
      icon: <User className="h-6 w-6" />,
      label: "代表取締役社長",
      value: "小寺亜勇",
    },
    {
      icon: <Coins className="h-6 w-6" />,
      label: "資本金",
      value: "200千円",
    },
  ];

  return (
    <section id="company" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          会社情報
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyDetails.map((detail, index) => (
              <div
                key={detail.label}
                className="bg-white p-6 rounded-lg shadow-md animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-primary">{detail.icon}</div>
                  <div>
                    <div className="text-sm text-gray-500">{detail.label}</div>
                    <div className="font-medium">{detail.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;