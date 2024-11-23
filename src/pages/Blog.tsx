import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPost } from "@/types/blog";

// 仮のデータ（後でAPIから取得するように変更可能）
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "ITで地域を活性化する新しい取り組み",
    excerpt: "地域コミュニティとテクノロジーを組み合わせた新しい取り組みについて紹介します。",
    content: "詳細な内容がここに入ります...",
    date: "2024-03-01",
    author: "CodeWith編集部"
  },
  {
    id: 2,
    title: "シニア向けプログラミング教室の開催レポート",
    excerpt: "先日開催したシニア向けプログラミング教室の様子をお伝えします。",
    content: "詳細な内容がここに入ります...",
    date: "2024-02-28",
    author: "CodeWith編集部"
  },
  {
    id: 3,
    title: "デジタル化で業務効率を上げる方法",
    excerpt: "中小企業でもできる、簡単なデジタル化の方法をご紹介します。",
    content: "詳細な内容がここに入ります...",
    date: "2024-02-25",
    author: "CodeWith編集部"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 gradient-text text-center">
            ブログ
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0 text-primary hover:text-primary-hover">
                      続きを読む <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;