// components/blog/DataManagement.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const DataManagement = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const dataFeatures = [
    {
      title: "Headless CMS Integration",
      description: "Nahtlose Integration mit modernen headless CMS wie Contentful, Strapi oder Sanity für flexible Content-Verwaltung.",
      icon: "database"
    },
    {
      title: "Custom CRM Lösungen",
      description: "Maßgeschneiderte Kundendatenbanken mit automatisierten Workflows für besseres Kundenmanagement.",
      icon: "users"
    },
    {
      title: "Content Migration",
      description: "Professionelle Migration bestehender Inhalte in neue Systeme mit Datenintegrität.",
      icon: "arrow-right-circle"
    },
    {
      title: "API-Entwicklung",
      description: "Individuelle API-Schnittstellen für nahtlose Datenübertragung zwischen verschiedenen Plattformen.",
      icon: "code"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-primary-900/10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text pb-5">Daten & CMS Management</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professionelle Datenverwaltung ist das Fundament für erfolgreiche digitale Projekte. 
            Von der CMS-Integration bis zur maßgeschneiderten Datenbanklösung - ich gestalte 
            effiziente Systeme, die die Arbeit mit Inhalten vereinfachen.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-dark-800/70 border-primary-800/30 backdrop-blur-sm hover:border-primary-600/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <span className="bg-primary-900/30 p-2 rounded-md mr-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-primary-400" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d={
                            feature.icon === "database" ? "M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm0 5h16" :
                            feature.icon === "users" ? "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" :
                            feature.icon === "arrow-right-circle" ? "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" :
                            "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          }
                        />
                      </svg>
                    </span>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Data Flow Visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 bg-dark-900/60 border border-white/5 rounded-xl p-6 md:p-10 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">CMS & Datenbank</h3>
              <p className="text-gray-400">
                Ich erstelle maßgeschneiderte CMS-Systeme und Datenbanken, die perfekt auf Ihre Inhalte und Workflows zugeschnitten sind.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="text-primary-400 mr-2">→</span> 
                  Content Modellierung
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-primary-400 mr-2">→</span> 
                  Benutzerrechte-Management
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-primary-400 mr-2">→</span> 
                  Workflow-Automatisierung
                </li>
              </ul>
            </div>
            
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="w-full relative">
                <div className="p-6 bg-dark-800/50 border border-white/10 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-12 gap-3">
                    {/* CMS Section */}
                    <div className="col-span-4 p-3 bg-dark-700/60 rounded-lg border border-primary-800/30">
                      <div className="text-xs text-primary-400 uppercase font-bold mb-2">CMS</div>
                      <div className="space-y-2">
                        <div className="h-3 bg-dark-600/50 rounded"></div>
                        <div className="h-3 bg-dark-600/50 rounded"></div>
                        <div className="h-3 bg-dark-600/50 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="col-span-1 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    
                    {/* API Layer */}
                    <div className="col-span-3 p-3 bg-dark-700/60 rounded-lg border border-secondary-800/30">
                      <div className="text-xs text-secondary-400 uppercase font-bold mb-2">API</div>
                      <div className="space-y-2">
                        <div className="h-3 bg-dark-600/50 rounded"></div>
                        <div className="h-3 bg-dark-600/50 rounded w-1/2"></div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="col-span-1 flex items-center justify-center">
                      <svg className="w-4 h-4 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    
                    {/* Frontend */}
                    <div className="col-span-3 p-3 bg-dark-700/60 rounded-lg border border-white/10">
                      <div className="text-xs text-gray-400 uppercase font-bold mb-2">Frontend</div>
                      <div className="space-y-2">
                        <div className="h-3 bg-dark-600/50 rounded"></div>
                        <div className="h-3 bg-dark-600/50 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Database visual */}
                  <div className="mt-8">
                    <div className="text-xs text-gray-400 mb-2">Database Schema:</div>
                    <div className="p-3 bg-black/30 rounded-lg border border-primary-800/20 font-mono text-xs text-gray-400 overflow-x-auto">
                      <pre>{`{
  "posts": {
    "id": "uuid",
    "title": "string",
    "content": "richtext",
    "author": "reference",
    "categories": "reference[]",
    "published": "boolean",
    "created_at": "timestamp"
  },
  "authors": {
    "id": "uuid",
    "name": "string",
    "bio": "text",
    "avatar": "image"
  }
}`}</pre>
                    </div>
                  </div>
                </div>
                
                {/* Connection lines animation */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
                    <path d="M50,50 Q150,20 250,150 T450,250" stroke="url(#gradientPath)" strokeWidth="1" fill="none">
                      <animate attributeName="stroke-dashoffset" from="0" to="1000" dur="20s" repeatCount="indefinite" />
                    </path>
                    <defs>
                      <linearGradient id="gradientPath" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4642eb" />
                        <stop offset="100%" stopColor="#9e35ea" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Study Sample */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-20"
        >
          <div className="border border-white/5 rounded-xl overflow-hidden bg-gradient-to-br from-black/80 to-dark-900/60 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-4">Case Study: E-Commerce Datenintegration</h3>
                <p className="text-gray-400 mb-4">
                  Für einen mittelständischen E-Commerce-Händler habe ich ein maßgeschneidertes System entwickelt, 
                  das Produktdaten, Kundendaten und Content in einer einheitlichen Plattform verwaltet.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-primary-900/30 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Reduktion der Datenaktualisierungszeit um 78%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-900/30 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Integration von 5 verschiedenen Datenquellen</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-900/30 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Automatisierte Content-Erstellung für 1.200+ Produkte</span>
                  </li>
                </ul>
                <div className="mt-6">
                    <a href="/e-commerce-datenintegration" className="inline-block px-5 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                    Mehr erfahren
                    </a>
                </div>
              </div>
              <div className="bg-dark-900/90 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('/assets/images/post/ecoomerce-ui.webp')] bg-cover bg-center opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex gap-2 mb-4">
                    <div className="px-3 py-1 rounded-full bg-primary-600/20 text-primary-400 text-xs">Headless CMS</div>
                    <div className="px-3 py-1 rounded-full bg-secondary-600/20 text-secondary-400 text-xs">Next.js</div>
                    <div className="px-3 py-1 rounded-full bg-primary-600/20 text-primary-400 text-xs">GraphQL</div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Entwickelt mit modernsten Technologien für maximale Leistung und Skalierbarkeit.
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataManagement;