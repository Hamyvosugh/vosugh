// components/blog/ContentGrid.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card';

// Sample blog post data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Headless CMS: Die Zukunft der Content-Verwaltung",
    excerpt: "Wie moderne Headless-Systeme die Verwaltung und Verteilung von Inhalten revolutionieren.",
    category: "CMS",
    tags: ["Headless", "API", "Content"],
    date: "15.03.2025",
    readTime: "6 min",
    image: "/assets/images/post/cms.webp", // These would be your actual images
    featured: true
  },
  {
    id: 2,
    title: "Datenimport leicht gemacht: ETL-Prozesse für Content Manager",
    excerpt: "Effiziente Methoden zum Importieren großer Datenmengen in Ihre Content-Management-Systeme.",
    category: "Datenmanagement",
    tags: ["ETL", "Import", "Automatisierung"],
    date: "02.03.2025",
    readTime: "8 min",
    image: "/assets/images/post/time-mng.webp",
    featured: false
  },
  {
    id: 3,
    title: "SEO-optimierte Inhalte mit strukturierten Daten",
    excerpt: "Wie Sie mit strukturierten Daten die Sichtbarkeit Ihrer Inhalte in Suchmaschinen verbessern können.",
    category: "SEO",
    tags: ["Schema.org", "Rich Results", "SERP"],
    date: "27.02.2025",
    readTime: "5 min",
    image: "/assets/images/post/seo-opt.webp",
    featured: true
  },
  {
    id: 4,
    title: "Next.js und Strapi: Das perfekte Duo für moderne Websites",
    excerpt: "Eine Schritt-für-Schritt-Anleitung zur Integration von Strapi CMS mit Next.js für hochperformante Websites.",
    category: "Entwicklung",
    tags: ["Next.js", "Strapi", "JavaScript"],
    date: "19.02.2025",
    readTime: "10 min",
    image: "/assets/images/post/devleop.webp",
    featured: false
  },
  {
    id: 5,
    title: "Content-Automatisierung: Skalierbare Inhalte für E-Commerce",
    excerpt: "Strategien zur Automatisierung von Produktbeschreibungen und kategoriespezifischen Inhalten.",
    category: "Automatisierung",
    tags: ["E-Commerce", "NLG", "Skalierung"],
    date: "12.02.2025",
    readTime: "7 min",
    image: "/assets/images/post/ecommerce.webp",
    featured: false
  },
  {
    id: 6,
    title: "GraphQL APIs für flexible Content-Abfragen",
    excerpt: "Wie GraphQL die Art und Weise verändert, wie wir auf Content-Daten zugreifen und diese verwalten.",
    category: "API",
    tags: ["GraphQL", "API", "Datenabfrage"],
    date: "05.02.2025",
    readTime: "9 min",
    image: "/assets/images/post/api.webp",
    featured: false
  },
  {
    id: 7,
    title: "Multilingual Content Management mit modernen CMS",
    excerpt: "Best Practices für die Verwaltung mehrsprachiger Inhalte in globalen digitalen Projekten.",
    category: "Internationalisierung",
    tags: ["i18n", "Lokalisierung", "Global"],
    date: "29.01.2025",
    readTime: "6 min",
    image: "/assets/images/post/medui.webp",
    featured: false
  },
  {
    id: 8,
    title: "Datenmigration ohne Kopfschmerzen: Ein Leitfaden",
    excerpt: "Wie Sie große Datenmengen sicher und effizient zwischen verschiedenen Systemen migrieren können.",
    category: "Datenmanagement",
    tags: ["Migration", "Legacy", "Daten"],
    date: "22.01.2025",
    readTime: "8 min",
    image: "/assets/images/post/dataan.webp",
    featured: true
  }
];

// All unique categories from blog posts
const ALL_CATEGORIES = Array.from(new Set(BLOG_POSTS.map(post => post.category)));

// All unique tags from blog posts
const ALL_TAGS = Array.from(new Set(BLOG_POSTS.flatMap(post => post.tags)));

interface ContentGridProps {
  className?: string;
}

