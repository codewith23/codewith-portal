import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogForm from "@/components/BlogForm";
import { BlogPost } from "@/types/blog";

const AdminNew = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: Partial<BlogPost>) => {
    // Ensure all required fields are present
    if (!data.title || !data.content || !data.excerpt || !data.author) {
      toast({
        title: "エラー",
        description: "すべての必須項目を入力してください",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase.from("posts").insert({
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      author: data.author,
      image_url: data.image_url,
    });

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