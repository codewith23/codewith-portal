import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import BlogForm from "@/components/BlogForm";

const EditPost = () => {
  const { id } = useParams();
  const { session } = useSessionContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  const { data: post } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const { error } = await supabase
        .from("posts")
        .update(data)
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast({
        title: "成功",
        description: "記事を更新しました",
      });
      navigate("/");
    },
    onError: () => {
      toast({
        title: "エラー",
        description: "記事の更新に失敗しました",
        variant: "destructive",
      });
    },
  });

  if (!session || !post) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">記事編集</h1>
      <BlogForm
        initialData={post}
        onSubmit={(data) => mutation.mutate(data)}
        isSubmitting={mutation.isPending}
      />
    </div>
  );
};

export default EditPost;