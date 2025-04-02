// app/website-copy-content/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';


export default function WebsiteCopyContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('website');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants for elements
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    {
      title: "Website-Texte",
      description: "Überzeugende Homepage-Texte, die Ihre Marke perfekt repräsentieren und Besucher zu Kunden machen.",
      features: [
        "Homepage & Landingpages",
        "Über uns & Team-Seiten",
        "Service- & Produktbeschreibungen",
        "Call-to-Action Formulierungen",
        "Häufig gestellte Fragen (FAQ)"
      ],
      icon: "🖋️"
    },
    {
      title: "Blog-Inhalte",
      description: "Informative und ansprechende Artikel, die Ihr Fachwissen demonstrieren und organischen Traffic generieren.",
      features: [
        "SEO-optimierte Blog-Artikel",
        "Themenplanung & Content-Kalender",
        "Branchenspezifische Insights",
        "Thought Leadership Content",
        "How-To Guides & Tutorials"
      ],
      icon: "📝"
    },
    {
      title: "E-Commerce Content",
      description: "Verkaufsfördernde Produktbeschreibungen und Kategorie-Texte, die Ihre Conversion-Rate steigern.",
      features: [
        "Überzeugende Produktbeschreibungen",
        "Kategorie-Seiten Optimierung",
        "Vorteilsorientierte Texte",
        "Cross- und Upselling Content",
        "Storytelling für Produkte"
      ],
      icon: "🛒"
    },
    {
      title: "Content-Strategie",
      description: "Ganzheitliche Content-Strategie, die Ihre Geschäftsziele unterstützt und Ihre Zielgruppe begeistert.",
      features: [
        "Zielgruppenanalyse",
        "Keyword-Recherche",
        "Content-Audit & Gap-Analyse",
        "Content-Planung & Zeitplan",
        "Performance-Messung"
      ],
      icon: "📊"
    }
  ];

  const process = [
    {
      title: "Analyse & Briefing",
      description: "Umfassende Analyse Ihrer Marke, Zielgruppe und Mitbewerber. Wir definieren gemeinsam Ziele und Tonalität.",
      number: "01"
    },
    {
      title: "Konzeption & Recherche",
      description: "Entwicklung eines Content-Konzepts basierend auf Keyword-Recherche und Wettbewerbsanalyse.",
      number: "02"
    },
    {
      title: "Texterstellung & Optimierung",
      description: "Kreation überzeugender Texte, die sowohl Ihre Zielgruppe als auch Suchmaschinen ansprechen.",
      number: "03"
    },
    {
      title: "Feedback & Überarbeitung",
      description: "Präsentation der Texte mit Möglichkeit für Feedback und zielgerichtete Überarbeitungen.",
      number: "04"
    },
    {
      title: "Integration & Performance",
      description: "Unterstützung bei der Content-Integration und kontinuierliches Monitoring der Performance.",
      number: "05"
    }
  ];

  const testimonials = [
    {
      quote: "Die von Hamy erstellten Website-Texte haben unsere Conversion-Rate um 37% gesteigert. Seine Fähigkeit, unsere Markenidentität in Worte zu fassen, ist beeindruckend.",
      author: "Marketing Direktor, E-Commerce Unternehmen"
    },
    {
      quote: "Hamy hat nicht nur hervorragende Inhalte für unsere neue Website geliefert, sondern uns auch wertvolle Einblicke in die Content-Strategie gegeben, die wir langfristig nutzen können.",
      author: "Gründer, Tech-Startup"
    },
    {
      quote: "Die Blog-Artikel, die Hamy für uns erstellt hat, haben unseren organischen Traffic innerhalb von nur drei Monaten verdoppelt. Absolute Empfehlung!",
      author: "SEO-Manager, Mittelständisches Unternehmen"
    }
  ];

  const contentSamples = {
    website: [
      {
        title: "Homepage Headline",
        content: "Transformieren Sie Ihre digitale Präsenz mit maßgeschneiderten Website-Lösungen, die Ihre Marke zum Leben erwecken und Kunden begeistern."
      },
      {
        title: "Über Uns Intro",
        content: "Hinter jedem Pixel und jeder Zeile Code steht ein engagiertes Team mit einer gemeinsamen Vision: Digitale Erlebnisse zu schaffen, die nicht nur funktional, sondern auch inspirierend sind."
      },
      {
        title: "Service-Beschreibung",
        content: "Unsere Web-Development-Services vereinen technische Expertise mit kreativem Flair, um Ihnen eine maßgeschneiderte Online-Präsenz zu bieten, die sowohl ästhetisch ansprechend als auch leistungsstark ist."
      }
    ],
    blog: [
      {
        title: "Artikel-Headline",
        content: "10 bewährte Strategien, um Ihre E-Commerce Conversion-Rate im Jahr 2025 zu maximieren"
      },
      {
        title: "Einleitung Blog-Post",
        content: "In einer digitalen Landschaft, die sich ständig weiterentwickelt, stehen E-Commerce-Unternehmen vor der Herausforderung, nicht nur Traffic zu generieren, sondern diesen auch effektiv in Kunden zu verwandeln. In diesem Artikel teilen wir Erkenntnisse und Strategien, die selbst in einem gesättigten Markt zu messbaren Ergebnissen führen."
      },
      {
        title: "Fazit Blog-Post",
        content: "Die Optimierung Ihrer Conversion-Rate ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess des Testens, Lernens und Anpassens. Indem Sie diese Strategien implementieren und regelmäßig überprüfen, schaffen Sie eine solide Grundlage für langfristiges Wachstum und Erfolg im E-Commerce."
      }
    ],
    ecommerce: [
      {
        title: "Produktbeschreibung",
        content: "Unsere ergonomische Premium-Tastatur vereint elegantes Design mit höchstem Bedienkomfort. Die mechanischen Switches bieten ein präzises Tippgefühl, während die anpassbare RGB-Beleuchtung Ihren Arbeitsplatz in Ihren persönlichen Lieblingsfarben erstrahlen lässt. Mit einer Akkulaufzeit von bis zu 75 Stunden bleiben Sie produktiv – ohne Unterbrechungen."
      },
      {
        title: "Kategorie-Einleitung",
        content: "Entdecken Sie unsere Kollektion handgefertigter Ledertaschen, bei denen Tradition auf moderne Funktionalität trifft. Jedes Stück wird von Meisterhandwerkern mit über 30 Jahren Erfahrung gefertigt und verkörpert zeitlose Eleganz für den anspruchsvollen Alltag."
      },
      {
        title: "Call-to-Action",
        content: "Sichern Sie sich jetzt Ihre limitierte Edition und profitieren Sie von kostenlosem Expressversand. Nur solange der Vorrat reicht!"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-dark">
      <Navbar />


      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Website Copy & Content
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Überzeugende Website-Texte, die informieren, inspirieren und konvertieren. Angepasst an Ihre Zielgruppe und Markenidentität.
            </p>
          </motion.div>

          {/* Hero Cards */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            <motion.div variants={fadeIn} custom={1}>
              <Card className="border-white/10 bg-black/20 backdrop-blur-md">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3 text-center text-primary-400">👁️</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Aufmerksamkeitsstark</h3>
                  <p className="text-gray-300 text-center">Texte, die sofort die Aufmerksamkeit Ihrer Besucher fesseln und zum Weiterlesen einladen.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} custom={2}>
              <Card className="border-white/10 bg-black/20 backdrop-blur-md">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3 text-center text-primary-400">🎯</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Zielgruppenorientiert</h3>
                  <p className="text-gray-300 text-center">Maßgeschneiderte Inhalte, die genau die Bedürfnisse und Schmerzpunkte Ihrer Zielgruppe ansprechen.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} custom={3}>
              <Card className="border-white/10 bg-black/20 backdrop-blur-md">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3 text-center text-primary-400">📈</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Konversionsorientiert</h3>
                  <p className="text-gray-300 text-center">Strategisch optimierte Texte, die Besucher zu wertvollen Kunden und Leads konvertieren.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-12 relative bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Content-Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Maßgeschneiderte Content-Lösungen für alle Bereiche Ihrer digitalen Präsenz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <Card className="h-full border-white/10 bg-black/30 backdrop-blur-lg hover:border-primary-500/50 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="text-3xl mb-2">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">✓</span>
                          <span className="text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Examples Section */}
      <section className="py-16 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Content-Beispiele</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Einblicke in meine Arbeit und meinen Schreibstil
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md bg-black/30 p-1 backdrop-blur-md border border-white/10">
              <button
                onClick={() => setActiveTab('website')}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  activeTab === 'website'
                    ? 'bg-primary-600/80 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Website-Texte
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  activeTab === 'blog'
                    ? 'bg-primary-600/80 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Blog-Inhalte
              </button>
              <button
                onClick={() => setActiveTab('ecommerce')}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  activeTab === 'ecommerce'
                    ? 'bg-primary-600/80 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                E-Commerce
              </button>
            </div>
          </div>

          {/* Content Examples */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6 mb-16"
          >
            {contentSamples[activeTab as keyof typeof contentSamples].map((sample, index) => (
              <Card key={index} className="border-white/10 bg-black/30 backdrop-blur-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{sample.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 italic">"{sample.content}"</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 md:px-12 bg-black/30 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mein Content-Prozess</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ein strukturierter Ansatz für überzeugende und zielführende Inhalte
            </p>
          </motion.div>

          <div className="space-y-6 mb-16">
            {process.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <Card className="border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-2 bg-primary-500/10 flex items-center justify-center p-6">
                      <span className="text-3xl font-bold text-primary-400">{step.number}</span>
                    </div>
                    <div className="md:col-span-10 p-6">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kundenstimmen</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Was meine Kunden über meine Content-Services sagen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <Card className="h-full border-white/10 bg-black/20 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-4xl text-gray-500">"</div>
                    <p className="text-gray-200 italic mb-6">{testimonial.quote}</p>
                    <p className="text-primary-400 text-sm font-medium">{testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-black/0 to-black/40 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7 }}
            className="text-center p-8 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Bereit für überzeugende Inhalte?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Lassen Sie uns gemeinsam Content erstellen, der Ihre Zielgruppe begeistert und Ihre Geschäftsziele unterstützt.
            </p>
            <Link href="/kontakt" className="px-8 py-3 text-lg rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity inline-block">
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}