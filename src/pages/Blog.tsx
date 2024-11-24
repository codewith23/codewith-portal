import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contentfulClient } from "@/lib/contentful";

interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    publishDate: string;
    author: string;
  };
}

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'blogPost',
        order: '-fields.publishDate',
      });
      return response.items as BlogPost[];
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 gradient-text text-center">
              ブログ
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="h-full animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 gradient-text text-center">
            ブログ
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts?.map((post) => (
              <Link to={`/blog/${post.fields.slug}`} key={post.sys.id}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{post.fields.title}</CardTitle>
                    <p className="text-sm text-gray-500">
                      {new Date(post.fields.publishDate).toLocaleDateString("ja-JP")}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.fields.excerpt}</p>
                    <Button
                      variant="link"
                      className="p-0 text-primary hover:text-primary-hover"
                    >
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