import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { BlogPost } from "@/types/blog";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogForm from "@/components/BlogForm";

const AdminBlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate ID is a valid number
  const parsedId = id ? parseInt(id) : null;
  const isValidId = parsedId && !isNaN(parsedId);

  const { data: post } = useQuery({
    queryKey: ["admin-post", id],
    queryFn: async () => {
      if (!isValidId) {
        throw new Error("Invalid ID provided");
      }
      
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", parsedId)
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
    enabled: isValidId,
  });

  const handleSubmit = async (data: Partial<BlogPost>) => {
    if (!isValidId) {
      toast({
        title: "エラー",
        description: "無効なIDです",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    const { error } = await supabase
      .from("posts")
      .update(data)
      .eq("id", parsedId);

    if (error) {
      toast({
        title: "エラー",
        description: "記事の更新に失敗しました",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    toast({
      title: "成功",
      description: "記事を更新しました",
    });
    navigate("/admin/blog");
  };

  if (!isValidId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <h1 className="text-3xl font-bold mb-8 text-red-600">無効なIDです</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-3xl font-bold mb-8 gradient-text">記事編集</h1>
          <BlogForm
            initialData={post}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminBlogEdit;