// app/landing-page-demo/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const ModernLandingPage = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "Diese Software hat unsere Produktivität um 45% gesteigert. Die Benutzeroberfläche ist intuitiv und das Support-Team ist außergewöhnlich hilfsbereit.",
      author: "Maria Schmidt",
      position: "COO, TechVision GmbH",
      avatar: "https://i.pravatar.cc/100?img=26",
    },
    {
      id: 2,
      quote: "Nach dem Wechsel zu dieser Plattform haben wir unsere Konversionsrate verdoppelt. Ich kann sie jedem E-Commerce-Unternehmen nur empfehlen.",
      author: "Thomas Müller",
      position: "Marketing Director, ShopNow",
      avatar: "https://i.pravatar.cc/100?img=13",
    },
    {
      id: 3,
      quote: "Das beste Tool für unser Team. Wir haben endlich alle unsere Daten an einem Ort und können einfach zusammenarbeiten.",
      author: "Laura Weber",
      position: "Project Manager, Creative Studios",
      avatar: "https://i.pravatar.cc/100?img=5",
    }
  ];
  
  // Features data
  const features = [
    {
      id: 1,
      title: "Intuitive Benutzeroberfläche",
      description: "Eine moderne, benutzerfreundliche Oberfläche, die keine Einarbeitung erfordert.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Optimierte Datenanalyse",
      description: "Leistungsstarke Analysetools, die Ihnen helfen, fundierte Entscheidungen zu treffen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Nahtlose Integration",
      description: "Verbinden Sie all Ihre Tools und Systeme für einen reibungslosen Workflow.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Automatisierte Workflows",
      description: "Sparen Sie Zeit und Ressourcen mit intelligenten Automatisierungen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Skalierbare Infrastruktur",
      description: "Wachsen Sie ohne Einschränkungen - unsere Plattform wächst mit Ihnen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Erstklassiger Support",
      description: "Unser Expertenteam steht Ihnen bei jedem Schritt zur Seite.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      )
    },
  ];
  
  // Pricing plans
  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      price: "49",
      period: "monatlich",
      description: "Ideal für kleine Teams und Startups",
      features: [
        "5 Benutzer",
        "10 GB Speicher",
        "Grundlegende Datenanalyse",
        "Email Support",
        "1 Integration"
      ],
      cta: "Starter wählen",
      popular: false
    },
    {
      id: 2,
      name: "Professional",
      price: "99",
      period: "monatlich",
      description: "Perfekt für wachsende Unternehmen",
      features: [
        "15 Benutzer",
        "50 GB Speicher",
        "Erweiterte Datenanalyse",
        "Prioritäts-Support",
        "5 Integrationen",
        "Automatisierte Workflows"
      ],
      cta: "Professional wählen",
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: "249",
      period: "monatlich",
      description: "Für große Unternehmen mit komplexen Anforderungen",
      features: [
        "Unbegrenzte Benutzer",
        "500 GB Speicher",
        "Premium Datenanalyse",
        "24/7 Support",
        "Unbegrenzte Integrationen",
        "Benutzerdefinierte Automatisierungen",
        "Dedizierter Account Manager"
      ],
      cta: "Enterprise wählen",
      popular: false
    }
  ];
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6 
      } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
 
    <div className="bg-white text-gray-800 min-h-screen">
        <div className=" mb-28 -z-50">
        <Navbar /> 
          </div> 
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-blue-600 font-bold text-xl hover:text-blue-800 transition-colors">
                  Zurück zur Website
                </Link>
                </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Features</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Testimonials</a>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Pricing</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">FAQ</a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <a href="#contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Login
              </a>
              <a href="/" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Kostenlos starten
              </a>
            </div>
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Menü öffnen</span>
                {isMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Features</a>
              <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Testimonials</a>
              <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Pricing</a>
              <a href="#faq" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">FAQ</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <a href="#contact" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-100">
                  Login
                </a>
                <a href="#contact" className="ml-4 block px-4 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                  Kostenlos starten
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <motion.section 
        className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <motion.h1 
                className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                variants={fadeInUp}
              >
                <span className="block">Die moderne</span>
                <span className="block text-blue-600">Business-Lösung</span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-xl text-gray-500 max-w-3xl"
                variants={fadeInUp}
              >
                Steigern Sie Ihre Effizienz mit unserer All-in-One-Plattform, die Ihnen hilft, Ihre Geschäftsprozesse zu optimieren und schneller zu wachsen.
              </motion.p>
              <motion.div 
                className="mt-10 sm:flex sm:justify-start"
                variants={fadeInUp}
              >
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Kostenlos starten
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#demo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Live-Demo
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-12 "
                variants={fadeInUp}
              >
                <div className="flex items-center ounded-md bg-blend-overlay">
                <p className=" font-semibold  text-gray-700  p-3 rounded-md z-50 bg-blend-overlay ">Vertraut von führenden Unternehmen</p>
                </div>
              </motion.div>
            </div>
            <div className="mt-12 relative lg:mt-0 lg:col-span-6">
              <motion.div 
                className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.5 }}
              >
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-full">
                      <img 
                        src="/assets/images/maincover.webp"
                        alt="E-commerce Platform Demo"
                        className="w-full h-full object-cover"
                      />
                      <div className="text-center p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                        </svg>
                        <p className="mt-2 text-sm text-gray-500">Produktdemo-Video</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <button className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f3f4f6" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </motion.section>
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Alles, was Sie für Ihren Erfolg benötigen
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Unsere Plattform wurde entwickelt, um Ihnen zu helfen, effizienter zu arbeiten und bessere Ergebnisse zu erzielen.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <motion.div 
                  key={feature.id}
                  className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={fadeInUp}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>
      
