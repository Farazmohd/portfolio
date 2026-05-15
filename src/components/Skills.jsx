import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Layout, Server, Cpu, GitBranch, 
  Terminal, ShieldCheck, Activity, Smartphone
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-400" />,
      skills: ["React.js", "React Native", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend",
      icon: <Server className="text-purple-400" />,
      skills: ["Node.js", "Express.js", "Flask"]
    },
    {
      title: "Database",
      icon: <Database className="text-cyan-400" />,
      skills: ["MS SQL Server"]
    },
    {
      title: "AI/ML",
      icon: <Cpu className="text-emerald-400" />,
      skills: ["TensorFlow", "Keras", "CNN", "LSTM"]
    },
    {
      title: "Tools",
      icon: <GitBranch className="text-orange-400" />,
      skills: ["Git", "Postman", "VS Code"]
    },
    {
      title: "Concepts",
      icon: <ShieldCheck className="text-rose-400" />,
      skills: ["REST APIs", "RBAC", "CRUD", "SAST", "Agile"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 relative bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Proficiency</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="glass-card p-8 group relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 text-sm font-medium hover:border-accent-blue/30 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
