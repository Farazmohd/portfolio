import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Send, Briefcase } from 'lucide-react';
import { Link } from 'react-scroll';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ResumeTemplate from './ResumeTemplate';
import HeroBackground from './HeroBackground';

const Hero = () => {
  const resumeRef = useRef();

  const handleDownload = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, {
      scale: 3, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add subsequent pages if content is longer than A4
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('Mohammed_Faraz_Resume.pdf');
  };
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Hidden Resume Template for PDF generation */}
      <ResumeTemplate innerRef={resumeRef} />
      
      {/* Next-Gen Cinematic Background (z-index 0) */}
      <HeroBackground />

      {/* Hero Content (z-index 10) */}
      <div className="container mx-auto px-6 relative z-[10] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-6">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">Mohammed Faraz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium mb-4 max-w-3xl mx-auto">
            Junior Software Engineer | Full Stack Developer | React Native Developer | AI Enthusiast
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate software engineer experienced in building scalable web/mobile applications, 
            REST APIs, AI-powered systems, and security auditing platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn-primary flex items-center gap-2 group">
                <Briefcase size={20} />
                View Projects
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
              </button>
            </Link>
            <button 
              onClick={handleDownload}
              className="btn-secondary flex items-center gap-2 cursor-pointer"
            >
              <Download size={20} />
              Download Resume
            </button>
            <Link to="contact" smooth={true} duration={500}>
              <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 ml-2">
                <Send size={18} />
                Contact Me
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-500 hover:text-accent-blue transition-colors"
          >
            <ChevronDown size={32} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