{/* Testimonials Section */}
<section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Was unsere Kunden sagen
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Erfahren Sie, wie unsere Plattform Unternehmen dabei hilft, ihre Ziele zu erreichen.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img 
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <blockquote>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
                </blockquote>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Transparente Preisgestaltung
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Flexible Pläne, die mit Ihrem Unternehmen wachsen. Keine versteckten Gebühren.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pricingPlans.map((plan) => (
              <motion.div 
                key={plan.id} 
                className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-500 relative' : ''
                }`}
                variants={fadeInUp}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-1 -mr-1 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-bl-xl">
                    Beliebt
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-gray-500">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-extrabold text-gray-900">{plan.price}€</span>
                    <span className="text-base text-gray-500">/{plan.period}</span>
                  </div>
                  
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-2 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className={`block w-full px-4 py-3 text-center rounded-md shadow ${
                        plan.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-50 text-blue-600 hover:bg-gray-100'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Häufig gestellte Fragen
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Hier finden Sie Antworten auf die am häufigsten gestellten Fragen.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="rounded-xl overflow-hidden shadow-sm divide-y divide-gray-200">
              <motion.div 
                className="p-6 bg-white"
                variants={fadeInUp}
              >
                <dt className="text-lg font-medium text-gray-900">
                  Wie lange dauert die Einrichtung?
                </dt>
                <dd className="mt-2 text-gray-500">
                  Die Einrichtung unserer Plattform ist unkompliziert und schnell. In der Regel sind Sie innerhalb von 15 Minuten einsatzbereit. Unser Onboarding-Team steht Ihnen bei jedem Schritt zur Seite.
                </dd>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-white"
                variants={fadeInUp}
              >
                <dt className="text-lg font-medium text-gray-900">
                  Kann ich meinen Plan jederzeit ändern?
                </dt>
                <dd className="mt-2 text-gray-500">
                  Ja, Sie können Ihren Plan jederzeit upgraden oder downgraden. Änderungen werden sofort wirksam, und die Abrechnung wird anteilig angepasst.
                </dd>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-white"
                variants={fadeInUp}
              >
                <dt className="text-lg font-medium text-gray-900">
                  Gibt es eine Mindestvertragslaufzeit?
                </dt>
                <dd className="mt-2 text-gray-500">
                  Nein, wir bieten flexible monatliche Abonnements ohne langfristige Verpflichtungen. Sie können jederzeit kündigen.
                </dd>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-white"
                variants={fadeInUp}
              >
                <dt className="text-lg font-medium text-gray-900">
                  Wie ist es um den Datenschutz bestellt?
                </dt>
                <dd className="mt-2 text-gray-500">
                  Der Schutz Ihrer Daten hat für uns höchste Priorität. Wir verwenden Verschlüsselung nach Industriestandard und befolgen strenge Datenschutzrichtlinien. Alle Daten werden in sicheren Rechenzentren in der EU gespeichert.
                </dd>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-white"
                variants={fadeInUp}
              >
                <dt className="text-lg font-medium text-gray-900">
                  Welchen Support bieten Sie an?
                </dt>
                <dd className="mt-2 text-gray-500">
                  Wir bieten Support per E-Mail, Chat und Telefon. Premium- und Enterprise-Kunden erhalten zudem einen dedizierten Account Manager und erweiterten Support.
                </dd>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-extrabold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Bereit, Ihr Geschäft auf die nächste Stufe zu bringen?
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Starten Sie heute mit einer kostenlosen 14-tägigen Testphase. Keine Kreditkarte erforderlich.
          </motion.p>
          <motion.div 
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex rounded-md shadow">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Kostenlos starten
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
              >
                Demo vereinbaren
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact/Newsletter Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Bleiben Sie informiert
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Abonnieren Sie unseren Newsletter für die neuesten Updates und Angebote.
            </motion.p>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email-Adresse
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
                  placeholder="Ihre Email-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Abonnieren
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm text-gray-500">
                Wir respektieren Ihre Privatsphäre. Lesen Sie unsere{' '}
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Produkt
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#features" className="text-base text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-base text-gray-400 hover:text-white">
                    Preise
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Unternehmen
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Karriere
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Ressourcen
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Dokumentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Anleitungen
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Rechtliches
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    AGB
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-400 hover:text-white">
                    Cookie-Einstellungen
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; 2025 BRAND GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernLandingPage;