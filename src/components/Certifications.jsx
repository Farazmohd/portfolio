import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack",
      issuer: "Q-Spiders Mysore",
      description: "Comprehensive training in Java, Spring Boot, and modern web technologies."
    },
    {
      title: "Data Analytics",
      issuer: "NUCOT Bangalore",
      description: "Specialized certification in data processing, visualization, and analytical methodologies."
    }
  ];

  return (
    <section id="certifications" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Certifications</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl flex items-start gap-6 hover:bg-white/10 transition-all border border-white/5 hover:border-white/10 group"
            >
              <div className="p-4 rounded-2xl bg-accent-blue/10 text-accent-blue group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-accent-blue font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-500 leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
