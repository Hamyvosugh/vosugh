// components/Navbar.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, 
  MessageSquare, 
  Zap, 
  Instagram, 
  Layout, 
  Mail, 
  PenTool, 
  MousePointer, 
  Cpu,
  Code,
  Briefcase,
  Wrench
} from 'lucide-react';

// Define the menu structure with submenu items and icons
const menuStructure = [
  {
    name: 'Home',
    href: '/',
    image: '/assets/images/maincover.webp',
    submenu: []
  },
  {
    name: 'Leistungen',
    href: '/',
    image: '/assets/images/maincover.webp',
    submenu: [
      { name: 'Web Design', href: '/webdesign', icon: <Laptop size={24} /> },
      { name: 'Social Media Management', href: '/socialmedia-mng', icon: <Instagram size={24} /> },
      { name: 'Content Creation', href: '/content-creation/contentcreation', icon: <MessageSquare size={24} /> },
      { name: 'Social Media Content', href: '/content-creation/socialmedia', icon: <MessageSquare size={24} /> },
      { name: 'Automation', href: '/automation', icon: <Zap size={24} /> },
     
    ]
  },

  {
    name: 'Showcases',
    href: '/services',
    image: '/assets/images/maincover.webp',
    submenu: [
      { name: 'Blog', href: '/blog', icon: <PenTool size={24} /> },
      { name: 'Blog Filter', href: '/blog-grid', icon: <PenTool size={24} /> },
      { name: 'Landing Page', href: '/landingpage', icon: <MousePointer size={24} /> },
      { name: 'Email Marketing', href: '/email-demos', icon: <Mail size={24} /> },
   
    ]
  },
  {
    name: 'Über mich',
    href: '/about-me',
    image: '/assets/images/maincover.webp',
    submenu: []
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleMenuOpen = (menuName: string) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };
  
  const closeAllMenus = () => {
    setActiveMenu(null);
    setMenuOpen(false);
  };

  // Animation variants
  const navbarVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };
  
  const menuVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } }
  };
  
  const megaMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  };
  
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };
  
  return (
    <>
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${
          scrolled || activeMenu ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Hamy Vosugh
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {menuStructure.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu.length > 0 ? (
                    <button
                      onClick={() => handleMenuOpen(item.name)}
                      className={`text-lg font-medium py-2 px-1 transition-colors duration-200 border-b-2 ${
                        pathname === item.href || activeMenu === item.name
                          ? 'text-white border-blue-500'
                          : 'text-gray-300 border-transparent hover:text-white hover:border-blue-400'
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeAllMenus}
                      className={`text-lg font-medium py-2 px-1 transition-colors duration-200 border-b-2 ${
                        pathname === item.href
                          ? 'text-white border-blue-500'
                          : 'text-gray-300 border-transparent hover:text-white hover:border-blue-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Only render mega menu if this menu has submenu items */}
                  {item.submenu.length > 0 && (
                    <AnimatePresence>
                      {activeMenu === item.name && (
                        <motion.div
                          variants={megaMenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 mt-2 w-96 rounded-lg bg-white  backdrop-blur-lg border border-white/10 overflow-hidden shadow-xl z-50"
                        >
                          {/* Menu header with image */}
                          <div className="relative h-48 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                            <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10" />
                            <div className="absolute bottom-4 left-4 z-20">
                              <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                            </div>
                            <Image 
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          {/* Submenu items */}
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-4">
                              {item.submenu.map((subitem) => (
                                <motion.div key={subitem.name} variants={menuItemVariants}>
                                  <Link
                                    href={subitem.href}
                                    onClick={closeAllMenus}
                                    className="block hover:bg-white/5 rounded-lg transition-colors duration-200 overflow-hidden"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <div className="flex items-center justify-center h-16 w-16 rounded-md overflow-hidden bg-blue-950">
                                        <div className="text-white">
                                          {subitem.icon}
                                        </div>
                                      </div>
                                      <span className="text-lg text-blue-950 font-bold hover:text-orange-700">{subitem.name}</span>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              
              <Link 
                href="/kontakt" 
                onClick={closeAllMenus}
                className="px-6 py-3 text-lg rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
              >
                Kontaktieren
              </Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-lg overflow-auto pt-24"
          >
            <div className="container mx-auto px-6 py-8 pb-24">
              <nav className="flex flex-col space-y-6">
                {menuStructure.map((item) => (
                  <div key={item.name} className="space-y-4">
                    <div className="flex items-center justify-between" onClick={() => handleMenuOpen(item.name)}>
                      <Link
                        href={item.href}
                        className={`text-2xl font-medium ${
                          pathname === item.href ? 'text-blue-400' : 'text-gray-200'
                        }`}
                      >
                        {item.name}
                      </Link>
                      
                      {item.submenu.length > 0 && (
                        <button 
                          className="p-2 text-gray-400"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 transition-transform duration-200 ${
                              activeMenu === item.name ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile submenu */}
                    {item.submenu.length > 0 && (
                      <AnimatePresence>
                        {activeMenu === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {/* Image header for category */}
                            <div className="relative h-36 w-full rounded-lg overflow-hidden mb-4">
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                              <div className="absolute bottom-4 left-4 z-20">
                                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                              </div>
                              <Image 
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            
                            <div className="pl-4 space-y-4 border-l-2 border-blue-500">
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  onClick={closeAllMenus}
                                  className="block py-2 pl-4 text-xl text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-md overflow-hidden bg-blue-500/10">
                                      <div className="text-blue-400">
                                        {subitem.icon}
                                      </div>
                                    </div>
                                    <span>{subitem.name}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
                
                <Link
                  href="/kontakt"
                  onClick={closeAllMenus}
                  className="py-4 mt-6 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl text-center"
                >
                  Kontaktieren
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay to close menus when clicking outside */}
      {(activeMenu || menuOpen) && (
        <div 
          className="fixed inset-0 bg-transparent z-40" 
          onClick={closeAllMenus}
          style={{ pointerEvents: activeMenu || menuOpen ? 'auto' : 'none' }}
        />
      )}
    </>
  );
};

export default Navbar;