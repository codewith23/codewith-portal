import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import BlogForm from "@/components/BlogForm";

const NewPost = () => {
  const { session } = useSessionContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const { error } = await supabase.from("posts").insert([data]);
      if (error) throw error;
    },
    onSuccess: () => {
      toast({
        title: "成功",
        description: "記事を作成しました",
      });
      navigate("/");
    },
    onError: () => {
      toast({
        title: "エラー",
        description: "記事の作成に失敗しました",
        variant: "destructive",
      });
    },
  });

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">新規記事作成</h1>
      <BlogForm onSubmit={(data) => mutation.mutate(data)} isSubmitting={mutation.isPending} />
    </div>
  );
};

export default NewPost;