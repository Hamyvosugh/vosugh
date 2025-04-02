// app/blog/post/[id]/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import BlogPost from '@/components/blog/BlogPost';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const postId = parseInt(params.id);
  
  return (
    <main className="relative min-h-screen bg-dark-900">
      {/* Background Elements */}
      {/* Navigation */}
      <Navbar />
      
      {/* Blog Post Content */}
      <BlogPost postId={postId} />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hamy Vosugh. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Datenschutz</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Impressum</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// This is a static page example, but in a real application,
// you would likely use generateStaticParams or other Next.js features
// to generate paths for all your blog posts
export async function generateStaticParams() {
  // This would fetch all post IDs from your CMS or database
  const posts = [1, 2, 3, 4, 5, 6, 7, 8];
  
  return posts.map((id) => ({
    id: id.toString(),
  }));
}