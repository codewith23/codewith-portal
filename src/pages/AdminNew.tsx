import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogForm from "@/components/BlogForm";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/types/blog";

const AdminNew = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: Partial<BlogPost>) => {
    const { error } = await supabase.from("posts").insert([data]);

    if (error) {
      toast({
        title: "エラー",
        description: "記事の作成に失敗しました",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "成功",
      description: "記事を作成しました",
    });
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Button
            variant="ghost"
            className="mb-8"
            onClick={() => navigate("/admin")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            管理画面に戻る
          </Button>

          <h1 className="text-3xl font-bold mb-8 gradient-text">新規記事作成</h1>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <BlogForm onSubmit={handleSubmit} isSubmitting={false} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminNew;