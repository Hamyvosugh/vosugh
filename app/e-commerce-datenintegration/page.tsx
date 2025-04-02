// app/e-commerce-datenintegration/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function ECommerceDatenintegration() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
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

  const integrationSteps = [
    {
      title: "Datenquellen Analyse",
      description: "Identifizierung aller relevanten Datenquellen und deren Strukturen innerhalb Ihres E-Commerce-Ökosystems.",
      icon: "📊"
    },
    {
      title: "Datenmodellierung",
      description: "Entwicklung eines einheitlichen Datenmodells, das alle Systeme effizient miteinander verbindet.",
      icon: "🔄"
    },
    {
      title: "API-Integration",
      description: "Implementierung robuster API-Verbindungen zwischen Ihren E-Commerce-Plattformen und Drittanbietersystemen.",
      icon: "🔌"
    },
    {
      title: "Automatisierte Prozesse",
      description: "Einrichtung automatisierter Workflows für Datensynchronisation und Bestandsmanagement.",
      icon: "⚙️"
    },
    {
      title: "Datenvisualisierung",
      description: "Erstellung aussagekräftiger Dashboards zur Visualisierung wichtiger Geschäftskennzahlen.",
      icon: "📈"
    }
  ];

  const benefits = [
    {
      title: "Effizienzsteigerung",
      description: "Automatisierte Datenflüsse minimieren manuelle Eingaben und reduzieren Fehlerquoten.",
    },
    {
      title: "Echtzeitdaten",
      description: "Synchronisierte Daten über alle Kanäle hinweg sorgen für aktuelle Informationen zu jedem Zeitpunkt.",
    },
    {
      title: "Skalierbarkeit",
      description: "Flexible Architekturen, die mit Ihrem Unternehmen wachsen und sich an verändernde Anforderungen anpassen.",
    },
    {
      title: "Wettbewerbsvorteil",
      description: "Fundierte Entscheidungen auf Basis integrierter Daten verschaffen Ihnen einen signifikanten Marktvorteil.",
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              E-Commerce Datenintegration
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Verknüpfen Sie Ihre Systeme nahtlos für maximale Effizienz und datengesteuerte Entscheidungen im E-Commerce.
            </p>
          </motion.div>

          {/* Integration Concept Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-20"
          >
            <Card className="p-6 border-white/10 bg-black/30 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
                {/* Left Column - Source Systems */}
                <div className="p-6 rounded-lg border border-white/10 bg-black/40">
                  <h3 className="text-xl font-semibold mb-4 text-primary-400">Quellsysteme</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                      <span>E-Commerce Plattformen</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                      <span>CRM-Systeme</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                      <span>ERP-Lösungen</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                      <span>Marketing-Tools</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                      <span>Analytics-Plattformen</span>
                    </li>
                  </ul>
                </div>

                {/* Middle Column - Integration Layer */}
                <div className="p-6 rounded-lg border border-secondary-500/30 bg-black/40 glow-secondary">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-400">Integrationsschicht</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-3 border border-white/10 rounded-md bg-black/20">
                      <p className="text-sm font-mono">API-Management</p>
                    </div>
                    <div className="p-3 border border-white/10 rounded-md bg-black/20">
                      <p className="text-sm font-mono">Datenmodellierung</p>
                    </div>
                    <div className="p-3 border border-white/10 rounded-md bg-black/20">
                      <p className="text-sm font-mono">ETL-Prozesse</p>
                    </div>
                    <div className="p-3 border border-white/10 rounded-md bg-black/20">
                      <p className="text-sm font-mono">Workflow-Automation</p>
                    </div>
                    <div className="p-3 border border-white/10 rounded-md bg-black/20">
                      <p className="text-sm font-mono">Echtzeit-Synchronisation</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Target Systems/Benefits */}
                <div className="p-6 rounded-lg border border-white/10 bg-black/40">
                  <h3 className="text-xl font-semibold mb-4 text-primary-400">Ergebnisse</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                      <span>Zentrale Datenverwaltung</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                      <span>Business Intelligence</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                      <span>Automatisierte Prozesse</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                      <span>Konsistente Kundendaten</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                      <span>Optimierte Entscheidungsfindung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Integration Process Section */}
      <section className="py-16 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mein Integrationsprozess</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ein strukturierter Ansatz zur nahtlosen Verknüpfung Ihrer E-Commerce-Daten und -Systeme
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                className="h-full"
              >
                <Card className="h-full border-white/10 bg-black/30 backdrop-blur-lg hover:border-primary-500/50 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="text-3xl mb-2">{step.icon}</div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 bg-black/30 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vorteile der Datenintegration</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Wie eine durchdachte E-Commerce-Datenintegration Ihr Unternehmen transformieren kann
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <Card className="border-white/10 bg-black/20 backdrop-blur-sm hover:border-secondary-500/50 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Eingesetzte Technologien</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Moderne Tools und Frameworks für leistungsstarke E-Commerce-Datenintegrationen
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {['RESTful APIs', 'GraphQL', 'Webhook-Integration', 'Node.js', 'ETL-Tools', 'SQL/NoSQL', 'JSON/XML', 'Microservices'].map((tech, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                className="text-center"
              >
                <div className="p-4 rounded-lg border border-white/10 bg-black/20 hover:border-primary-400/50 transition-all duration-300">
                  <p className="font-mono text-primary-400">{tech}</p>
                </div>
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
              Bereit für eine nahtlose Datenintegration?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Lassen Sie uns gemeinsam Ihre E-Commerce-Systeme optimieren und die volle Kraft Ihrer Daten nutzen.
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