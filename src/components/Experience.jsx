import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Navabharath Technologies",
      duration: "Nov 2025 – May 2026",
      location: "Mysore, India",
      description: [
        "Developed multi-application e-commerce platform with complex business logic",
        "Built and maintained React Native mobile applications for retailers and vendors",
        "Designed and optimized scalable Node.js backend APIs",
        "Optimized MSSQL queries for high-performance data retrieval"
      ]
    },
    {
      role: "Android Developer Intern",
      company: "Idionix Solutions",
      duration: "Jun 2022 – Jul 2022",
      location: "India",
      description: [
        "Developed Android e-commerce application using Java",
        "Implemented user interface and smooth navigation patterns",
        "Collaborated with senior developers on feature implementations"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience <span className="text-gradient">Timeline</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            My professional journey and professional growth in the tech industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue via-accent-purple to-transparent opacity-20" />

          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative mb-16 flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot on line */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full bg-background border-4 border-accent-blue z-10" />

              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className={`glass-card p-8 hover:translate-y-[-5px] transition-transform duration-300 ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="flex items-center gap-2 text-accent-blue font-bold mb-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4 font-medium">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                    <span className="mx-2">|</span>
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, j) => (
                      <li key={j} className="text-gray-500 flex gap-2">
                        <span className="text-accent-blue mt-1.5 min-w-[6px] h-[6px] rounded-full bg-accent-blue block" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