const ContentGrid: React.FC<ContentGridProps> = ({ className = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Filter posts based on selected category and tags
  useEffect(() => {
    let result = [...BLOG_POSTS];
    
    if (selectedCategory) {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    if (selectedTags.length > 0) {
      result = result.filter(post => 
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }
    
    setFilteredPosts(result);
  }, [selectedCategory, selectedTags]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text pb-5">Blog & Artikel</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Entdecken Sie meine neuesten Artikel und Insights zu Content Management, 
            Webentwicklung und digitalen Strategien.
          </p>
        </motion.div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button 
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
            className="w-full py-3 px-4 bg-dark-800 border border-white/10 rounded-lg flex justify-between items-center"
          >
            <span>Filter {selectedCategory || selectedTags.length > 0 ? '(Aktiv)' : ''}</span>
            <svg 
              className={`w-5 h-5 transition-transform ${showFiltersMobile ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filter - Mobile */}
          <motion.div 
            className={`lg:hidden ${showFiltersMobile ? 'block' : 'hidden'}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: showFiltersMobile ? 'auto' : 0,
              opacity: showFiltersMobile ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-dark-900/80 border border-white/5 rounded-xl p-6 mb-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Filter</h3>
                {(selectedCategory || selectedTags.length > 0) && (
                  <button 
                    onClick={resetFilters} 
                    className="text-sm text-primary-400 hover:text-primary-300"
                  >
                    Zurücksetzen
                  </button>
                )}
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm uppercase text-gray-500 mb-3">Kategorien</h4>
                <div className="space-y-2">
                  {ALL_CATEGORIES.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        category === selectedCategory 
                          ? 'bg-primary-900/40 text-primary-400' 
                          : 'text-gray-300 hover:bg-dark-800'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Tags */}
              <div>
                <h4 className="text-sm uppercase text-gray-500 mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {ALL_TAGS.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTags.includes(tag)
                          ? 'bg-secondary-600/30 text-secondary-300'
                          : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Filter - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="bg-dark-900/80 border border-white/5 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Filter</h3>
                  {(selectedCategory || selectedTags.length > 0) && (
                    <button 
                      onClick={resetFilters} 
                      className="text-sm text-primary-400 hover:text-primary-300"
                    >
                      Zurücksetzen
                    </button>
                  )}
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase text-gray-500 mb-3">Kategorien</h4>
                  <div className="space-y-2">
                    {ALL_CATEGORIES.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          category === selectedCategory 
                            ? 'bg-primary-900/40 text-primary-400' 
                            : 'text-gray-300 hover:bg-dark-800'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div>
                  <h4 className="text-sm uppercase text-gray-500 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {ALL_TAGS.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedTags.includes(tag)
                            ? 'bg-secondary-600/30 text-secondary-300'
                            : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Newsletter Subscription */}
              <div className="mt-8 bg-gradient-to-br from-primary-900/30 to-secondary-900/30 border border-white/5 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-2">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Erhalten Sie Updates zu neuen Artikeln und exklusive Inhalte.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Ihre E-Mail" 
                    className="w-full px-4 py-2 rounded-lg bg-dark-800/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  />
                  <button className="w-full py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium hover:opacity-90 transition-opacity">
                    Abonnieren
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {!selectedCategory && selectedTags.length === 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-primary-500/20 text-primary-400 p-1 rounded mr-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </span>
                  Featured Artikel
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {BLOG_POSTS.filter(post => post.featured).slice(0, 2).map((post) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <Link href={`/blog/post/${post.id}`} className="block h-full transform transition-transform hover:-translate-y-1">
                        <Card className="h-full overflow-hidden border-primary-800/20 hover:border-primary-600/40 transition-colors duration-300 bg-dark-800/40 backdrop-blur-sm">
                          <div className="relative h-48 overflow-hidden">
                            <div 
                              className="absolute inset-0 bg-dark-500" 
                              style={{
                                backgroundImage: `url(${post.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                            <div className="absolute top-3 left-3">
                              <span className="px-3 py-1 rounded-full bg-primary-600/80 text-white text-xs font-medium backdrop-blur-sm">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          
                          <CardHeader className="pb-2">
                            <h3 className="text-xl font-bold text-white">{post.title}</h3>
                          </CardHeader>
                          
                          <CardContent className="text-gray-400">
                            <p>{post.excerpt}</p>
                          </CardContent>
                          
                          <CardFooter className="flex justify-between items-center text-xs text-gray-500">
                            <span>{post.date}</span>
                            <span>{post.readTime} Lesezeit</span>
                          </CardFooter>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-bold mb-6">
                {selectedCategory || selectedTags.length > 0 
                  ? `${filteredPosts.length} Artikel gefunden` 
                  : 'Alle Artikel'}
              </h3>
              
              {filteredPosts.length === 0 ? (
                <div className="bg-dark-800/60 rounded-xl p-10 text-center">
                  <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-lg font-medium text-gray-400 mb-2">Keine Artikel gefunden</h4>
                  <p className="text-gray-500 mb-4">
                    Versuchen Sie andere Filter oder durchsuchen Sie alle Artikel.
                  </p>
                  <button 
                    onClick={resetFilters}
                    className="px-4 py-2 rounded-lg bg-primary-700 text-white hover:bg-primary-600 transition-colors"
                  >
                    Alle Artikel anzeigen
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link href={`/blog/post/${post.id}`} className="block h-full transform transition-transform hover:-translate-y-1">
                        <Card className="h-full border-white/5 hover:border-white/20 transition-colors duration-300 bg-dark-800/20 backdrop-blur-sm">
                          <div className="relative h-40 overflow-hidden">
                            <div 
                              className="absolute inset-0 bg-dark-500" 
                              style={{
                                backgroundImage: `url(${post.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                            <div className="absolute top-3 left-3">
                              <span className="px-3 py-1 rounded-full bg-dark-800/80 text-white text-xs backdrop-blur-sm">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          
                          <CardHeader className="pb-2">
                            <h3 className="text-lg font-bold text-white">{post.title}</h3>
                          </CardHeader>
                          
                          <CardContent className="text-gray-400 text-sm">
                            <p className="line-clamp-2">{post.excerpt}</p>
                          </CardContent>
                          
                          <CardFooter className="flex justify-between items-center text-xs text-gray-500">
                            <span>{post.date}</span>
                            <span>{post.readTime} Lesezeit</span>
                          </CardFooter>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:bg-dark-800 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-primary-600 text-white">1</button>
                    <button className="w-10 h-10 rounded-lg border border-white/10 text-gray-400 hover:bg-dark-800 transition-colors">2</button>
                    <button className="w-10 h-10 rounded-lg border border-white/10 text-gray-400 hover:bg-dark-800 transition-colors">3</button>
                    <span className="text-gray-500">...</span>
                    <button className="w-10 h-10 rounded-lg border border-white/10 text-gray-400 hover:bg-dark-800 transition-colors">8</button>
                    <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:bg-dark-800 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;