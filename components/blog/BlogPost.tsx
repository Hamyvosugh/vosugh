// components/blog/BlogPost.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

// Get single post by ID
const getPostById = (id: number) => {
  // This would normally fetch from an API
  return {
    id: 1,
    title: "Headless CMS: Die Zukunft der Content-Verwaltung",
    content: `
      <h2>Die Revolution der Content-Verwaltung</h2>
      <p>In der sich ständig weiterentwickelnden digitalen Landschaft stehen Unternehmen vor der Herausforderung, Inhalte für verschiedene Plattformen und Geräte bereitzustellen. Traditionelle Content-Management-Systeme (CMS) wurden für eine Welt konzipiert, in der Websites die primäre digitale Präsenz waren. Doch mit dem Aufkommen von mobilen Apps, IoT-Geräten, Digital Signage und anderen Kanälen hat sich der Bedarf grundlegend verändert.</p>
      
      <p>Hier kommen Headless-CMS-Lösungen ins Spiel – eine moderne Architektur, die den Content-Layer vollständig vom Präsentations-Layer trennt. Diese Trennung ermöglicht es Unternehmen, Inhalte einmal zu erstellen und über APIs an beliebige Frontends zu liefern.</p>
      
      <h2>Vorteile eines Headless CMS</h2>
      
      <h3>1. Omnichannel-Content-Delivery</h3>
      <p>Mit einem Headless CMS können Sie Inhalte über alle digitalen Touchpoints hinweg verteilen – von Websites und mobilen Apps bis hin zu IoT-Geräten, VR-Erlebnissen und zukünftigen Plattformen, die noch nicht einmal existieren.</p>
      
      <h3>2. Entwicklerfreundlichkeit</h3>
      <p>Entwickler können die Frontend-Technologien ihrer Wahl einsetzen, sei es React, Vue, Angular oder jedes andere Framework. Diese Freiheit führt zu besseren Benutzererlebnissen und schnelleren Entwicklungszyklen.</p>
      
      <h3>3. Zukunftssicherheit</h3>
      <p>Da Inhalte unabhängig von der Präsentationsschicht verwaltet werden, können Sie neue Kanäle und Technologien integrieren, ohne Ihre Content-Infrastruktur neu gestalten zu müssen.</p>
      
      <h3>4. Höhere Sicherheit</h3>
      <p>Die Entkopplung von Frontend und Backend reduziert die Angriffsfläche Ihrer Anwendung. Das CMS kann hinter einer sicheren API-Schicht versteckt werden, was das Risiko von Sicherheitsverletzungen verringert.</p>
      
      <h2>Die Integration von Headless CMS in bestehende Workflows</h2>
      
      <p>Während die Vorteile eines Headless CMS überzeugend sind, stellt die Migration von traditionellen Systemen eine Herausforderung dar. Hier sind einige bewährte Praktiken für eine erfolgreiche Integration:</p>
      
      <h3>Content-Modellierung überdenken</h3>
      <p>In einer Headless-Umgebung ist es entscheidend, Inhalte strukturiert und wiederverwendbar zu gestalten. Dies erfordert oft ein Umdenken bei der Content-Modellierung. Anstatt seitenorientiert zu denken, sollten Sie inhaltsorientierten Ansätzen den Vorzug geben, bei denen Inhalte in modulare, wiederverwendbare Komponenten unterteilt werden.</p>
      
      <code>
      // Beispiel für ein strukturiertes Content-Modell in JSON
      {
        "contentType": "blogPost",
        "fields": [
          {
            "name": "title",
            "type": "text",
            "required": true
          },
          {
            "name": "excerpt",
            "type": "text",
            "required": true
          },
          {
            "name": "content",
            "type": "richText",
            "required": true
          },
          {
            "name": "author",
            "type": "reference",
            "contentType": "author"
          },
          {
            "name": "categories",
            "type": "array",
            "items": {
              "type": "reference",
              "contentType": "category"
            }
          }
        ]
      }
      </code>
      
      <h3>API-First-Ansatz</h3>
      <p>Ein erfolgreicher Übergang zu Headless erfordert einen API-First-Ansatz. Dies bedeutet, dass alle Inhalte über klar definierte APIs zugänglich sein sollten, die konsistent, gut dokumentiert und versioniert sind.</p>
      
      <h3>Schrittweise Migration</h3>
      <p>Die Migration zu einem Headless CMS muss nicht über Nacht erfolgen. Viele Organisationen entscheiden sich für einen schrittweisen Ansatz, bei dem sie zunächst bestimmte Teile ihrer digitalen Präsenz auf Headless umstellen und dann nach und nach weitere Bereiche migrieren.</p>
      
      <h2>Fallstudie: E-Commerce-Plattform</h2>
      
      <p>Ein führender Online-Händler stand vor der Herausforderung, seine Inhalte über mehrere Kanäle hinweg konsistent zu verwalten. Mit einem traditionellen CMS war es schwierig, Produktbeschreibungen, Marketing-Kampagnen und Kundensupport-Inhalte über Website, mobile App und In-Store-Kiosks hinweg zu synchronisieren.</p>
      
      <p>Nach der Implementierung eines Headless CMS konnte das Unternehmen:</p>
      
      <ul>
        <li>Die Zeit für Content-Updates um 65% reduzieren</li>
        <li>Die Konsistenz der Marke über alle Kanäle hinweg verbessern</li>
        <li>Die Conversion-Rate um 27% steigern, da personalisierte Inhalte genau zum richtigen Zeitpunkt bereitgestellt werden konnten</li>
        <li>Neue Kanäle in weniger als der Hälfte der Zeit integrieren</li>
      </ul>
      
      <h2>Fazit</h2>
      
      <p>Ein Headless CMS bietet die Flexibilität, Skalierbarkeit und Zukunftssicherheit, die moderne Unternehmen in der digitalen Landschaft von heute benötigen. Durch die Trennung von Content und Presentation vereinfacht es die Verwaltung von Inhalten über mehrere Kanäle hinweg und ermöglicht es Entwicklern, das bestmögliche Benutzererlebnis auf jeder Plattform zu schaffen.</p>
      
      <p>Während die Umstellung auf ein Headless CMS eine gewisse Lernkurve und Anpassung der Workflows erfordert, überwiegen die langfristigen Vorteile bei weitem die anfänglichen Herausforderungen. Unternehmen, die diesen Übergang erfolgreich meistern, werden mit einer zukunftssicheren Content-Infrastruktur belohnt, die mit ihren sich entwickelnden digitalen Anforderungen mitwachsen kann.</p>
    `,
    excerpt: "Wie moderne Headless-Systeme die Verwaltung und Verteilung von Inhalten revolutionieren.",
    category: "CMS",
    tags: ["Headless", "API", "Content"],
    date: "15.03.2025",
    readTime: "6 min",
    author: {
      name: "Hamy Vosugh",
      role: "Content & Web Specialist",
      avatar: "/assets/QrCode/profile-hamyvosugh-bluecycle.png"
    },
    image: "/assets/images/post/cms.webp",
    relatedPosts: [2, 4, 6]
  };
};

