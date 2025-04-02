// app/about/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import PageWrapper from '@/layout/PageWrapper';

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const services = [
    { 
      name: 'Content Marketing', 
      description: 'Entwicklung von ansprechenden Inhalten für Social Media und Websites mit Fokus auf Engagement und Conversion.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    { 
      name: 'Web Development', 
      description: 'Erstellung moderner, responsiver Websites mit Node.js und WordPress für optimale Benutzererfahrung.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      name: 'Automatisierung', 
      description: 'Implementierung von Workflow-Automatisierungen zur Steigerung der Effizienz und Produktivität.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: 'Copywriting', 
      description: 'Erstellung überzeugender Texte, die Ihre Marke stärken und Kunden zum Handeln motivieren.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    { 
      name: 'SEO Optimierung', 
      description: 'On-Page und Off-Page SEO-Strategien für bessere Sichtbarkeit und höhere Rankings in Suchmaschinen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    },
    { 
      name: 'Email Marketing', 
      description: 'Konzeption und Umsetzung effektiver Email-Kampagnen für Kundengewinnung und -bindung.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <PageWrapper>
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="relative z-10 flex flex-col lg:flex-row gap-12">
          {/* Left Column - Photo */}
          <motion.div 
            className="lg:w-1/3"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInVariants}
            custom={0}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-lg mb-8">
              {/* Replace with your actual photo - using a placeholder for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
              <div className="w-full h-full bg-dark-800 flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="text-sm text-gray-400">hamy vosugh</span>
                  {/* Uncomment and modify when you have your image */}
                  {
                  <Image
                    src="/assets/images/DSC00279(1).jpg"
                    alt="Hamy Vosugh"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="z-0"
                  />
                  }
                </div>
              </div>
            </div>
            
            {/* Contact Information Card */}
            <motion.div
              variants={fadeInVariants}
              custom={3}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-white">Kontakt</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href="mailto:hi@hamyvosugh.com" className="text-gray-300 hover:text-white transition-colors">hi@hamyvosugh.com</a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a href="tel:+4917647666407" className="text-gray-300 hover:text-white transition-colors">+49 176 47 666 407</a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">Main-Kinzig-Kreis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          {/* Right Column - About Me */}
          <motion.div 
            className="lg:w-2/3"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInVariants}
            custom={1}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">Über mich</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="space-y-6 text-gray-300"
                  variants={fadeInVariants}
                  custom={2}
                >
                  <p className="text-lg">
                    Hallo, ich bin <span className="text-white font-medium">Hamy Vosugh</span>, ein erfahrener <span className="text-white font-medium">Digitaler Content Manager</span> aus dem Main-Kinzig-Kreis.
                  </p>
                  
                  <p>
                    Mit einer Leidenschaft für digitale Medien und Technologie kombiniere ich kreatives Content Marketing mit technischen Fähigkeiten im Web Development, um ganzheitliche digitale Lösungen zu schaffen.
                  </p>
                  
                  <p>
                    Meine Expertise liegt in der Erstellung von ansprechenden Inhalten für soziale Medien und Websites, der Entwicklung moderner Webseiten mit Node.js und WordPress sowie der Implementierung von Automatisierungslösungen für tägliche Workflows.
                  </p>
                  
                  <p>
                    Ich helfe Unternehmen dabei, ihre Online-Präsenz durch eine Kombination aus SEO-Optimierung, kreativem Copywriting und strategischem Email-Marketing zu stärken und zu erweitern.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
            
            {/* Experience */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl text-white">Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.ul 
                  className="space-y-4 text-gray-300"
                  variants={fadeInVariants}
                  custom={3}
                >
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Content Creation</h3>
                      <p className="text-sm mt-1">Entwicklung ansprechender Inhalte für Social Media und Websites mit Fokus auf User Engagement</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Web Design & Entwicklung</h3>
                      <p className="text-sm mt-1">Konzeption und Umsetzung moderner Websites mit Node.js und WordPress, optimiert für Performance und Nutzererfahrung</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Automatisierung</h3>
                      <p className="text-sm mt-1">Implementierung von Workflow-Automatisierungen zur Steigerung der Effizienz und Produktivität</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">SEO & Digital Marketing</h3>
                      <p className="text-sm mt-1">On-Page und Off-Page SEO-Optimierung, Email Marketing-Kampagnen und strategische Content-Planung</p>
                    </div>
                  </li>
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInVariants}
          custom={4}
        >
          <div className="relative max-w-3xl mx-auto p-8 rounded-xl glass border border-white/10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl opacity-20 blur-xl"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Lassen Sie uns zusammenarbeiten</h2>
              <p className="text-gray-300 mb-6">Bereit, Ihr digitales Projekt auf die nächste Stufe zu heben? Kontaktieren Sie mich für kreative und technische Lösungen.</p>
              <a 
                href="/kontakt" 
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}