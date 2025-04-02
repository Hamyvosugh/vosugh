// app/webdesign/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Navbar from '@/components/Navbar';
import { 
  Code, 
  Store, 
  FileText, 
  BookOpen, 
  Monitor, 
  Database, 
  Smartphone, 
  Rocket,
  Zap,
  Layers,
  Check,
  ArrowRight
} from 'lucide-react';

const WebDesignPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Website type data
  const websiteTypes = [
    {
      title: "E-Commerce",
      description: "Verkaufsstarke Online-Shops mit nahtlosen Zahlungslösungen",
      icon: <Store size={32} className="text-primary-400" />,
      features: ["Produktkataloge", "Sichere Zahlungen", "Kundenkonto", "Inventarverwaltung"]
    },
    {
      title: "Business Sites",
      description: "Professionelle Webauftritte für Unternehmen jeder Größe",
      icon: <Monitor size={32} className="text-primary-400" />,
      features: ["Markenidentität", "Responsives Design", "SEO-optimiert", "Kontaktformulare"]
    },
    {
      title: "Blogs",
      description: "Kreative Content-Plattformen mit optimaler Leseerfahrung",
      icon: <BookOpen size={32} className="text-primary-400" />,
      features: ["Kategorien", "Kommentare", "Social Sharing", "Medieneinbettung"]
    },
    {
      title: "Portfolios",
      description: "Ästhetische Präsentationen Ihrer Arbeiten und Fähigkeiten",
      icon: <Layers size={32} className="text-primary-400" />,
      features: ["Projektgalerien", "Filteroptionen", "Animationen", "Kontaktmöglichkeiten"]
    },
    {
      title: "Informationsseiten",
      description: "Klar strukturierte Websites zur optimalen Informationsvermittlung",
      icon: <FileText size={32} className="text-primary-400" />,
      features: ["Klare Navigation", "Suchfunktion", "FAQ-Bereiche", "Downloadcenter"]
    },
    {
      title: "Web Apps",
      description: "Interaktive Anwendungen mit optimaler Benutzererfahrung",
      icon: <Zap size={32} className="text-primary-400" />,
      features: ["Benutzerkonten", "Dashboards", "Datenvisualisierung", "Echtzeit-Updates"]
    }
  ];

  // Tech stack data
  const techStacks = [
    {
      title: "Next.js",
      description: "Moderne React-Frameworks mit optimaler Performance",
      icon: <Rocket size={32} className="text-secondary-400" />,
      features: ["Server Components", "App Router", "API Routes", "Optimierte Builds"]
    },
    {
      title: "Node.js",
      description: "Leistungsstarke Backend-Lösungen mit JavaScript",
      icon: <Database size={32} className="text-secondary-400" />,
      features: ["Express.js", "API-Entwicklung", "Datenbank-Integration", "Microservices"]
    },
    {
      title: "WordPress",
      description: "Anpassbare CMS-Lösungen für einfache Content-Verwaltung",
      icon: <FileText size={32} className="text-secondary-400" />,
      features: ["Themes", "Plugins", "Gutenberg", "Mehrsprachigkeit"]
    },
    {
      title: "Responsive Design",
      description: "Optimale Darstellung auf allen Geräten",
      icon: <Smartphone size={32} className="text-secondary-400" />,
      features: ["Mobile First", "Adaptive Layouts", "Touch-Optimierung", "Performanceoptimierung"]
    },
    {
      title: "Modern JavaScript",
      description: "Fortschrittliche Web-Entwicklung mit ES6+ und TypeScript",
      icon: <Code size={32} className="text-secondary-400" />,
      features: ["TypeScript", "React", "Vue.js", "State Management"]
    },
    {
      title: "Fullstack Lösungen",
      description: "Umfassende Entwicklung von Frontend bis Backend",
      icon: <Layers size={32} className="text-secondary-400" />,
      features: ["MERN Stack", "JAMstack", "Headless CMS", "Cloud-Deployment"]
    }
  ];

  return (
    <div className="min-h-screen bg-dark relative">
      {/* Background Elements */}

      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Web Design & Entwicklung
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Moderne, responsive Webseiten und Applikationen mit den neuesten Technologien und ansprechendem Design für optimale Benutzererfahrung.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#kontakt" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:opacity-90 transition-opacity"
              >
                Anfrage stellen
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 rounded-lg bg-dark-800 border border-primary-600/30 text-white hover:bg-dark-700 transition-colors"
              >
                Services entdecken
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating code snippets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute -z-10 left-0 top-1/4 transform -translate-x-1/2 opacity-30 blur-sm"
        >
          <pre className="text-primary-400 text-xs md:text-sm">
            {`
const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}
            `}
          </pre>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute -z-10 right-0 bottom-1/4 transform translate-x-1/2 opacity-30 blur-sm"
        >
          <pre className="text-secondary-400 text-xs md:text-sm">
            {`
.container {
  display: grid;
  grid-template-columns: 
    repeat(auto-fit, 
    minmax(250px, 1fr));
  gap: 2rem;
}
            `}
          </pre>
        </motion.div>
      </section>
      
      {/* Website Types Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Website-Typen
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Spezialisiert auf verschiedene Website-Kategorien, jeweils mit optimierten Funktionen und Design.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {websiteTypes.map((type, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-dark-800/60 backdrop-blur-sm border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300 hover:shadow-glow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-900/50 p-3 rounded-lg">
                        {type.icon}
                      </div>
                      <CardTitle>{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <Check size={16} className="text-primary-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-20 relative bg-gradient-to-b from-dark to-dark-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-600">
                Technologien
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Moderne Frameworks und Technologien für leistungsstarke, zukunftssichere Webprojekte.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {techStacks.map((tech, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-dark-800/60 backdrop-blur-sm border border-secondary-600/20 hover:border-secondary-600/40 transition-all duration-300 hover:shadow-glow-secondary">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary-900/50 p-3 rounded-lg">
                        {tech.icon}
                      </div>
                      <CardTitle>{tech.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <Check size={16} className="text-secondary-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Mein Arbeitsablauf
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Transparenter Prozess von der Konzeption bis zur Umsetzung Ihres Webprojekts.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Process steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 transform -translate-x-1/2"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-16 md:space-y-24 relative"
            >
              {/* Step 1 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-16 text-right">
                    <h3 className="text-2xl font-bold text-primary-400 mb-3">1. Analyse & Konzeption</h3>
                    <p className="text-gray-300">Wir definieren gemeinsam Ihre Anforderungen, Zielgruppe und Projektziele, um ein optimales Konzept zu erstellen.</p>
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="p-5 bg-dark-800/60 backdrop-blur-sm rounded-lg border border-primary-600/20">
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-300">
                          <Check size={16} className="text-primary-400 mr-2 flex-shrink-0" />
                          <span>Anforderungsanalyse</span>
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Check size={16} className="text-primary-400 mr-2 flex-shrink-0" />
                          <span>Zielgruppendefinition</span>
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Check size={16} className="text-primary-400 mr-2 flex-shrink-0" />
                          <span>Wettbewerbsanalyse</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-16 text-right">
                    <div className="p-5 bg-dark-800/60 backdrop-blur-sm rounded-lg border border-primary-600/20">
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-300 justify-end">
                          <span>Wireframes & Mockups</span>
                          <Check size={16} className="text-primary-400 ml-2 flex-shrink-0" />
                        </li>
                        <li className="flex items-center text-gray-300 justify-end">
                          <span>UI/UX Design</span>
                          <Check size={16} className="text-primary-400 ml-2 flex-shrink-0" />
                        </li>
                        <li className="flex items-center text-gray-300 justify-end">
                          <span>Design-Abnahme</span>
                          <Check size={16} className="text-primary-400 ml-2 flex-shrink-0" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary-400 flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <h3 className="text-2xl font-bold text-primary-400 mb-3">2. Design & Prototyping</h3>
                    <p className="text-gray-300">Ich entwerfe das visuelle Konzept Ihrer Website mit modernem, benutzerfreundlichem Design.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-16 text-right">
                    <h3 className="text-2xl font-bold text-secondary-400 mb-3">3. Entwicklung</h3>
                    <p className="text-gray-300">Die technische Umsetzung erfolgt mit modernsten Frameworks und Technologien für optimale Performance.</p>
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="p-5 bg-dark-800/60 backdrop-blur-sm rounded-lg border border-secondary-600/20">
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-300">
                          <Check size={16} className="text-secondary-400 mr-2 flex-shrink-0" />
                          <span>Frontend-Entwicklung</span>
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Check size={16} className="text-secondary-400 mr-2 flex-shrink-0" />
                          <span>Backend-Integration</span>
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Check size={16} className="text-secondary-400 mr-2 flex-shrink-0" />
                          <span>Responsive Testing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-16 text-right">
                    <div className="p-5 bg-dark-800/60 backdrop-blur-sm rounded-lg border border-secondary-600/20">
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-300 justify-end">
                          <span>Qualitätssicherung</span>
                          <Check size={16} className="text-secondary-400 ml-2 flex-shrink-0" />
                        </li>
                        <li className="flex items-center text-gray-300 justify-end">
                          <span>Browser-Testing</span>
                          <Check size={16} className="text-secondary-400 ml-2 flex-shrink-0" />
                        </li>
                        <li className="flex items-center text-gray-300 justify-end">
                          <span>Deployment</span>
                          <Check size={16} className="text-secondary-400 ml-2 flex-shrink-0" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-secondary-400 flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <h3 className="text-2xl font-bold text-secondary-400 mb-3">4. Launch & Support</h3>
                    <p className="text-gray-300">Nach umfangreichen Tests erfolgt der Launch mit anschließendem Support und Wartung.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="kontakt" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-primary-900/30 to-secondary-900/30 p-10 rounded-2xl backdrop-blur-sm border border-white/10"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                  Bereit für Ihr Webprojekt?
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-400 mb-3">Kontaktieren Sie mich</h3>
                <div className="space-y-3">
                  <p className="text-gray-300 flex items-center">
                    <span className="font-medium mr-2">Email:</span>
                    <a href="mailto:hi@hamyvosugh.com" className="hover:text-primary-400 transition-colors">
                      hi@hamyvosugh.com
                    </a>
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <span className="font-medium mr-2">Telefon:</span>
                    <a href="tel:+4917647666407" className="hover:text-primary-400 transition-colors">
                      +49 176 47 666 407
                    </a>
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <span className="font-medium mr-2">Standort:</span>
                    Main-Kinzig-Kreis
                  </p>
                </div>
              </div>
              
              <div>
                <a 
                  href="/kontakt" 
                  className="flex items-center justify-center w-full px-6 py-4 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:opacity-90 transition-opacity"
                >
                  <span className="mr-2">Projekt anfragen</span>
                  <ArrowRight size={18} />
                </a>
                <p className="mt-4 text-sm text-center text-gray-400">
                  Individuelle Beratung und maßgeschneiderte Lösungen für Ihr Webprojekt.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;