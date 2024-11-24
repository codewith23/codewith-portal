import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { contentfulClient } from "@/lib/contentful";

const BlogPostPage = () => {
  const { slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
      });
      return response.items[0];
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-gray-600">記事が見つかりませんでした</p>
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
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ブログ一覧に戻る
            </Button>
          </Link>
          
          <article className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-4 gradient-text">
              {post.fields.title}
            </h1>
            <div className="flex items-center text-gray-500 mb-8">
              <span>{new Date(post.fields.publishDate).toLocaleDateString('ja-JP')}</span>
              <span className="mx-2">•</span>
              <span>{post.fields.author}</span>
            </div>
            {post.fields.heroImage && (
              <img
                src={post.fields.heroImage.fields.file.url}
                alt={post.fields.title}
                className="w-full h-auto rounded-lg mb-8"
              />
            )}
            <div className="prose prose-lg max-w-none">
              {post.fields.content}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;