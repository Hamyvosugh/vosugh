'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

const EmailShowcasePage = () => {
  // Email showcase data
  const emailTypes = [
    {
      id: 'sample1',
      title: 'Newsletter',
      description: 'Professionell gestaltete Newsletter zum Teilen von Updates, Nachrichten und Angeboten mit Ihrer Zielgruppe.',
      features: [
        'Responsive Design für alle Geräte',
        'Modulares Layout für einfache Anpassungen',
        'Optimiert für hohe Öffnungs- und Klickraten',
        'Kompatibel mit allen gängigen E-Mail-Clients'
      ],
      bgColor: 'bg-primary-900/30',
      textColor: 'text-primary-300',
      buttonColor: 'from-primary-600 to-primary-500',
      image: '/assets/images/emails/emailcover.webp',
      url: '/email-sample'
    },
    {
      id: 'sample2',
      title: 'Willkommens-Email',
      description: 'Machen Sie einen großartigen ersten Eindruck mit einer Willkommens-E-Mail, die neue Abonnenten begeistert.',
      features: [
        'Personalisierte Ansprache und Inhalte',
        'Klare Vorteile und nächste Schritte',
        'Markenspezifisches Design und Tonalität',
        'Call-to-Action für sofortiges Engagement'
      ],
      bgColor: 'bg-secondary-900/30',
      textColor: 'text-secondary-300',
      buttonColor: 'from-secondary-600 to-secondary-500',
      image: '/email-sample/welcome-cover.webp',
      url: '/emails/welcome'
    },
    {
      id: 'sample3',
      title: 'Werbe-Email',
      description: 'Effektive Werbe-E-Mails, die Ihre Angebote hervorheben und zu konkreten Handlungen anregen.',
      features: [
        'Aufmerksamkeitsstarkes Design und Headline',
        'Klare und überzeugende Werbeaussagen',
        'Prominent platzierte Call-to-Action-Buttons',
        'Optimierte Produkt- oder Dienstleistungspräsentation'
      ],
      bgColor: 'bg-blue-900/30',
      textColor: 'text-blue-300',
      buttonColor: 'from-blue-600 to-blue-500',
      image: '/email-sample/Screenshot 2025-03-30 at 15.51.51.png',
      url: '/emails/werbe'
    },
    {
      id: 'sample4',
      title: 'Transaktions-Email',
      description: 'Zuverlässige Transaktions-E-Mails, die wichtige Informationen und Bestätigungen bereitstellen.',
      features: [
        'Klare und präzise Informationsdarstellung',
        'Beruhigende und vertrauensbildende Elemente',
        'Hohe Lieferbarkeit durch optimierte Infrastruktur',
        'Möglichkeiten für Cross-Selling und Up-Selling'
      ],
      bgColor: 'bg-green-900/30',
      textColor: 'text-green-300',
      buttonColor: 'from-green-600 to-green-500',
      image: '/email-sample/Screenshot 2025-03-30 at 15.50.54.png',
      url: '/emails/transaktion'
    },
    {
      id: 'sample5',
      title: 'Warenkorbabbrecher-Email',
      description: 'Wiedergewinnungs-E-Mails, die verlassene Warenkörbe in abgeschlossene Käufe umwandeln.',
      features: [
        'Erinnerung an ausgewählte Produkte',
        'Anreize für den Abschluss des Kaufs',
        'Sense of Urgency-Elemente',
        'Einfacher Weg zurück zum Warenkorb'
      ],
      bgColor: 'bg-purple-900/30',
      textColor: 'text-purple-300',
      buttonColor: 'from-purple-600 to-purple-500',
      image: '/email-sample/warenkorb.png',
      url: '/emails/Warenkorbabbrecher'
    }
  ];

  return (
    
    <div className="min-h-screen bg-dark">
        <Navbar></Navbar>
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 noise" />
      </div>

      {/* Main content */}
      <div>
        {/* Hero section */}
        <section className="relative py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-20 pb-6 gradient-text">
                E-Mail-Design Showcase
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Entdecken Sie meine Kollektion professionell gestalteter E-Mail-Templates für verschiedene Anwendungsfälle
              </p>
            </motion.div>
          </div>
        </section>

        {/* Email Showcase Sections */}
        {emailTypes.map((emailType, index) => (
          <section 
            key={emailType.id} 
            className={`py-20 ${emailType.bgColor}`}
          >
            {/* Remove absolute positioning from decorative elements */}
            <div className="overflow-hidden">
              <div className="noise opacity-10" />
            </div>

            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                <div className={index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"}>
                  <h2 className={`text-3xl font-bold mb-4 ${emailType.textColor}`}>
                    {emailType.title}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {emailType.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {emailType.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`${emailType.textColor} mr-2`}>•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Button with no wrapper, direct link */}
                  <a 
                    href={emailType.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-6 py-3 rounded-lg bg-gradient-to-r ${emailType.buttonColor} text-white hover:opacity-90 transition-opacity cursor-pointer`}
                  >
                    Template öffnen
                  </a>
                </div>
                <div className={index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"}>
                  <Card className="glass border-white/10 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3]">
                        <img 
                          src={emailType.image} 
                          alt={`${emailType.title} Template Beispiel`} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-4">
                            <h3 className="text-white text-lg font-semibold">{emailType.title} Template</h3>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary-900/50 to-secondary-900/50 p-10 rounded-xl backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Benötigen Sie maßgeschneiderte E-Mail-Templates?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Als Digital Content Manager erstelle ich responsive, ansprechende und konversionsstarke E-Mail-Templates, die perfekt zu Ihrer Marke passen.
              </p>
              <Link 
                href="/kontakt" 
                className="inline-block px-8 py-3 text-lg font-medium rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:opacity-90 transition-opacity"
              >
                Kontaktieren Sie mich
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmailShowcasePage;