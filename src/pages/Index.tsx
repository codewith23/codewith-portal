import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CompanyInfo from "@/components/CompanyInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <CompanyInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;