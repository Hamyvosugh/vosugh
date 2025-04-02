// app/kontakt/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/Card';
import PageWrapper from '@/layout/PageWrapper';
import Footer from '@/components/sections/Footer';

const ContactPage = () => {
  const contactInfo = {
    email: "hi@hamyvosugh.com",
    phone: "+49 176 47 666 407",
    location: "Main-Kinzig-Kreis",
    website: "hamyvosugh.com"
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const contactVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <PageWrapper>
      {/* Navbar */}
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Kontaktieren Sie mich
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Haben Sie Fragen oder Interesse an einer Zusammenarbeit? Nehmen Sie gerne Kontakt mit mir auf.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full glassmorphism backdrop-blur-md bg-black/30">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 gradient-text">Kontaktinformationen</h2>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <motion.div 
                      className="flex items-center p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                      variants={contactVariants}
                      initial="initial"
                      animate="animate"
                      custom={0}
                    >
                      <motion.div 
                        className="p-3 rounded-full bg-primary-600/20 mr-4"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a 
                          href={`mailto:${contactInfo.email}`} 
                          className="text-lg font-medium text-white hover:text-primary-400 transition-colors"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </motion.div>
                    
                    {/* Phone */}
                    <motion.div 
                      className="flex items-center p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                      variants={contactVariants}
                      initial="initial"
                      animate="animate"
                      custom={1}
                    >
                      <motion.div 
                        className="p-3 rounded-full bg-primary-600/20 mr-4"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400">Telefon</p>
                        <a 
                          href={`tel:${contactInfo.phone}`} 
                          className="text-lg font-medium text-white hover:text-primary-400 transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </motion.div>
                    
                    {/* WhatsApp */}
                    <motion.div 
                      className="flex items-center p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                      variants={contactVariants}
                      initial="initial"
                      animate="animate"
                      custom={2}
                    >
                      <motion.div 
                        className="p-3 rounded-full bg-green-600/20 mr-4"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400">WhatsApp</p>
                        <a 
                          href={`https://wa.me/${contactInfo.phone.replace(/\+|\s/g, '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-white hover:text-green-500 transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </motion.div>
                    
                    {/* Location */}
                    <motion.div 
                      className="flex items-center p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                      variants={contactVariants}
                      initial="initial"
                      animate="animate"
                      custom={3}
                    >
                      <motion.div 
                        className="p-3 rounded-full bg-secondary-600/20 mr-4"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400">Standort</p>
                        <p className="text-lg font-medium text-white">
                          {contactInfo.location}
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Website */}
                    <motion.div 
                      className="flex items-center p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                      variants={contactVariants}
                      initial="initial"
                      animate="animate"
                      custom={4}
                    >
                      <motion.div 
                        className="p-3 rounded-full bg-secondary-600/20 mr-4"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400">Website</p>
                        <a 
                          href={`https://${contactInfo.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-white hover:text-secondary-400 transition-colors"
                        >
                          {contactInfo.website}
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* QR Codes */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full glassmorphism backdrop-blur-md bg-black/30">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 gradient-text">QR Codes</h2>
                  
                  <div className="space-y-8">
                    {/* Website QR Code */}
                    <div className="text-center">
                      <p className="text-gray-300 mb-3">VCARD</p>
                      <div className="bg-white p-4 rounded-lg inline-block mx-auto">
                        <div className="w-48 h-48 relative">
                          <Image 
                            src="/assets/QrCode/hamyvosugh-qr.png" 
                            alt="Website QR Code" 
                            width={200} 
                            height={200}
                            className="rounded-md"
                          />
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-400">hamyvosugh.com</p>
                    </div>
                    
                    {/* WhatsApp QR Code */}
                    <div className="text-center">
                      <p className="text-gray-300 mb-3">WhatsApp</p>
                      <div className="bg-white p-4 rounded-lg inline-block mx-auto border-2 border-green-500">
                        <div className="w-48 h-48 relative">
                          <Image 
                            src="/assets/QrCode/whatsapp.webp" 
                            alt="WhatsApp QR Code" 
                            width={200} 
                            height={200}
                            className="rounded-md"
                          />
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-400">Scannen für WhatsApp Chat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      

      <Footer />
    </PageWrapper>
  );
};

export default ContactPage;