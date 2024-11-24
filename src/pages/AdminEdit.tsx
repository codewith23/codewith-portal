import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogForm from "@/components/BlogForm";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/types/blog";

const AdminEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        toast({
          title: "エラー",
          description: "記事の取得に失敗しました",
          variant: "destructive",
        });
        throw error;
      }

      return data as BlogPost;
    },
    enabled: !!id,
  });

  const handleSubmit = async (data: Partial<BlogPost>) => {
    const { error } = await supabase
      .from("posts")
      .update(data)
      .eq("id", id);

    if (error) {
      toast({
        title: "エラー",
        description: "記事の更新に失敗しました",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "成功",
      description: "記事を更新しました",
    });
    navigate("/admin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

          <h1 className="text-3xl font-bold mb-8 gradient-text">記事の編集</h1>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <BlogForm
              initialData={post}
              onSubmit={handleSubmit}
              isSubmitting={false}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminEdit;