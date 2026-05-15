import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Code, Shield, Brain } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Experience', value: '6 Months+', icon: <Calendar size={20} /> },
    { label: 'Location', value: 'Mysore, India', icon: <MapPin size={20} /> },
    { label: 'Main Stack', value: 'MERN & React Native', icon: <Code size={20} /> },
  ];

  const interests = [
    { name: 'Full Stack Development', icon: <Code className="text-blue-400" /> },
    { name: 'Artificial Intelligence', icon: <Brain className="text-purple-400" /> },
    { name: 'Cybersecurity', icon: <Shield className="text-cyan-400" /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              Based in the beautiful city of Mysore, Karnataka, India, I am a Junior Software Engineer 
              with a deep passion for building high-performance applications. 
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              With 6 months of professional experience at Navabharath Technologies, I've specialized 
              in React Native, Node.js, Express.js, MSSQL, and React.js. I have a strong problem-solving 
              mindset and am dedicated to developing scalable applications that deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-4 text-center">
                  <div className="flex justify-center mb-2 text-accent-blue">{stat.icon}</div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 gap-6"
          >
            <h3 className="text-2xl font-semibold mb-2">My Interests</h3>
            <div className="space-y-4">
              {interests.map((interest, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-white/20 transition-all cursor-default"
                >
                  <div className="p-3 rounded-xl bg-white/5">{interest.icon}</div>
                  <span className="text-xl font-medium text-gray-300">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
