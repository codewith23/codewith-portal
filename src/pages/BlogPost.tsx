import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPost } from "@/types/blog";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// 仮のデータ（後でAPIから取得するように変更可能）
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "ITで地域を活性化する新しい取り組み",
    excerpt: "地域コミュニティとテクノロジーを組み合わせた新しい取り組みについて紹介します。",
    content: `
    地域活性化とテクノロジーの融合について、具体的な事例を交えながら解説していきます。

    1. 地域コミュニティのデジタル化
    従来の地域コミュニティ活動をオンラインでも展開することで、より多くの住民が参加できるようになりました。
    
    2. テクノロジーを活用した新しい取り組み
    - オンライン町内会システムの導入
    - 地域情報共有アプリの開発
    - 高齢者向けデジタル講座の開催
    
    3. 成果と今後の展望
    これらの取り組みにより、地域コミュニティの活性化が進み、世代間交流も増加しています。
    `,
    date: "2024-03-01",
    author: "CodeWith編集部"
  },
  // ... 他の記事データ
];

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ブログ一覧に戻る
            </Button>
          </Link>
          
          <article className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-4 gradient-text">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 mb-8">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;