import { createClient } from 'contentful';

if (!import.meta.env.VITE_CONTENTFUL_SPACE_ID || !import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN) {
  console.warn('Contentful environment variables are missing. Blog functionality will be limited.');
}

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'dummy-space-id',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'dummy-token',
});

export interface IContentfulBlogPost {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
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