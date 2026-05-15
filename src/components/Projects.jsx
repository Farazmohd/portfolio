import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Video, ShoppingCart, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "QuantumGuard",
      subtitle: "PQC Security Auditing Platform",
      description: "Detects quantum-vulnerable algorithms and suggests NIST-approved PQC alternatives. Includes RBAC dashboards and automated reports.",
      tech: ["React.js", "Vite", "Node.js", "Express.js", "MSSQL"],
      icon: <Shield className="text-blue-400" />,
      link: "#",
      github: "#"
    },
    {
      title: "Signs of the Palace",
      subtitle: "Real-Time Video Classifier",
      description: "CNN + LSTM deep learning pipeline for real-time video predictions with Streamlit frontend and Flask backend.",
      tech: ["Python", "TensorFlow", "Keras", "Flask", "Streamlit"],
      icon: <Video className="text-purple-400" />,
      link: "#",
      github: "#"
    },
    {
      title: "Multi-App E-Commerce",
      subtitle: "Enterprise Retail Solution",
      description: "Complex system with Retailer, Vendor, Warehouse, and Delivery modules managing end-to-end order lifecycle.",
      tech: ["React Native", "Node.js", "MSSQL"],
      icon: <ShoppingCart className="text-cyan-400" />,
      link: "#",
      github: "#"
    },
    {
      title: "Lead Management CRM",
      subtitle: "Customer Workflow System",
      description: "Comprehensive CRM for managing customer lifecycle workflows, onboarding, and lead tracking with automated actions.",
      tech: ["Node.js", "Express.js", "MSSQL"],
      icon: <Users className="text-emerald-400" />,
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A selection of my most challenging and impactful work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group flex flex-col h-full glow-card"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-500 hover:text-white transition-colors">
                    <Github size={22} />
                  </a>
                  <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-accent-blue/80 font-medium text-sm mb-4">{project.subtitle}</p>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, j) => (
                  <span 
                    key={j}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-semibold text-gray-500 group-hover:border-accent-blue/20 group-hover:text-gray-300 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
