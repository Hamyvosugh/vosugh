import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-50"></div>
        <div className="absolute top-1/3 -left-10 w-40 h-40 rounded-full bg-blue-100/30"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 rounded-full bg-blue-100/50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/20 to-blue-50/10 blur-xl"></div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left side: Text content */}
        <div className="w-full md:w-1/2 pt-8 md:pt-0 md:pr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            <span className="block">Elevate Your</span>
            <span className="block text-blue-600">Digital Presence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
            Creative content solutions and web development that automates your workflow and engages your audience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/services" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-600/20">
              Explore Services
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Right side: Visual element */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[300px] md:h-[420px] w-full">
            {/* Main illustration - replace with your custom illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-lg mx-auto">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-blue-600/10 rounded-full animate-pulse"></div>
                <Image 
                  src="/hero-illustration.svg" 
                  alt="Digital Content and Web Development Illustration" 
                  width={500} 
                  height={400}
                  className="object-contain relative z-10"
                  priority
                />
              </div>
            </div>

            {/* Service icons */}
            <div className="absolute -bottom-4 left-0 right-0 flex justify-center md:justify-start space-x-6 md:space-x-8">
              <div className="flex flex-col items-center bg-white p-3 rounded-xl shadow-lg">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <span className="text-xs font-medium">Content</span>
              </div>
              <div className="flex flex-col items-center bg-white p-3 rounded-xl shadow-lg">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-medium">Web Dev</span>
              </div>
              <div className="flex flex-col items-center bg-white p-3 rounded-xl shadow-lg">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="text-xs font-medium">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating trust indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center md:justify-end px-4 md:px-12 z-10">
        <div className="flex items-center space-x-6 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium">Trusted Solutions</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium">Fast Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;