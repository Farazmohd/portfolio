import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button 
              className="relative group cursor-zoom-in outline-none border-none bg-transparent p-0 block" 
              onClick={() => setIsImageEnlarged(true)}
              aria-label="Enlarge profile photo"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <img 
                src={profileImg} 
                alt="Mohammed Faraz" 
                className="relative w-10 h-10 rounded-full object-cover border-2 border-white/20"
              />
            </button>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/mohammed-faraz-716380269" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-b border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-medium text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex space-x-6 pt-4 border-t border-white/10">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><Github size={24} className="text-gray-400" /></a>
                  <a href="https://linkedin.com/in/mohammed-faraz-716380269" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><Linkedin size={24} className="text-gray-400" /></a>
                  <a href="mailto:mohdfaraz9886@gmail.com" aria-label="Send Email"><Mail size={24} className="text-gray-400" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setIsImageEnlarged(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-4xl w-full flex justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-14 right-0 text-white hover:text-gray-300 transition-all bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-md border border-white/10"
                onClick={() => setIsImageEnlarged(false)}
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <img 
                src={profileImg} 
                alt="Mohammed Faraz" 
                className="max-h-[85vh] w-auto rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-2 border-white/10 object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
