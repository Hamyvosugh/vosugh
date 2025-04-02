"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { 
  Globe, 
  Mail, 
  Bot, 
  MessageSquare, 
  Smartphone, 
  Edit3, 
  Camera, 
  Video, 
  FileText, 
  Zap, 
  Layers, 
  Layout, 
  ChevronRight,
  Users,
  Image,
  TrendingUp,
  Target,
  Clock,
  Palette,
  Feather,
  Award
} from 'lucide-react';


const ContentCreationPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformKey>('website');

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: custom * 0.1, 
        duration: 0.6, 
        ease: [0.23, 1, 0.32, 1]
      } 
    })
  };

  type PlatformKey = 'website' | 'socialmedia' | 'email' | 'bot' | 'messaging';
  
  const platforms = [
      { 
        id: 'website' as PlatformKey, 
        name: 'Website', 
        icon: <Globe className="w-6 h-6 text-blue-400" />,
        color: 'from-blue-500 to-blue-700',
        description: 'Ansprechende & SEO-optimierte Website-Inhalte'
      },
      { 
        id: 'socialmedia' as PlatformKey, 
        name: 'Social Media', 
        icon: <Users className="w-6 h-6 text-pink-400" />,
        color: 'from-pink-500 to-purple-600',
        description: 'Virale Posts, Stories und Reels für alle Plattformen'
      },
    { 
      id: 'email' as PlatformKey, 
      name: 'E-Mail', 
      icon: <Mail className="w-6 h-6 text-green-400" />,
      color: 'from-green-500 to-green-700',
      description: 'Konvertierungsstarke Newsletter & Kampagnen'
    },
    { 
      id: 'bot' as PlatformKey, 
      name: 'Chat-Bot', 
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      color: 'from-cyan-500 to-cyan-700',
      description: 'Interaktive Chatbot-Skripte & Automatisierungen'
    },
    { 
      id: 'messaging' as PlatformKey, 
      name: 'Messaging', 
      icon: <MessageSquare className="w-6 h-6 text-yellow-400" />,
      color: 'from-yellow-500 to-yellow-700',
      description: 'WhatsApp & Telegram Marketing Kampagnen'
    }
  ];

  const contentTypes = [
    {
      id: 'text',
      title: 'Text & Copy',
      icon: <Edit3 className="w-10 h-10 text-primary-400" />,
      description: 'Überzeugende Texte, die Ihre Zielgruppe ansprechen',
      examples: [
        'Website-Texte',
        'Social Media Posts',
        'Newsletter',
        'Produktbeschreibungen',
        'Bot-Skripte'
      ]
    },
    {
      id: 'images',
      title: 'Bilder & Grafiken',
      icon: <Image className="w-10 h-10 text-primary-400" />,
      description: 'Visuelle Inhalte, die Ihre Marke verstärken',
      examples: [
        'Social Media Grafiken',
        'Banner & Header',
        'Infografiken',
        'Produktfotos',
        'Memes & GIFs'
      ]
    },
    {
      id: 'video',
      title: 'Video & Animation',
      icon: <Video className="w-10 h-10 text-primary-400" />,
      description: 'Bewegte Inhalte für maximales Engagement',
      examples: [
        'Social Media Clips',
        'Produktvideos',
        'Erklärvideos',
        'Stories & Reels',
        'Animierte Grafiken'
      ]
    },
    {
      id: 'docs',
      title: 'Dokumente & Downloads',
      icon: <FileText className="w-10 h-10 text-primary-400" />,
      description: 'Wertvolle Ressourcen für Ihre Zielgruppe',
      examples: [
        'E-Books',
        'Checklisten',
        'Whitepaper',
        'Vorlagen',
        'Anleitungen'
      ]
    }
  ];

  const platformContent: Record<PlatformKey, {
    title: string;
    features: {
      icon: JSX.Element;
      title: string;
      desc: string;
    }[];
  }> = {
    'website': {
      title: 'Website Content',
      features: [
        { 
          icon: <Layout />,
          title: 'Landingpage Texte', 
          desc: 'Konvertierungsstarke Texte, die Besucher zu Kunden machen'
        },
        { 
          icon: <Feather />,
          title: 'Blog Artikel', 
          desc: 'SEO-optimierte Inhalte für mehr organischen Traffic'
        },
        { 
          icon: <FileText />,
          title: 'Produktbeschreibungen', 
          desc: 'Überzeugende Beschreibungen, die Verkäufe fördern'
        },
        { 
          icon: <Users />,
          title: 'About Us & Team Texte', 
          desc: 'Authentische Texte, die Vertrauen aufbauen'
        },
      ]
    },
    'socialmedia': {
      title: 'Social Media Content',
      features: [
        { 
          icon: <Image />,
          title: 'Feed Posts', 
          desc: 'Ansprechende Bilder mit packenden Captions'
        },
        { 
          icon: <Video />,
          title: 'Reels & Stories', 
          desc: 'Kurzvideos, die Ihre Follower begeistern'
        },
        { 
          icon: <Layers />,
          title: 'Content-Serien', 
          desc: 'Thematisch zusammenhängende Posts für Engagement'
        },
        { 
          icon: <MessageSquare />,
          title: 'Community Management', 
          desc: 'Interaktion mit Ihrer Community durch Kommentare & DMs'
        },
      ]
    },
    'email': {
      title: 'E-Mail Content',
      features: [
        { 
          icon: <Mail />,
          title: 'Newsletter', 
          desc: 'Regelmäßige Updates, die Ihre Abonnenten lieben werden'
        },
        { 
          icon: <Zap />,
          title: 'Kampagnen', 
          desc: 'Gezielte E-Mail-Sequenzen für maximale Konversion'
        },
        { 
          icon: <Award />,
          title: 'Welcome-Sequenzen', 
          desc: 'Onboarding-Mails für neue Abonnenten'
        },
        { 
          icon: <TrendingUp />,
          title: 'Verkaufs-E-Mails', 
          desc: 'Konvertierungsstarke E-Mails für direkte Verkäufe'
        },
      ]
    },
    'bot': {
      title: 'Chat-Bot Content',
      features: [
        { 
          icon: <MessageSquare />,
          title: 'Gesprächsflüsse', 
          desc: 'Natürliche Konversationsabläufe für Chatbots'
        },
        { 
          icon: <Target />,
          title: 'Zielgerichtete Antworten', 
          desc: 'Passende Antworten je nach Benutzeranfrage'
        },
        { 
          icon: <Users />,
          title: 'Persönlichkeit & Ton', 
          desc: 'Konsistente Bot-Persönlichkeit, die zu Ihrer Marke passt'
        },
        { 
          icon: <Zap />,
          title: 'Automatisierte Skripte', 
          desc: 'Clevere Automatisierung für effiziente Kundenkommunikation'
        },
      ]
    },
    'messaging': {
      title: 'Messaging Content',
      features: [
        { 
          icon: <Smartphone />,
          title: 'WhatsApp Kampagnen', 
          desc: 'Direkte Nachrichten mit hohen Öffnungsraten'
        },
        { 
          icon: <Clock />,
          title: 'Broadcast-Nachrichten', 
          desc: 'Zeitgesteuerte Updates für Ihre Abonnenten'
        },
        { 
          icon: <Image />,
          title: 'Multimedia-Inhalte', 
          desc: 'Bilder, Videos und Dokumente für mehr Engagement'
        },
        { 
          icon: <Users />,
          title: 'Gruppenmanagement', 
          desc: 'Effektive Kommunikation in Gruppen und Kanälen'
        },
      ]
    }
  };

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-primary-400" />,
      title: 'Zielgruppenansprache',
      description: 'Inhalte, die genau Ihre Wunschkunden ansprechen'
    },
    {
      icon: <Palette className="w-6 h-6 text-primary-400" />,
      title: 'Kreative Konzepte',
      description: 'Innovative Ideen, die sich von der Konkurrenz abheben'
    },
    {
      icon: <Award className="w-6 h-6 text-primary-400" />,
      title: 'Professionelle Qualität',
      description: 'Hochwertige Inhalte auf Agentur-Niveau'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary-400" />,
      title: 'Konversionsoptimiert',
      description: 'Content, der Besucher zu Kunden macht'
    }
  ];

  return (
    <div className="relative min-h-screen bg-dark pt-20">
      {/* Background Elements */}
       <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          custom={0}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Content Creation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kreative und überzeugende Inhalte für alle digitalen Kanäle, 
            die Ihre Zielgruppe begeistern und Ergebnisse liefern.
          </p>
        </motion.div>

        {/* Content Types Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl mx-auto relative mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.id}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-dark-800/40 backdrop-blur-sm rounded-xl border border-primary-700/20 p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  transition: { delay: 0.3 + (index * 0.1), duration: 0.6 } 
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary-900/40">
                    {type.icon}
                  </div>
                </div>
                <h3 className="font-bold mb-2 text-lg">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Platforms Section */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Plattformen</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Maßgeschneiderte Inhalte für alle digitalen Touchpoints
          </p>
        </motion.div>

        {/* Platform Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {platforms.map((platform) => (
            <motion.button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                selectedPlatform === platform.id 
                  ? `bg-gradient-to-r ${platform.color} text-white` 
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
              }`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              {platform.icon}
              <span>{platform.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Platform Content Display */}
        <motion.div
          key={selectedPlatform}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className={`bg-dark-800/50 backdrop-blur-lg border-white/5 overflow-hidden`}>
            <CardHeader>
              <CardTitle className="text-2xl">
                {platformContent[selectedPlatform].title}
              </CardTitle>
              <p className="text-gray-400">
                {platforms.find(p => p.id === selectedPlatform)?.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platformContent[selectedPlatform].features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 p-4 rounded-lg bg-dark-900/50 border border-white/5"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-primary-900/40">
                        {React.cloneElement(feature.icon, { className: "w-6 h-6 text-primary-400" })}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Content Showcase */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Content Beispiele</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Maßgeschneiderte Inhalte für verschiedene Plattformen und Ziele
          </p>
        </motion.div>

        {/* Content Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Example 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={1}
            className="col-span-1 aspect-square relative overflow-hidden rounded-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-900/20 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-500/20 w-fit mb-2">Website</span>
              <h3 className="text-lg font-bold mb-1">Landing Page Copy</h3>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Konvertierungsstarke Texte für maximale Leads und Verkäufe
              </p>
            </div>
          </motion.div>
          
          {/* Example 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={2}
            className="col-span-1 aspect-square relative overflow-hidden rounded-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-900/20 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-pink-500/20 w-fit mb-2">Social Media</span>
              <h3 className="text-lg font-bold mb-1">Instagram Carousel</h3>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Mehrteilige Posts, die Mehrwert liefern und zum Teilen anregen
              </p>
            </div>
          </motion.div>
          
          {/* Example 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={3}
            className="col-span-1 aspect-square relative overflow-hidden rounded-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-900/20 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/20 w-fit mb-2">E-Mail</span>
              <h3 className="text-lg font-bold mb-1">Newsletter Kampagne</h3>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ansprechende E-Mails mit hohen Öffnungs- und Klickraten
              </p>
            </div>
          </motion.div>
          
          {/* Example 4 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={4}
            className="col-span-1 aspect-square relative overflow-hidden rounded-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-900/20 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-500/20 w-fit mb-2">WhatsApp</span>
              <h3 className="text-lg font-bold mb-1">Messaging Kampagne</h3>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Direkte und persönliche Nachrichten mit hohem Engagement
              </p>
            </div>
          </motion.div>
          
          {/* Example 5 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={5}
            className="col-span-1 aspect-square relative overflow-hidden rounded-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-900/20 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-cyan-500/20 w-fit mb-2">Chat-Bot</span>
              <h3 className="text-lg font-bold mb-1">Interaktive Skripte</h3>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Natürliche Chatbots für Kundensupport und Lead-Generierung
              </p>
            </div>
          </motion.div>
          
          {/* Example 6 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={6}
            className="col-span-1 aspect-square relative overflow-hidden rounded-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-secondary-900/20 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary-500/20 w-fit mb-2">Video</span>
              <h3 className="text-lg font-bold mb-1">Erklärvideos</h3>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Professionelle Videos, die komplexe Themen einfach erklären
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ihre Vorteile</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Was meine Content-Creation-Services auszeichnet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 1}
              className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-white/5 p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary-900/40">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Steps - Minimalist Version */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Mein Content-Prozess</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Von der Konzeption bis zur Optimierung
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative">
            {/* Process steps */}
            {['Research', 'Konzeption', 'Erstellung', 'Review', 'Optimierung'].map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                custom={index + 1}
                className="flex flex-col items-center text-center z-10"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-1">{step}</h3>
              </motion.div>
            ))}
            
            {/* Connecting line */}
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 hidden md:block" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 container mx-auto px-6 py-16 mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden backdrop-blur-lg relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 to-secondary-900/70" />
          <div className="absolute inset-0 bg-dark-900/40" />
          
          {/* Content */}
          <div className="relative p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für überzeugende Inhalte, die Ergebnisse liefern?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Gemeinsam entwickeln wir eine maßgeschneiderte Content-Strategie für Ihre Marke.
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:opacity-90 transition-opacity"
            >
              Content-Beratung vereinbaren
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContentCreationPage;