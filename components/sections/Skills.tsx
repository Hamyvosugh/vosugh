// components/sections /Services.tsx 
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Code, Database, ArrowRight, Calendar, Mail, Instagram, 
         Monitor, ShoppingCart, Search, RefreshCw, Zap, Users, BarChart, Link, Settings } from 'lucide-react';

interface ServiceCategory {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  services: Array<{
    name: string;
    description: string;
    icon: JSX.Element;
  }>;
}

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Content Marketing");
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Define service categories with their respective offerings
  const serviceCategories: ServiceCategory[] = [
    {
      title: "Content Marketing",
      description: "Professionelle Content-Strategie und Erstellung, die Ihre Marke stärkt und messbare Ergebnisse liefert.",
      icon: <FileText className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-500",
      services: [
        { 
          name: "Content-Strategie & Planung", 
          description: "Entwicklung umfassender Content-Strategien, die Ihre Geschäftsziele unterstützen und Ihre Zielgruppe ansprechen.",
          icon: <Calendar className="h-5 w-5" />
        },
        { 
          name: "Blog & Artikel Erstellung", 
          description: "Professionelle, SEO-optimierte Artikel und Blogbeiträge, die Ihre Expertise demonstrieren und Traffic generieren.",
          icon: <FileText className="h-5 w-5" />
        },
        { 
          name: "Social Media Management", 
          description: "Vollständige Betreuung Ihrer Social-Media-Kanäle mit maßgeschneiderten Inhalten und Engagement-Strategien.",
          icon: <Instagram className="h-5 w-5" />
        },
        { 
          name: "Email-Marketing Kampagnen", 
          description: "Wirkungsvolle Email-Sequenzen und Newsletter, die Leads nurturieren und Conversions steigern.",
          icon: <Mail className="h-5 w-5" />
        },
        { 
          name: "Content-Audit & Optimierung", 
          description: "Analyse und Verbesserung Ihrer bestehenden Inhalte für maximale Performance und Sichtbarkeit.",
          icon: <RefreshCw className="h-5 w-5" />
        },
      ],
    },
    {
      title: "Web Development",
      description: "Maßgeschneiderte Webentwicklung mit Fokus auf Benutzerfreundlichkeit, Performance und Conversion-Optimierung.",
      icon: <Code className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-500",
      services: [
        { 
          name: "Responsive Website-Entwicklung", 
          description: "Entwicklung moderner, mobilfreundlicher Websites, die auf allen Geräten optimal funktionieren und Ihre Marke repräsentieren.",
          icon: <Monitor className="h-5 w-5" />
        },
        { 
          name: "WordPress-Implementierung", 
          description: "Professionelle WordPress-Lösungen mit benutzerfreundlichen CMS-Systemen für einfache Content-Verwaltung.",
          icon: <Code className="h-5 w-5" />
        },
        { 
          name: "E-Commerce Lösungen", 
          description: "Entwicklung von Online-Shops mit nahtloser Benutzerführung und optimierten Checkout-Prozessen.",
          icon: <ShoppingCart className="h-5 w-5" />
        },
        { 
          name: "SEO-Optimierung", 
          description: "Technische und On-Page SEO-Optimierung Ihrer Website für bessere Sichtbarkeit in Suchmaschinen.",
          icon: <Search className="h-5 w-5" />
        },
        { 
          name: "Website Relaunch & Migration", 
          description: "Sichere und reibungslose Umstellung bestehender Websites mit Fokus auf Erhalt von SEO-Rankings und Nutzererfahrung.",
          icon: <RefreshCw className="h-5 w-5" />
        },
      ],
    },
    {
      title: "Business Automation",
      description: "Digitalisierung und Automatisierung von Geschäftsprozessen für mehr Effizienz und Skalierbarkeit Ihres Unternehmens.",
      icon: <Database className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        { 
          name: "Marketing-Workflow Automatisierung", 
          description: "Implementierung von automatisierten Marketing-Prozessen für konsistente Lead-Generierung und Nurturing.",
          icon: <Zap className="h-5 w-5" />
        },
        { 
          name: "CRM-Integration & Optimierung", 
          description: "Einrichtung und Anpassung von CRM-Systemen für verbesserte Kundenverwaltung und Sales-Prozesse.",
          icon: <Users className="h-5 w-5" />
        },
        { 
          name: "Datenanalyse & Reporting", 
          description: "Erstellung automatisierter Berichte und Dashboards für datenbasierte Geschäftsentscheidungen.",
          icon: <BarChart className="h-5 w-5" />
        },
        { 
          name: "API-Integration & Entwicklung", 
          description: "Verknüpfung verschiedener Systeme und Plattformen für nahtlose Datenübertragung und Prozessautomatisierung.",
          icon: <Link className="h-5 w-5" />
        },
        { 
          name: "Geschäftsprozess-Optimierung", 
          description: "Analyse und Digitalisierung von Workflows zur Steigerung der Produktivität und Reduzierung manueller Arbeit.",
          icon: <Settings className="h-5 w-5" />
        },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  // Find the active category
  const activeCategoryData = serviceCategories.find(
    (category) => category.title === activeCategory
  );

  return (
    <section id="services" className="py-16 relative bg-gradient-to-b from-black/40 to-gray-900/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-96 bg-gradient-to-t from-secondary-500/10 to-transparent"></div>
        
        {/* Floating dots/particles */}
        {isLoaded && (
          <>
            <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary-500/30 animate-pulse"></div>
            <div className="absolute top-40 right-1/4 w-3 h-3 rounded-full bg-secondary-500/20 animate-ping" style={{animationDuration: '3s'}}></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-primary-500/20 animate-ping" style={{animationDuration: '4s'}}></div>
            <div className="absolute bottom-40 right-20 w-2 h-2 rounded-full bg-secondary-500/30 animate-pulse" style={{animationDuration: '2.5s'}}></div>
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Meine Dienstleistungen</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Maßgeschneiderte digitale Lösungen, die Ihr Unternehmen auf die nächste Stufe bringen.
          </p>
        </motion.div>

        {/* Desktop layout with sidebar - visible on md and above */}
        <div className="hidden md:flex flex-col md:flex-row gap-6 min-h-[600px]">
          {/* Sidebar menu */}
          <div className="md:w-1/4 lg:w-1/5 space-y-2 border-r border-white/10 pr-4">
            {serviceCategories.map((category) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  activeCategory === category.title 
                    ? `bg-gradient-to-r ${category.color} text-white` 
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <div className={`flex-shrink-0 ${activeCategory === category.title ? 'text-white' : 'text-primary-500'}`}>
                  {category.icon}
                </div>
                <span className="font-medium">{category.title}</span>
              </motion.div>
            ))}
          </div>

          {/* Content area */}
          <div className="md:w-3/4 lg:w-4/5 overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeCategoryData && (
                <motion.div
                  key={activeCategoryData.title}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  variants={containerVariants}
                  className="h-full"
                >
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-6 h-full relative">
                    {/* Background gradient accent for the card */}
                    <div className={`absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l ${activeCategoryData.color} opacity-5 rounded-r-lg -z-10`}></div>
                    
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${activeCategoryData.color} text-white`}>
                        {activeCategoryData.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{activeCategoryData.title}</h3>
                        <p className="text-gray-400">{activeCategoryData.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {activeCategoryData.services.map((service, index) => (
                        <motion.div 
                          key={service.name} 
                          variants={itemVariants}
                          className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-primary-500/30 transition-all duration-300 group h-48 flex flex-col"
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`flex items-center justify-center w-8 h-8 bg-gradient-to-r ${activeCategoryData.color} text-white rounded-full flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary-500/20 transition-all duration-300`}>
                              {service.icon}
                            </span>
                            <h4 className="font-bold text-lg">{service.name}</h4>
                          </div>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <a 
                        href="#contact" 
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${activeCategoryData.color} text-white font-bold py-2 px-6 rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 group`}
                      >
                        Anfrage stellen
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile layout - visible only on small screens */}
        <div className="md:hidden space-y-6">
          {/* Service category buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            {serviceCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={`flex items-center gap-2 py-2 px-4 rounded-full border transition-all duration-200 ${
                  activeCategory === category.title 
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent` 
                    : 'border-white/10 text-gray-400'
                }`}
              >
                <span className="flex-shrink-0">{category.icon}</span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Mobile content display */}
          <AnimatePresence mode="wait">
            {activeCategoryData && (
              <motion.div
                key={activeCategoryData.title}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                variants={containerVariants}
              >
                <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-5 relative overflow-hidden">
                  {/* Background accent */}
                  <div className={`absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l ${activeCategoryData.color} opacity-5 -z-10`}></div>
                  
                  <div className="text-center mb-4 pb-3 border-b border-white/10">
                    <div className="flex justify-center mb-2">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${activeCategoryData.color} text-white inline-block`}>
                        {activeCategoryData.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{activeCategoryData.title}</h3>
                    <p className="text-gray-400 text-sm">{activeCategoryData.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {activeCategoryData.services.map((service, index) => (
                      <motion.div 
                        key={service.name} 
                        variants={itemVariants}
                        className="bg-white/5 p-4 rounded-lg border border-white/10 group h-40 flex flex-col"
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`flex items-center justify-center w-7 h-7 bg-gradient-to-r ${activeCategoryData.color} text-white rounded-full flex-shrink-0`}>
                            {service.icon}
                          </span>
                          <h4 className="font-bold text-sm">{service.name}</h4>
                        </div>
                        <p className="text-gray-400 text-xs">{service.description}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-5 text-center">
                    <a 
                      href="#contact" 
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${activeCategoryData.color} text-white font-bold py-2 px-5 rounded-full text-sm group`}
                    >
                      Anfrage stellen
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;