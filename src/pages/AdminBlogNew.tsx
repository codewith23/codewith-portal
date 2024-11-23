import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { BlogPost } from "@/types/blog";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogForm from "@/components/BlogForm";

const AdminBlogNew = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: Partial<BlogPost>) => {
    setIsSubmitting(true);
    const { error } = await supabase.from("posts").insert([
      {
        ...data,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      toast({
        title: "エラー",
        description: "記事の作成に失敗しました",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    toast({
      title: "成功",
      description: "記事を作成しました",
    });
    navigate("/admin/blog");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-3xl font-bold mb-8 gradient-text">記事作成</h1>
          <BlogForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminBlogNew;