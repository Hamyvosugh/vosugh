// app/blog/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import DataManagement from '@/components/blog/DataManagement';
import ContentGrid from '@/components/blog/ContentGrid';

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-dark-900">
      {/* Background Elements */}
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 pb-5 gradient-text ">
              Blog & Content Showcase
            </h1>
            <p className="text-xl text-gray-300">
              Entdecken Sie meine Expertise in Datenmanagement, Content-Erstellung und Web-Entwicklung
              mit modernen Technologien und kreativen Lösungen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-dark-800/30 border border-white/5 rounded-xl p-6 backdrop-blur-sm hover:border-primary-600/20 hover:bg-dark-800/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm0 5h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Datenmanagement</h3>
              <p className="text-gray-400">
                Professionelle Lösungen für die effiziente Verwaltung und Integration von Content in modernen CMS.
              </p>
            </div>
            
            <div className="bg-dark-800/30 border border-white/5 rounded-xl p-6 backdrop-blur-sm hover:border-secondary-600/20 hover:bg-dark-800/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-secondary-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Content Creation</h3>
              <p className="text-gray-400">
                Strategische Erstellung von Inhalten mit Fokus auf SEO, Engagement und Conversions.
              </p>
            </div>
            
            <div className="bg-dark-800/30 border border-white/5 rounded-xl p-6 backdrop-blur-sm hover:border-primary-600/20 hover:bg-dark-800/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
              <p className="text-gray-400">
                Moderne Webentwicklung mit Next.js, Typescript und weiteren zukunftssicheren Technologien.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data Management Section */}
      <DataManagement />
      
      {/* Content Grid Section */}
      <ContentGrid />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-gradient-to-b from-transparent to-dark-900">
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
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
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