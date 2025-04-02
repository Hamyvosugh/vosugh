"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Youtube, 
  TrendingUp, 
  BarChart, 
  MessageCircle, 
  Image, 
  Calendar, 
  Users, 
  Target, 
  Lightbulb, 
  CheckCircle,
  Share2
} from 'lucide-react';


const SocialMediaPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

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

  const platforms = [
    { 
      id: 'instagram', 
      name: 'Instagram', 
      icon: <Instagram className="w-6 h-6 text-pink-400" />,
      color: 'from-pink-500 to-purple-600',
      description: 'Visuelle Storytelling und Engagement durch hochwertige Bilder und Videos'
    },
    { 
      id: 'facebook', 
      name: 'Facebook', 
      icon: <Facebook className="w-6 h-6 text-blue-500" />,
      color: 'from-blue-500 to-blue-700',
      description: 'Gemeinschaftsaufbau und Markenbewusstsein für verschiedene Zielgruppen'
    },
    { 
      id: 'linkedin', 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-600 to-blue-800',
      description: 'B2B-Engagement und professionelle Netzwerkerweiterung'
    },
    { 
      id: 'twitter', 
      name: 'Twitter', 
      icon: <Twitter className="w-6 h-6 text-blue-400" />,
      color: 'from-blue-400 to-blue-500',
      description: 'Aktuelle Updates und schnelles Engagement mit Ihrer Community'
    },
    { 
      id: 'youtube', 
      name: 'YouTube', 
      icon: <Youtube className="w-6 h-6 text-red-600" />,
      color: 'from-red-500 to-red-700',
      description: 'Langform-Videoinhalte mit hohem Mehrwert für Ihr Publikum'
    }
  ];

  const services = [
    {
      id: 'content-creation',
      title: 'Content Erstellung',
      icon: <Image className="w-10 h-10 text-primary-400" />,
      description: 'Maßgeschneiderte Inhalte für jede Plattform, angepasst an Ihre Zielgruppe',
      features: [
        'Hochwertige Grafiken & Bilder',
        'Ansprechende Video-Inhalte',
        'SEO-optimierte Texte',
        'Story & Reels Konzeption'
      ]
    },
    {
      id: 'strategy',
      title: 'Strategie & Planung',
      icon: <Target className="w-10 h-10 text-primary-400" />,
      description: 'Datengestützte Strategien, die Ihre Geschäftsziele unterstützen',
      features: [
        'Content-Kalender Erstellung',
        'Zielgruppenanalyse',
        'Wettbewerbsanalyse',
        'Brand Voice Entwicklung'
      ]
    },
    {
      id: 'community',
      title: 'Community Management',
      icon: <MessageCircle className="w-10 h-10 text-primary-400" />,
      description: 'Aktiver Aufbau und Pflege Ihrer Online-Community',
      features: [
        'Kommentar-Management',
        'Direktnachrichten Betreuung',
        'Schnelle Reaktionszeiten',
        'Krisenkommunikation'
      ]
    },
    {
      id: 'analytics',
      title: 'Analyse & Optimierung',
      icon: <BarChart className="w-10 h-10 text-primary-400" />,
      description: 'Kontinuierliche Leistungsüberwachung für maximale Ergebnisse',
      features: [
        'Detaillierte Berichte',
        'Performance-Analyse',
        'Trendbeobachtung',
        'ROI-Berechnung'
      ]
    }
  ];

  const businessTypes = [
    { 
      name: 'E-Commerce', 
      description: 'Produktpräsentation, Shopping-Features, Influencer-Kooperationen',
      icon: <Share2 className="w-6 h-6 text-primary-400" />
    },
    { 
      name: 'B2B-Unternehmen', 
      description: 'Thought Leadership, Industry News, Fachliche Expertise',
      icon: <Users className="w-6 h-6 text-primary-400" />
    },
    { 
      name: 'Lokale Geschäfte', 
      description: 'Community-Building, lokale Events, standortbezogene Angebote',
      icon: <Target className="w-6 h-6 text-primary-400" />
    },
    { 
      name: 'Kreative & Freelancer', 
      description: 'Portfolio-Präsentation, Behind-the-Scenes, Kreative Prozesse',
      icon: <Lightbulb className="w-6 h-6 text-primary-400" />
    }
  ];

  const processSteps = [
    { 
      number: '01', 
      title: 'Analyse', 
      description: 'Ihre Ziele, Zielgruppe und aktuelle Präsenz verstehen'
    },
    { 
      number: '02', 
      title: 'Strategie', 
      description: 'Maßgeschneiderter Plan für jede Plattform und Content-Typ'
    },
    { 
      number: '03', 
      title: 'Produktion', 
      description: 'Hochwertige Inhalte erstellen, die Ihre Marke repräsentieren'
    },
    { 
      number: '04', 
      title: 'Management', 
      description: 'Veröffentlichung, Engagement und Community-Aufbau'
    },
    { 
      number: '05', 
      title: 'Analyse', 
      description: 'Datenbasierte Optimierung für kontinuierliche Verbesserung'
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
              Social Media Management
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professionelle Content-Erstellung und Strategien für verschiedene Plattformen, 
            die Ihre Marke stärken und echte Ergebnisse liefern.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <motion.div
                key={platform.id}
                whileHover={{ y: -5 }}
                className="flex items-center gap-2 p-2"
              >
                {platform.icon}
                <span className="text-gray-300">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Graphic - Abstract representation of social media */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl mx-auto relative h-64 mb-20"
        >
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute w-20 h-20 bg-primary-500/20 rounded-full blur-xl top-1/3 left-1/4 animate-pulse" />
            <div className="absolute w-32 h-32 bg-secondary-500/20 rounded-full blur-xl top-1/2 right-1/3 animate-pulse-slow" />
            <div className="absolute w-24 h-24 bg-blue-500/20 rounded-full blur-xl bottom-1/4 right-1/4 animate-float" />
          </div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 250">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M150,125 C250,50 550,200 650,125"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: 0.8 }}
              d="M400,50 C350,100 450,150 400,200"
              stroke="url(#lineGradient2)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4642eb" />
                <stop offset="100%" stopColor="#9e35ea" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9e35ea" />
                <stop offset="100%" stopColor="#4642eb" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Platform Icons */}
          {platforms.map((platform, index) => {
            const positions = [
              { x: '10%', y: '50%' },
              { x: '30%', y: '30%' },
              { x: '50%', y: '70%' },
              { x: '70%', y: '30%' },
              { x: '90%', y: '50%' }
            ];
            
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + index * 0.2,
                  type: "spring"
                }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ 
                  left: positions[index].x, 
                  top: positions[index].y 
                }}
              >
                <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${platform.color} p-3 shadow-lg`}>
                  {React.cloneElement(platform.icon, { className: "w-8 h-8 text-white" })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Meine Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Von der Content-Erstellung bis zur Analyse - Alles was Ihre Social Media Präsenz braucht
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 1}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card className="h-full bg-dark-800/50 backdrop-blur-md border-primary-700/20 hover:border-primary-600/40 transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-primary-900/40 mr-4">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platforms Detailed */}
      <section className="relative z-10 container mx-auto px-6 py-16 overflow-hidden">
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
            Maßgeschneiderte Strategien für die führenden Social-Media-Kanäle
          </p>
        </motion.div>

        <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory space-x-6 px-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 1}
              className="min-w-[300px] w-80 snap-center"
            >
              <div className={`rounded-xl p-6 h-full bg-gradient-to-br ${platform.color}/10 backdrop-blur-sm border border-white/5 flex flex-col`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${platform.color} mr-4`}>
                    {React.cloneElement(platform.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h3 className="text-xl font-bold">{platform.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 flex-grow">
                  {platform.description}
                </p>
                
                <div className="mt-auto">
                  <div className="text-sm text-gray-400 mb-2">Ideale Content-Typen:</div>
                  <div className="flex flex-wrap gap-2">
                    {platform.id === 'instagram' && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Stories</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Reels</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Carousel</span>
                      </>
                    )}
                    {platform.id === 'facebook' && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Videos</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Events</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Gruppen</span>
                      </>
                    )}
                    {platform.id === 'linkedin' && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Artikel</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Dokumente</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Updates</span>
                      </>
                    )}
                    {platform.id === 'twitter' && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Tweets</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Threads</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Spaces</span>
                      </>
                    )}
                    {platform.id === 'youtube' && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Long-form</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Shorts</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Lives</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Types */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Branchen-Expertise</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center">
            Maßgeschneiderte Strategien für unterschiedliche Geschäftsmodelle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {businessTypes.map((business, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 1}
            >
              <Card className="bg-dark-800/50 backdrop-blur-md border-primary-700/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary-900/40">
                    {business.icon}
                  </div>
                  <CardTitle>{business.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{business.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Mein Prozess</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Von der ersten Analyse bis zur kontinuierlichen Optimierung
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary-600 to-secondary-600" />
          
          {/* Process steps */}
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 1}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Step number circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-dark flex items-center justify-center border-2 border-primary-500 z-10">
                <span className="text-primary-500 font-semibold text-sm">{step.number}</span>
              </div>
              
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                <h3 className="text-xl font-bold text-primary-400 mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              
              {/* Spacer for other side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats & Results */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Messbare Ergebnisse</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Social Media Management, das zu konkreten Geschäftsergebnissen führt
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <TrendingUp />, metric: '+127%', label: 'Engagement-Rate' },
            { icon: <Users />, metric: '+68%', label: 'Follower-Wachstum' },
            { icon: <MessageCircle />, metric: '+215%', label: 'Mehr Kommentare' },
            { icon: <BarChart />, metric: '+43%', label: 'Conversion-Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 1}
              className="bg-dark-800/50 backdrop-blur-md rounded-xl border border-primary-700/20 p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary-900/50">
                  {React.cloneElement(stat.icon, { className: "w-6 h-6 text-primary-400" })}
                </div>
              </div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-1">
                {stat.metric}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={0}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden backdrop-blur-md relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 to-secondary-900/70" />
          <div className="absolute inset-0 bg-dark-900/40" />
          
          {/* Content */}
          <div className="relative p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit, Ihre Social Media auf das nächste Level zu bringen?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam eine Strategie entwickeln, die zu Ihrem Unternehmen passt 
              und echte Ergebnisse liefert.
            </p>
            <a 
              href="/kontakt" 
              className="inline-block px-8 py-4 text-lg font-medium rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:opacity-90 transition-opacity"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SocialMediaPage;