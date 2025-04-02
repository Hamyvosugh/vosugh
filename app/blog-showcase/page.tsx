// app/blog-showcase/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import DataManagement from '@/components/blog/DataManagement';
import ContentGrid from '@/components/blog/ContentGrid';
import BlogPost from '@/components/blog/BlogPost';
import Link from 'next/link';

export default function BlogShowcasePage() {
  return (
    <main className="relative min-h-screen bg-dark-900">
      {/* Background Elements */}
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-900/30 text-primary-400 text-sm font-medium mb-4">
              Blog & Content Showcase
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Digitales Content Management
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Ein modernes Showcase für meine Expertise in Content-Erstellung, 
              Datenmanagement und Web-Entwicklung für professionelle Content-getriebene Projekte.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="#data-management"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Datenmanagement
              </Link>
              <Link 
                href="#content-display"
                className="px-6 py-3 rounded-lg bg-dark-800 border border-white/10 text-white font-medium hover:bg-dark-700 transition-colors"
              >
                Content Display
              </Link>
              <Link 
                href="#single-post"
                className="px-6 py-3 rounded-lg bg-dark-800 border border-white/10 text-white font-medium hover:bg-dark-700 transition-colors"
              >
                Artikel-Ansicht
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Moderne Lösungen für <span className="gradient-text">Content-Management</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Als erfahrener digitaler Content Manager verbinde ich technisches Know-how mit 
                kreativer Content-Erstellung. Meine Lösungen helfen Unternehmen, ihre Inhalte 
                effizient zu verwalten, zu präsentieren und zu optimieren.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-900/30 p-1 rounded">
                      <svg className="h-4 w-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-white">Effiziente Datenverwaltung</h3>
                    <p className="text-gray-400">Maßgeschneiderte CMS- und Datenbanklösungen für optimale Workflows.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-900/30 p-1 rounded">
                      <svg className="h-4 w-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-white">Moderne Content-Präsentation</h3>
                    <p className="text-gray-400">Ansprechende, performante und benutzerfreundliche Darstellung von Inhalten.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-900/30 p-1 rounded">
                      <svg className="h-4 w-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-white">SEO-optimierte Artikel</h3>
                    <p className="text-gray-400">Professionelle Content-Erstellung mit Fokus auf Sichtbarkeit und Conversion.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <div className="bg-dark-800 p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="w-2/3 h-5 bg-dark-700 rounded-md"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 h-[calc(100%-2rem)]">
                      <div className="col-span-3 bg-dark-700/50 rounded-lg p-3">
                        <div className="w-full h-6 bg-dark-600 rounded-md mb-3"></div>
                        <div className="space-y-2">
                          <div className="w-full h-4 bg-dark-600 rounded-sm"></div>
                          <div className="w-full h-4 bg-dark-600 rounded-sm"></div>
                          <div className="w-full h-4 bg-dark-600 rounded-sm"></div>
                          <div className="w-3/4 h-4 bg-dark-600 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="col-span-9 bg-dark-700/50 rounded-lg p-3">
                        <div className="w-2/3 h-8 bg-primary-900/30 rounded-md mb-4"></div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="h-20 bg-dark-600 rounded-md"></div>
                          <div className="h-20 bg-dark-600 rounded-md"></div>
                        </div>
                        <div className="w-full h-28 bg-dark-600 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-secondary-500/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center text-primary-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm0 5h16" />
                  </svg>
                </div>
                <div className="absolute top-1/4 left-0 transform -translate-x-1/2 w-10 h-10 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center text-secondary-400 rotate-12">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data Management Section */}
      <section id="data-management" className="pt-20">
        <DataManagement />
      </section>
      
      {/* Content Display Section */}
      <section id="content-display" className="pt-20">
        <ContentGrid />
      </section>
      
      {/* Single Post View */}
      <section id="single-post" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Artikel-Ansicht
            </h2>
            <p className="text-lg text-gray-300">
              So präsentieren sich Ihre Inhalte - optimiert für Lesbarkeit, Engagement und Conversion.
            </p>
          </div>
          
          <div className="relative">
            <BlogPost postId={1} />
            
            {/* Overlay to indicate it's a showcase */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900/95">
              <div className="absolute bottom-0 left-0 right-0 text-center pb-16">
                <Link 
                  href="/blog/post/1"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium hover:opacity-90 transition-opacity inline-flex items-center"
                >
                  <span>Vollständigen Artikel ansehen</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Bereit für professionelles <span className="gradient-text">Content Management</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Lassen Sie uns gemeinsam Ihre Content-Strategie auf das nächste Level heben.
            </p>
            <Link 
              href="/kontakt"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium hover:opacity-90 transition-opacity inline-flex items-center text-lg"
            >
              <span>Jetzt kontaktieren</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Hamy Vosugh</h3>
              <p className="text-gray-400 mb-6">
                Digitaler Content Manager und Web-Entwickler, 
                spezialisiert auf moderne Lösungen für Content-Management und Web-Präsenzen.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="md:text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Kontakt</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:hi@hamyvosugh.com" className="hover:text-primary-400 transition-colors">
                    hi@hamyvosugh.com
                  </a>
                </li>
                <li>
                  <a href="tel:+4917647666407" className="hover:text-primary-400 transition-colors">
                    +49 176 47 666 407
                  </a>
                </li>
                <li>Main-Kinzig-Kreis</li>
              </ul>
            </div>
            
            <div className="md:text-right">
              <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Web Design & Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    SEO-Optimierung
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Workflow-Automatisierung
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
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