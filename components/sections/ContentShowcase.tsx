// components/sections/ContentShowcase.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";

// Icon components
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// Main component
const ContentShowcase = () => {
  const [activeTab, setActiveTab] = useState('socialMedia');
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Sample social media images (replace with your actual images)
  const socialMediaImages = [
    {
      src: "/assets/images/socialmedia01.webp",
      alt: "Social Media Campaign 1",
      title: "Instagram",
      description: "Entwicklung einer Content-Strategie für ein Modeunternehmen mit 25% Wachstum der Followerzahl."
    },
    {
      src: "/assets/images/socialmedia02.avif", 
      alt: "Social Media Campaign 2",
      title: "Facebook Werbekampagne",
      description: "Lead-Generation-Kampagne mit einer Konversionsrate von 4,8%."
    },
    {
      src: "/socialmedia/linkdin.webp",
      alt: "Social Media Campaign 3", 
      title: "LinkedIn Content-Strategie",
      description: "B2B Content-Marketing mit Fokus auf Thought Leadership und Branchenexpertise."
    },
    {
      src: "/socialmedia/content-plan.webp",
      alt: "Social Media Campaign 4",
      title: "Social Media Redaktionsplan", 
      description: "Strukturierter Content-Kalender für konsistente Markenführung auf allen Plattformen."
    }
  ];

  // Next slide handler
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === socialMediaImages.length - 1 ? 0 : prev + 1));
  };

  // Previous slide handler
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? socialMediaImages.length - 1 : prev - 1));
  };

  // Auto-slide effect for social media carousel
  useEffect(() => {
    if (activeTab === 'socialMedia') {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeTab, currentSlide]);

  // Tab data
  const tabs = [
    { id: 'socialMedia', label: 'Social Media' },
    { id: 'webContent', label: 'Web Content' },
    { id: 'emailMarketing', label: 'Email Marketing' },
    { id: 'seoContent', label: 'SEO Content' },
    { id: 'strategy', label: 'Strategie & Planung' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-secondary-500 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Content Creation </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Entdecken Sie meine Arbeiten in verschiedenen Bereichen der Content Creation und digitalen Strategie.
          </p>
        </motion.div>

        {/* Tabs navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[400px]"
          >
            {/* Social Media Tab */}
            {activeTab === 'socialMedia' && (
              <div className="relative">
                <div 
                  ref={sliderRef}
                  className="relative overflow-hidden rounded-xl"
                >
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {socialMediaImages.map((image, index) => (
                      <div key={index} className="min-w-full">
                        <div className="relative aspect-video md:aspect-[16/6] overflow-hidden rounded-xl">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">{image.title}</h3>
                            <p className="text-gray-300 text-sm md:text-base">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={prevSlide} 
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
                  >
                    <ChevronLeftIcon />
                  </button>
                  <button 
                    onClick={nextSlide} 
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
                  >
                    <ChevronRightIcon />
                  </button>
                  
                  {/* Dots navigation */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {socialMediaImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          currentSlide === index
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-lg text-gray-300 mb-4">
                    Von Content-Strategien bis zur Umsetzung kreativer Kampagnen - ich helfe Ihnen, in der digitalen Welt zu glänzen.
                  </p>
                  <Link 
                    href="/content-creation/socialmedia"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Alle Social Media Projekte ansehen
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            )}

            {/* Web Content Tab */}
            {activeTab === 'webContent' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
                    <Card className="border-white/10 bg-black/20 h-full flex flex-col">
                      <CardHeader>
                        <CardTitle>Website Copy & Content</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <img src="/assets/images/post/seo-opt.webp" alt="Website Copy" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <p className="text-gray-300">
                          Überzeugende Website-Texte, die informieren, inspirieren und konvertieren. Angepasst an Ihre Zielgruppe und Markenidentität.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Link 
                          href="/website-content"
                          className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mehr erfahren
                          <ArrowRightIcon />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Card className="border-white/10 bg-black/20 h-full flex flex-col">
                      <CardHeader>
                        <CardTitle>Blog-Artikel</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <img src="/assets/images/post/ecommerce.webp" alt="Blog Articles" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <p className="text-gray-300">
                          Tiefgründige, recherchierte Blog-Inhalte, die Ihr Publikum fesseln und gleichzeitig SEO-Ziele erfüllen.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Link 
                          href="/blog"
                          className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mehr erfahren
                          <ArrowRightIcon />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Card className="border-white/10 bg-black/20 h-full flex flex-col">
                      <CardHeader>
                        <CardTitle>Landing Pages</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <img src="/assets/images/post/landingpagecase.webp" alt="Landing Pages" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <p className="text-gray-300">
                          Conversion-optimierte Landing Pages, die Besucher in Kunden verwandeln. Mit klaren CTAs und überzeugenden Texten.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Link 
                          href="/landingpage"
                          className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mehr erfahren
                          <ArrowRightIcon />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </div>
                
                
              </motion.div>
            )}

{/* Email Marketing Tab */}
{activeTab === 'emailMarketing' && (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="mb-8"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left: Email template preview */}
      <motion.div variants={itemVariants} className="relative">
        <div className="bg-dark-800/80 rounded-xl p-4 border border-white/10 shadow-lg">
          <div className="bg-dark-700 rounded-t-lg p-3 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-center w-full text-gray-400">Email Preview</div>
          </div>
          <div className="p-4">
            <div className="mb-4 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-lg font-bold">K</div>
              <div>
                <p className="text-sm text-gray-300">Kristina Wagner</p>
                <p className="text-xs text-gray-500">content@kristinawagner.de</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Neuerungen für Ihr Unternehmen</h3>
              <p className="text-gray-400 text-sm">Sehr geehrte Kunden,</p>
              <p className="text-gray-400 text-sm mt-2">Wir freuen uns, Ihnen unsere neuesten Angebote vorstellen zu dürfen...</p>
            </div>
            <img src="/assets/images/emails/banner-mail.webp" alt="Email Campaign" className="w-full rounded-lg object-cover mb-4" />
            <div className="flex justify-center">
              <button className="px-4 py-2 bg-primary-500 text-white rounded-md text-sm">Mehr erfahren</button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 rounded-full filter blur-xl -z-10"></div>
      </motion.div>
      
      {/* Right: Features & CTA */}
      <motion.div variants={itemVariants} className="flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-6">Email Marketing Kampagnen</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-gradient-to-r from-primary-500 to-secondary-500 p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Personalisierte Kampagnen</p>
                <p className="text-gray-400 text-sm">Auf Ihre Zielgruppe zugeschnittene Email-Sequenzen, die eine persönliche Bindung aufbauen.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-gradient-to-r from-primary-500 to-secondary-500 p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Newsletter Konzepte</p>
                <p className="text-gray-400 text-sm">Kreative und informative Newsletter, die Ihre Abonnenten begeistern und zu aktiven Lesern machen.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-gradient-to-r from-primary-500 to-secondary-500 p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Automatisierte Sequenzen</p>
                <p className="text-gray-400 text-sm">Durchdachte Email-Funnel, die Leads durch die Customer Journey führen und Konversionen steigern.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="mt-8">
          <div className="p-4 bg-dark-800/60 rounded-lg border border-white/10 mb-6">
            <p className="text-sm text-gray-300 italic">
              "Die Email-Kampagnen haben unsere Öffnungsrate um 37% gesteigert und zu einer spürbaren Erhöhung der Conversions geführt."
            </p>
            <p className="text-xs text-gray-400 mt-2">— Michael B., Marketingleiter</p>
          </div>
          
          <Link 
            href="/email-demos"
            className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Email Marketing Projekte entdecken
            <ArrowRightIcon />
          </Link>
        </div>
      </motion.div>
    </div>
  </motion.div>
)}

{/* SEO Content Tab */}
{activeTab === 'seoContent' && (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* Left column - SEO Strategy */}
      <motion.div variants={itemVariants} className="md:col-span-1">
        <Card className="border-white/10 bg-gradient-to-br from-dark-800/80 to-dark-700/50 h-full flex flex-col">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 mb-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <CardTitle>SEO Analyse & Strategie</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                <span>Keyword-Recherche & -Analyse</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                <span>Wettbewerbsanalyse</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                <span>Content-Lücken Identifikation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                <span>SEO Audit & Empfehlungen</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-dark-900/70 rounded-lg border border-white/5">
              <p className="text-xs text-gray-400">
                "Durch detaillierte Analysen identifiziere ich die besten Chancen für organisches Wachstum."
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Center column - Content Optimization */}
      <motion.div variants={itemVariants} className="md:col-span-1">
        <Card className="border-white/10 bg-gradient-to-br from-dark-800/80 to-dark-700/50 h-full flex flex-col">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 mb-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <CardTitle>SEO Content Creation</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                <span>SEO-optimierte Blog-Artikel</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                <span>Produktbeschreibungen</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                <span>Landing Pages für Keywords</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                <span>Meta-Beschreibungen & Titel</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-dark-900/70 rounded-lg border border-white/5">
              <p className="text-xs text-gray-400">
                "Ich erstelle Content, der sowohl für Suchmaschinen als auch für Ihre Zielgruppe optimiert ist."
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Right column - Results */}
      <motion.div variants={itemVariants} className="md:col-span-1">
        <Card className="border-white/10 bg-gradient-to-br from-dark-800/80 to-dark-700/50 h-full flex flex-col">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 mb-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <CardTitle>Ergebnisse & Reporting</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Organischer Traffic</span>
                <span className="text-primary-400">+143%</span>
              </div>
              <div className="w-full bg-dark-900/70 rounded-full h-2">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
              <span>Keyword-Rankings</span>
                <span className="text-primary-400">+37 Positionen</span>
              </div>
              <div className="w-full bg-dark-900/70 rounded-full h-2">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Conversion-Rate</span>
                <span className="text-primary-400">+28%</span>
              </div>
              <div className="w-full bg-dark-900/70 rounded-full h-2">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-dark-900/70 rounded-lg border border-white/5">
              <p className="text-xs text-gray-400">
                "Transparente Erfolgsberichte zeigen den ROI Ihrer SEO-Investitionen."
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    
    

  </motion.div>
)}

{/* Strategy & Planning Tab */}
{activeTab === 'strategy' && (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
      {/* Left: Strategy Overview */}
      <motion.div variants={itemVariants} className="lg:col-span-5">
        <div className="bg-dark-800/50 border border-white/10 rounded-xl p-6 h-full">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Content Strategie</h3>
              <p className="text-gray-400 text-sm">Ganzheitliche Planung für nachhaltige Ergebnisse</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">
            Eine durchdachte Content-Strategie ist das Fundament für Ihren digitalen Erfolg. Ich entwickle maßgeschneiderte Strategien, die Ihre Geschäftsziele mit den Bedürfnissen Ihrer Zielgruppe verbinden.
          </p>
          
          <h4 className="font-medium mb-3">Mein strategischer Ansatz:</h4>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">1</div>
              <div>
                <p className="font-medium">Analyse & Recherche</p>
                <p className="text-sm text-gray-400">Umfassende Markt-, Wettbewerbs- und Zielgruppenanalyse</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">2</div>
              <div>
                <p className="font-medium">Strategie-Entwicklung</p>
                <p className="text-sm text-gray-400">Definition von Zielen, Kanälen, Formaten und Kennzahlen</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">3</div>
              <div>
                <p className="font-medium">Content-Planung</p>
                <p className="text-sm text-gray-400">Themen, Redaktionsplan und Content-Kalender</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">4</div>
              <div>
                <p className="font-medium">Umsetzung & Optimierung</p>
                <p className="text-sm text-gray-400">Kontinuierliche Erfolgsmessung und Anpassung</p>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
      
      {/* Right: Interactive Strategy Map */}
      <motion.div variants={itemVariants} className="lg:col-span-7">
        <div className="bg-dark-800/50 border border-white/10 rounded-xl p-6 h-full">
          <h3 className="text-xl font-bold mb-6">Content-Strategie Visualisierung</h3>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl filter blur-lg opacity-30"></div>
            <div className="relative bg-dark-900/80 rounded-lg border border-white/10 p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3">
                  <div className="bg-primary-500/20 border border-primary-500/30 rounded-lg p-3 text-center">
                    <p className="font-medium">Geschäftsziele</p>
                    <p className="text-xs text-gray-400 mt-1">Brand Awareness • Lead Generation • Kundengewinnung • Kundenbindung</p>
                  </div>
                </div>
                
                <div className="col-span-3">
                  <div className="flex justify-center my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
                
                <div className="col-span-3">
                  <div className="bg-secondary-500/20 border border-secondary-500/30 rounded-lg p-3 text-center">
                    <p className="font-medium">Zielgruppen & Personas</p>
                    <p className="text-xs text-gray-400 mt-1">Bedürfnisse • Schmerzpunkte • Customer Journey • Touchpoints</p>
                  </div>
                </div>
                
                <div className="col-span-3">
                  <div className="flex justify-center my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
                
                <div className="col-span-3 grid grid-cols-3 gap-3">
                  <div className="bg-dark-800 rounded-lg p-3 text-center border border-white/10">
                    <p className="font-medium text-sm">Content-Typen</p>
                    <p className="text-xs text-gray-400 mt-1">Blog • Video • Social • Email</p>
                  </div>
                  <div className="bg-dark-800 rounded-lg p-3 text-center border border-white/10">
                    <p className="font-medium text-sm">Kanäle</p>
                    <p className="text-xs text-gray-400 mt-1">Web • Social Media • Newsletter</p>
                  </div>
                  <div className="bg-dark-800 rounded-lg p-3 text-center border border-white/10">
                    <p className="font-medium text-sm">Formate</p>
                    <p className="text-xs text-gray-400 mt-1">Howtos • Stories • Guides • Case Studies</p>
                  </div>
                </div>
                
                <div className="col-span-3">
                  <div className="flex justify-center my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
                
                <div className="col-span-3">
                  <div className="bg-dark-800 rounded-lg p-3 text-center border border-white/5 bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
                    <p className="font-medium">Redaktionsplan & Content-Kalender</p>
                    <p className="text-xs text-gray-400 mt-1">Themen • Zeitplan • Verantwortlichkeiten • Ressourcen</p>
                  </div>
                </div>
                
                <div className="col-span-3">
  <div className="flex justify-center my-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</div>

<div className="col-span-3">
  <div className="bg-dark-800 rounded-lg p-3 text-center border border-white/5 bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
    <p className="font-medium">Analyse & Optimierung</p>
    <p className="text-xs text-gray-400 mt-1">KPIs • Performance-Tracking • A/B Testing • Iterative Verbesserung</p>
  </div>
</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary-500"></div>
              <p className="text-xs text-gray-400">Strategie-Element</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
              <p className="text-xs text-gray-400">Zielgruppen-Element</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <p className="text-xs text-gray-400">Umsetzungs-Element</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    
    {/* Content Calendar */}
    <motion.div variants={itemVariants} className="mb-8">
      <div className="bg-dark-800/50 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Content-Kalender
        </h3>
        <p className="text-gray-300 mb-6">
          Ein strategischer Content-Kalender sorgt für Konsistenz und hilft, Ressourcen effizient zu planen.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2 mb-4">
          <div className="bg-dark-900/70 py-2 px-3 rounded-md text-center font-medium text-sm">Mo</div>
          <div className="bg-dark-900/70 py-2 px-3 rounded-md text-center font-medium text-sm">Di</div>
          <div className="bg-dark-900/70 py-2 px-3 rounded-md text-center font-medium text-sm">Mi</div>
          <div className="bg-dark-900/70 py-2 px-3 rounded-md text-center font-medium text-sm">Do</div>
          <div className="bg-dark-900/70 py-2 px-3 rounded-md text-center font-medium text-sm">Fr</div>
          <div className="bg-dark-900/70 py-2 px-3 rounded-md text-center font-medium text-sm">Sa</div>
          <div className="bg-dark-900/70 py-2 px-3 rounded-md text-center font-medium text-sm">So</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
          <div className="bg-dark-900/70 p-2 rounded-md border border-white/5 h-24 md:h-28">
            <div className="bg-primary-500/20 border border-primary-500/30 rounded p-1.5 text-xs">
              <p className="font-medium">Blog-Artikel</p>
              <p className="text-gray-400 mt-1">SEO-optimierter Guide</p>
            </div>
          </div>
          <div className="bg-dark-900/70 p-2 rounded-md border border-white/5 h-24 md:h-28">
            <div className="bg-secondary-500/20 border border-secondary-500/30 rounded p-1.5 text-xs">
              <p className="font-medium">Social Media</p>
              <p className="text-gray-400 mt-1">Instagram & LinkedIn</p>
            </div>
          </div>
          <div className="bg-dark-900/70 p-2 rounded-md border border-white/5 h-24 md:h-28"></div>
          <div className="bg-dark-900/70 p-2 rounded-md border border-white/5 h-24 md:h-28">
            <div className="bg-primary-500/20 border border-primary-500/30 rounded p-1.5 text-xs">
              <p className="font-medium">Newsletter</p>
              <p className="text-gray-400 mt-1">Wöchentlicher Versand</p>
            </div>
          </div>
          <div className="bg-dark-900/70 p-2 rounded-md border border-white/5 h-24 md:h-28">
            <div className="bg-secondary-500/20 border border-secondary-500/30 rounded p-1.5 text-xs">
              <p className="font-medium">Social Media</p>
              <p className="text-gray-400 mt-1">Alle Kanäle</p>
            </div>
          </div>
          <div className="bg-dark-900/70 p-2 rounded-md border border-white/5 h-24 md:h-28"></div>
          <div className="bg-dark-900/70 p-2 rounded-md border border-white/5 h-24 md:h-28"></div>
        </div>
      </div>
    </motion.div>
    
    
  </motion.div>
)}
        </motion.div>
      </AnimatePresence>
      </div>
    </section>
  );
};

export default ContentShowcase;