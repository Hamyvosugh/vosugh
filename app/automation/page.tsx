// app/automation/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Navbar from '@/components/Navbar';

import { 
  Zap, 
  Database, 
  FileText, 
  MessageSquare, 
  Mail, 
  Calendar, 
  Workflow, 
  CheckCircle, 
  AlertCircle, 
  BarChart3, 
  RefreshCw, 
  Bot,
  Code,
  GanttChart,
  ArrowRight
} from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Service card component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, benefits, color, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full bg-dark-800/40 backdrop-blur-sm border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg group">
        <CardHeader className="pb-4">
          <div className={`w-14 h-14 flex items-center justify-center rounded-lg mb-4 ${color} transition-transform duration-300 group-hover:scale-110`}>
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">{description}</p>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Process step component
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

// Testimonial component
interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay }}
      className="bg-dark-900/50 p-6 rounded-lg border border-white/5"
    >
      <div className="text-primary-400 mb-4">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11L8 13H11V21H3V13L7 7H10V11ZM20 11L18 13H21V21H13V13L17 7H20V11Z" fill="currentColor" />
        </svg>
      </div>
      <p className="italic text-gray-300 mb-4">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-400">{company}</p>
      </div>
    </motion.div>
  );
};

// Main Page Component
const AutomationPage = () => {
  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      {/* Background Elements */}

      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Automation Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Steigern Sie Effizienz und Produktivität mit maßgeschneiderten Automatisierungslösungen für Ihr Unternehmen
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center items-center gap-4 mb-12"
            >
              <a 
                href="#services" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-400 text-white font-medium hover:shadow-lg hover:shadow-primary-600/20 transition-all"
              >
                Entdecken Sie meine Services
              </a>
              <a 
                href="/kontakt" 
                className="px-6 py-3 rounded-lg bg-dark-700/50 border border-white/10 text-white font-medium hover:bg-dark-600/50 transition-all"
              >
                Kontakt
              </a>
            </motion.div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <motion.div 
              variants={fadeIn}
              className="bg-dark-800/40 backdrop-blur-sm p-6 rounded-lg border border-white/5 text-center"
            >
              <h3 className="text-4xl font-bold text-primary-400 mb-2">40%</h3>
              <p className="text-gray-300">Zeitersparnis durch Automatisierung</p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="bg-dark-800/40 backdrop-blur-sm p-6 rounded-lg border border-white/5 text-center"
            >
              <h3 className="text-4xl font-bold text-primary-400 mb-2">90%</h3>
              <p className="text-gray-300">Reduzierung manueller Fehler</p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="bg-dark-800/40 backdrop-blur-sm p-6 rounded-lg border border-white/5 text-center"
            >
              <h3 className="text-4xl font-bold text-primary-400 mb-2">3x</h3>
              <p className="text-gray-300">Steigerung der Produktivität</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Meine Automatisierungs-Services</h2>
            <p className="text-gray-300">
              Maßgeschneiderte Lösungen, die Ihre Arbeitsabläufe optimieren und manuelle Aufgaben eliminieren
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Content Management Automation"
              description="Automatisieren Sie die Erstellung, Veröffentlichung und Verwaltung von Inhalten auf Ihrer Website und Social-Media-Kanälen."
              icon={<FileText size={32} className="text-white" />}
              benefits={[
                "Automatisierter Content-Kalender",
                "Bulk-Upload und -Scheduling",
                "Dynamische Content-Aktualisierung",
                "Cross-Platform Publishing"
              ]}
              color="bg-primary-600"
              delay={0.1}
            />
            
            <ServiceCard
              title="Datenbank-Automatisierung"
              description="Optimieren Sie Ihre Datenbankprozesse durch automatische Datenerfassung, -aktualisierung und -analyse."
              icon={<Database size={32} className="text-white" />}
              benefits={[
                "Automatische Datenbereinigung",
                "Echtzeit-Datenaktualisierung",
                "Datenintegration zwischen Systemen",
                "Automatische Backups und Wiederherstellung"
              ]}
              color="bg-secondary-600"
              delay={0.2}
            />
            
            <ServiceCard
              title="Content Creation Automation"
              description="Nutzen Sie KI-basierte Tools zur automatischen Erstellung von Texten, Bildern und anderen Content-Formaten."
              icon={<Bot size={32} className="text-white" />}
              benefits={[
                "KI-generierte Textentwürfe",
                "Automatische Bildanpassung",
                "Datengesteuerte Content-Vorschläge",
                "Personalisierte Content-Streams"
              ]}
              color="bg-primary-600"
              delay={0.3}
            />
            
            <ServiceCard
              title="Workflow-Automatisierung"
              description="Optimieren Sie komplexe Geschäftsprozesse durch maßgeschneiderte Workflow-Automatisierung."
              icon={<Workflow size={32} className="text-white" />}
              benefits={[
                "Automatisierte Genehmigungs-Workflows",
                "Task-Management-Automatisierung",
                "Integration mit bestehenden Tools",
                "Echtzeit-Statusaktualisierungen"
              ]}
              color="bg-secondary-600"
              delay={0.4}
            />
            
            <ServiceCard
              title="E-Mail-Marketing-Automatisierung"
              description="Steigern Sie Ihre E-Mail-Kampagnen durch automatisierte Sequenzen, Segmentierung und Personalisierung."
              icon={<Mail size={32} className="text-white" />}
              benefits={[
                "Trigger-basierte E-Mail-Sequenzen",
                "Dynamische Inhaltsanpassung",
                "A/B-Testing-Automation",
                "Verhaltensbezogene Segmentierung"
              ]}
              color="bg-primary-600"
              delay={0.5}
            />
            
            <ServiceCard
              title="Analytics & Reporting Automation"
              description="Automatisieren Sie die Datenerfassung, -analyse und Berichterstellung für fundierte Geschäftsentscheidungen."
              icon={<BarChart3 size={32} className="text-white" />}
              benefits={[
                "Automatisierte Dashboards",
                "Benutzerdefinierte Report-Generierung",
                "Datengesteuerte Warnmeldungen",
                "KPI-Tracking und -Analyse"
              ]}
              color="bg-secondary-600"
              delay={0.6}
            />
          </div>
        </div>
      </section>
      
      {/* How it works */}
      <section className="py-20 relative z-10 bg-dark-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Wie funktioniert es?</h2>
            <p className="text-gray-300">
              Mein strukturierter Ansatz zur Entwicklung maßgeschneiderter Automatisierungslösungen
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-10 border-l border-primary-600/50 space-y-12">
              <ProcessStep 
                number={1} 
                title="Analyse & Bedarfsermittlung" 
                description="Ich analysiere Ihre aktuellen Prozesse und identifiziere Automatisierungspotenziale, die den größten Mehrwert bieten."
                delay={0.1}
              />
              <ProcessStep 
                number={2} 
                title="Strategieentwicklung" 
                description="Gemeinsam entwickeln wir eine maßgeschneiderte Automatisierungsstrategie, die genau auf Ihre Geschäftsziele abgestimmt ist."
                delay={0.2}
              />
              <ProcessStep 
                number={3} 
                title="Technische Umsetzung" 
                description="Ich implementiere die Automatisierungslösungen unter Verwendung der besten Tools und Technologien für Ihre spezifischen Anforderungen."
                delay={0.3}
              />
              <ProcessStep 
                number={4} 
                title="Integration & Testing" 
                description="Alle Automatisierungen werden nahtlos in Ihre bestehenden Systeme integriert und gründlich getestet, um reibungslose Abläufe zu gewährleisten."
                delay={0.4}
              />
              <ProcessStep 
                number={5} 
                title="Schulung & Support" 
                description="Ihr Team erhält umfassendes Training zur Nutzung der neuen Automatisierungslösungen sowie kontinuierlichen Support."
                delay={0.5}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools and Technologies */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Tools & Technologien</h2>
            <p className="text-gray-300">
              Ich arbeite mit modernsten Automatisierungstools, um optimale Ergebnisse zu erzielen
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { name: "Node.js", icon: <Code size={32} /> },
              { name: "Zapier", icon: <Zap size={32} /> },
              { name: "IFTTT", icon: <RefreshCw size={32} /> },
              { name: "Make (Integromat)", icon: <GanttChart size={32} /> },
              { name: "Airtable", icon: <Database size={32} /> },
              { name: "WordPress", icon: <FileText size={32} /> },
              { name: "Mailchimp", icon: <Mail size={32} /> },
              { name: "Google Scripts", icon: <Code size={32} /> }
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-dark-800/40 backdrop-blur-sm p-4 rounded-lg border border-white/5 flex flex-col items-center justify-center text-center hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="text-primary-400 mb-2">
                  {tool.icon}
                </div>
                <p className="font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary-900/40 to-secondary-900/40 backdrop-blur-md border border-white/5"
          >
            <div className="md:flex items-center justify-between gap-8">
              <div className="mb-8 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Bereit, Ihre Prozesse zu automatisieren?</h2>
                <p className="text-gray-300">
                  Lassen Sie uns gemeinsam Ihre Abläufe optimieren und die Effizienz Ihres Unternehmens steigern.
                </p>
              </div>
              <a 
                href="/kontakt" 
                className="flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-400 text-white font-medium hover:shadow-lg hover:shadow-primary-600/20 transition-all"
              >
                Projekt besprechen <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 relative z-10 bg-dark-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Kundenstimmen</h2>
            <p className="text-gray-300">
              Was meine Kunden über meine Automatisierungslösungen sagen
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Testimonial
              quote="Dank Hamys Automatisierungslösungen haben wir unseren Content-Publishing-Workflow komplett umgestaltet. Was früher Stunden dauerte, wird jetzt in Minuten erledigt!"
              author="Markus Schmidt"
              company="DigitalBrands GmbH"
              delay={0.1}
            />
            
            <Testimonial
              quote="Die E-Mail-Automatisierung hat unsere Konversionsrate um 35% gesteigert. Die Implementierung war reibungslos und der Support ist hervorragend."
              author="Julia Weber"
              company="E-Commerce Solutions"
              delay={0.2}
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-gray-300">
              Antworten auf die häufigsten Fragen zur Automatisierung
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Für welche Unternehmensgröße eignen sich Ihre Automatisierungslösungen?",
                answer: "Meine Automatisierungslösungen sind skalierbar und können an die Bedürfnisse von kleinen Startups bis hin zu mittelständischen Unternehmen angepasst werden. Jede Lösung wird individuell auf Ihre spezifischen Anforderungen zugeschnitten."
              },
              {
                question: "Wie lange dauert die Implementierung einer Automatisierungslösung?",
                answer: "Die Implementierungsdauer hängt von der Komplexität des Projekts ab. Einfache Automatisierungen können innerhalb von 1-2 Wochen umgesetzt werden, während komplexere Lösungen 4-8 Wochen in Anspruch nehmen können."
              },
              {
                question: "Welche Vorteile bietet die Automatisierung gegenüber manuellen Prozessen?",
                answer: "Automatisierung reduziert menschliche Fehler, spart Zeit und Ressourcen, gewährleistet Konsistenz in den Prozessen und ermöglicht es Ihren Mitarbeitern, sich auf strategisch wichtigere Aufgaben zu konzentrieren."
              },
              {
                question: "Können bestehende Systeme integriert werden?",
                answer: "Ja, ich lege großen Wert auf die nahtlose Integration mit Ihren bestehenden Systemen und Tools. Die meisten gängigen Plattformen und Anwendungen können problemlos in die Automatisierungslösungen eingebunden werden."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-dark-800/40 backdrop-blur-sm p-6 rounded-lg border border-white/5"
              >
                <h3 className="text-lg font-semibold mb-3 flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">
                    <AlertCircle size={18} />
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-300 ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Hamy Vosugh. Alle Rechte vorbehalten.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="/kontakt" className="text-gray-300 hover:text-primary-400 transition-colors">Kontakt</a>
              <a href="/datenschutz" className="text-gray-300 hover:text-primary-400 transition-colors">Datenschutz</a>
              <a href="/impressum" className="text-gray-300 hover:text-primary-400 transition-colors">Impressum</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AutomationPage;