import { createClient } from 'contentful';

if (!import.meta.env.VITE_CONTENTFUL_SPACE_ID || !import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Missing Contentful environment variables');
}

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

// Contentfulのコンテンツ型定義
export interface IContentfulBlogPost {
  contentTypeId: "blogPost";
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    publishDate: string;
    author: string;
    heroImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}