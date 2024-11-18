import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const dummyPosts = [
  {
    id: 1,
    title: "ITで地域を活性化する新しい取り組み",
    excerpt: "地域コミュニティとテクノロジーを組み合わせた新しい取り組みについて紹介します。",
    date: "2024-03-01",
  },
  {
    id: 2,
    title: "シニア向けプログラミング教室の開催レポート",
    excerpt: "先日開催したシニア向けプログラミング教室の様子をお伝えします。",
    date: "2024-02-28",
  },
  {
    id: 3,
    title: "デジタル化で業務効率を上げる方法",
    excerpt: "中小企業でもできる、簡単なデジタル化の方法をご紹介します。",
    date: "2024-02-25",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          ブログ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dummyPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
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
          ))}
        </div>
        <div className="text-center mt-8">
          <Button className="bg-primary hover:bg-primary-hover">
            ブログ一覧へ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;