// Sample data for related posts
const relatedPostsData = [
  {
    id: 2,
    title: "Datenimport leicht gemacht: ETL-Prozesse für Content Manager",
    excerpt: "Effiziente Methoden zum Importieren großer Datenmengen in Ihre Content-Management-Systeme.",
    category: "Datenmanagement",
    date: "02.03.2025",
    image: "/assets/images/post/dataan.webp",
  },
  {
    id: 4,
    title: "Next.js und Strapi: Das perfekte Duo für moderne Websites",
    excerpt: "Eine Schritt-für-Schritt-Anleitung zur Integration von Strapi CMS mit Next.js für hochperformante Websites.",
    category: "Entwicklung",
    date: "19.02.2025",
    image: "/assets/images/post/devleop.webp",
  },
  {
    id: 6,
    title: "GraphQL APIs für flexible Content-Abfragen",
    excerpt: "Wie GraphQL die Art und Weise verändert, wie wir auf Content-Daten zugreifen und diese verwalten.",
    category: "API",
    date: "05.02.2025",
    image: "/assets/images/post/api.webp",
  }
];

interface BlogPostProps {
  postId: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId }) => {
  const post = getPostById(postId);
  const [showTableOfContents, setShowTableOfContents] = useState(true);
  
  // Extract headings for table of contents
  const extractHeadings = (content: string) => {
    const headingRegex = /<h([2-3])>(.*?)<\/h[2-3]>/g;
    const headings = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        level: parseInt(match[1]),
        text: match[2],
        id: match[2].toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      });
    }
    
    return headings;
  };
  
  const headings = extractHeadings(post.content);
  
  // Format HTML content
  const formatContentWithAnchors = (content: string) => {
    // Add IDs to headings for anchor links
    headings.forEach(heading => {
      const headingTag = `<h${heading.level}>${heading.text}</h${heading.level}>`;
      const headingWithId = `<h${heading.level} id="${heading.id}">${heading.text}</h${heading.level}>`;
      content = content.replace(headingTag, headingWithId);
    });
    
    return content;
  };
  
  const formattedContent = formatContentWithAnchors(post.content);
  
  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Share functionality
  const sharePost = (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          alert('Link kopiert!');
        });
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li className="text-gray-600">/</li>
              <li className="text-gray-300 truncate">{post.title}</li>
            </ol>
          </nav>
          
          {/* Post Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="mb-4 flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full bg-primary-900/50 text-primary-400 text-sm">
                {post.category}
              </span>
              <span className="text-gray-400 text-sm">{post.date}</span>
              <span className="text-gray-400 text-sm">{post.readTime} Lesezeit</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-dark-700 overflow-hidden">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${post.author.avatar})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>
                <div>
                  <div className="font-medium text-white">{post.author.name}</div>
                  <div className="text-sm text-gray-400">{post.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => sharePost('twitter')}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-800 hover:bg-dark-700 text-gray-400"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button 
                  onClick={() => sharePost('linkedin')}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-800 hover:bg-dark-700 text-gray-400"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
                <button 
                  onClick={() => sharePost('facebook')}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-800 hover:bg-dark-700 text-gray-400"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </button>
                <button 
                  onClick={() => sharePost('copy')}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-800 hover:bg-dark-700 text-gray-400"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden aspect-video relative">
              <div
                className="absolute inset-0 bg-dark-500"
                style={{
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
            </div>
          </motion.div>
          
          {/* Two column layout for content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with Table of Contents */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <div className="sticky top-28">
                <div className="mb-8">
                  <button 
                    onClick={() => setShowTableOfContents(!showTableOfContents)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-dark-800/80 backdrop-blur-sm text-white font-medium"
                  >
                    <span>Inhaltsverzeichnis</span>
                    <svg 
                      className={`w-5 h-5 transition-transform ${showTableOfContents ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <motion.div
                    initial={{ height: 'auto' }}
                    animate={{ height: showTableOfContents ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-3 bg-dark-800/40 rounded-b-lg">
                      <ul className="space-y-2 text-sm">
                        {headings.map((heading, index) => (
                          <li 
                            key={index} 
                            className={`cursor-pointer hover:text-primary-400 transition-colors ${
                              heading.level === 2 ? 'text-gray-300' : 'text-gray-400 pl-4'
                            }`}
                            onClick={() => scrollToSection(heading.id)}
                          >
                            {heading.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
                
                {/* Tags */}
                <div className="mb-8">
                  <h4 className="text-white font-medium mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link href={`/blog?tag=${tag}`} key={index} className="px-3 py-1 rounded-full bg-dark-800 text-gray-400 hover:bg-dark-700 transition-colors text-sm">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Share Links (Vertical) */}
                <div>
                  <h4 className="text-white font-medium mb-3">Teilen</h4>
                  <div className="flex flex-col space-y-2">
                    <button 
                      onClick={() => sharePost('twitter')}
                      className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      <span>Twitter</span>
                    </button>
                    <button 
                      onClick={() => sharePost('linkedin')}
                      className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span>LinkedIn</span>
                    </button>
                    <button 
                      onClick={() => sharePost('facebook')}
                      className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                      <span>Facebook</span>
                    </button>
                    <button 
                      onClick={() => sharePost('copy')}
                      className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Link kopieren</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: formattedContent }}
              />
              
              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-16"
              >
                <Card className="bg-dark-800/60 border-white/5 backdrop-blur-sm">
                  <CardHeader className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-600">
                        <div 
                          className="w-full h-full"
                          style={{
                            backgroundImage: `url(${post.author.avatar})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{post.author.name}</h3>
                      <p className="text-gray-400">{post.author.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Content-Experte und Webentwickler mit über 8 Jahren Erfahrung in der Erstellung und Verwaltung digitaler Inhalte.
                      Spezialisiert auf moderne CMS-Lösungen, SEO und mehrsprachige Content-Strategien.
                    </p>
                    <div className="flex items-center space-x-3 mt-4">
                      <a href="#" className="text-primary-400 hover:text-primary-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-primary-400 hover:text-primary-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold mb-6">Ähnliche Artikel</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPostsData.map((relatedPost, index) => (
                    <Link key={relatedPost.id} href={`/blog/post/${relatedPost.id}`} className="block h-full transform transition-transform hover:-translate-y-1">
                      <Card className="h-full border-white/5 hover:border-white/20 transition-colors duration-300 bg-dark-800/20 backdrop-blur-sm">
                        <div className="relative h-32 overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-dark-500" 
                            style={{
                              backgroundImage: `url(${relatedPost.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                          <div className="absolute top-2 left-2">
                            <span className="px-2 py-1 rounded-full bg-dark-800/80 text-white text-xs backdrop-blur-sm">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>
                        
                        <CardHeader className="pb-2">
                          <h3 className="text-base font-bold text-white line-clamp-2">{relatedPost.title}</h3>
                        </CardHeader>
                        
                        <CardContent className="text-gray-400 text-sm">
                          <p className="line-clamp-2">{relatedPost.excerpt}</p>
                          <div className="mt-2 text-xs text-gray-500">{relatedPost.date}</div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.div>
              
              {/* Comment Section Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold mb-6">Kommentare</h3>
                <Card className="bg-dark-800/30 border-white/5 backdrop-blur-sm">
                  <CardContent className="py-6">
                    <div className="text-center py-8">
                      <svg className="w-12 h-12 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <h4 className="text-lg font-medium text-gray-400 mb-2">Kommentarfunktion bald verfügbar</h4>
                      <p className="text-gray-500">
                        Wir arbeiten daran, eine interaktive Kommentarfunktion zu implementieren.
                      </p>
                      <button className="mt-4 px-4 py-2 rounded-lg bg-primary-700 text-white hover:bg-primary-600 transition-colors">
                        Benachrichtigung erhalten
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;