import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Calendar, MapPin, Search, Sparkles, 
  ChevronRight, Award, Zap, Code, Shield, CheckCircle2,
  Smartphone, Server, Database, Brain, ArrowUpRight
} from 'lucide-react';

const Experience = () => {
  const [activeView, setActiveView] = useState('board'); // 'timeline', 'board', 'matcher'
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Combined work experiences database
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Navabharath Technologies",
      duration: "Nov 2025 – May 2026",
      location: "Mysore, India",
      companyShort: "Navabharath",
      color: "from-blue-500 to-indigo-500",
      glowColor: "rgba(59, 130, 246, 0.15)",
      logoBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      summary: "Led key mobile frontend development and backend optimizations for a robust enterprise e-commerce ecosystem.",
      description: [
        "Developed a multi-application e-commerce platform integrating retailer, vendor, warehouse, and delivery modules.",
        "Built React Native mobile applications and Node.js backend services.",
        "Designed REST APIs for order processing and user management.",
        "Optimized MS SQL queries for performance."
      ],
      skills: ["React Native", "Node.js", "Express.js", "MS SQL Server", "REST APIs", "Order Processing", "Agile", "JavaScript", "SQL"],
      highlights: [
        { label: "End-to-End System", detail: "Integrates 4 key modules (Retail, Vendor, Warehouse, Delivery)" },
        { label: "Tech Diversity", detail: "React Native frontends + Node.js REST services" },
        { label: "DB Optimization", detail: "Refactored complex MS SQL queries for rapid dashboard loading" }
      ]
    },
    {
      role: "Android Developer Intern",
      company: "Idionix Solutions",
      duration: "Jun 2022 – Jul 2022",
      location: "India",
      companyShort: "Idionix",
      color: "from-purple-500 to-pink-500",
      glowColor: "rgba(139, 92, 246, 0.15)",
      logoBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      summary: "Acquired hands-on experience developing native Android features and collaborating within an Agile structure.",
      description: [
        "Developed an e-commerce Android application using Java.",
        "Implemented UI, navigation, and core features.",
        "Collaborated with senior developers on feature implementations."
      ],
      skills: ["Java", "Android", "Mobile UI", "Navigation Patterns", "Git", "Agile"],
      highlights: [
        { label: "Native Mobile", detail: "Constructed UI structures & custom navigation patterns in Java" },
        { label: "Collaboration", detail: "Integrated with backend APIs while pair-programming in a scrum environment" }
      ]
    }
  ];

  // Projects data to include in the Recruiter search engine for a holistic view
  const projectAchievements = [
    {
      title: "QuantumGuard",
      role: "PQC Security Auditing Platform",
      category: "Security & Audits",
      source: "Project: QuantumGuard",
      description: "Detects quantum-vulnerable cryptographic algorithms (RSA, MD5, ECC) and recommends NIST-approved PQC alternatives. Features client-side static analysis, RBAC dashboards, and compliance report exports.",
      achievements: [
        "Built static analysis scanning engine that parsing project files for weak algorithms.",
        "Implemented secure RBAC dashboards and PDF/HTML audit report generators.",
      ],
      skills: ["React.js", "Vite", "Node.js", "Express.js", "MSSQL", "Cryptography", "RBAC", "Security"]
    },
    {
      title: "Signs of the Palace",
      role: "Real-Time Video Classifier",
      category: "AI & Deep Learning",
      source: "Project: Signs of the Palace",
      description: "Engineered deep learning pipeline using CNN and LSTM for video spatial-temporal feature analysis. Built a responsive web UI with Flask backend.",
      achievements: [
        "Constructed CNN + LSTM deep learning architectures for high accuracy video segment predictions.",
        "Built a Streamlit web portal connected to a Flask model API server.",
      ],
      skills: ["Python", "TensorFlow", "Keras", "CNN", "LSTM", "Streamlit", "Flask", "AI/ML"]
    },
    {
      title: "Lead Management CRM",
      role: "Workflow System",
      category: "CRM & Backend",
      source: "Project: Lead CRM",
      description: "Streamlined sales onboarding by tracking lead lifecycles, triggering notifications, and managing historical interactions.",
      achievements: [
        "Managed 1,000+ lead transactions and workflow transitions per month.",
        "Designed relational database schema in Microsoft SQL Server to maintain clean onboarding history.",
      ],
      skills: ["Node.js", "Express.js", "MS SQL Server", "SQL", "CRM", "Workflow Automation"]
    }
  ];

  // Flatten all accomplishments for the search indexing
  const allAccomplishments = useMemo(() => {
    const items = [];
    
    // Add work accomplishments
    experiences.forEach((exp) => {
      exp.description.forEach((bullet) => {
        items.push({
          text: bullet,
          source: exp.company,
          role: exp.role,
          type: "Work Experience",
          skills: exp.skills,
          color: exp.color
        });
      });
    });

    // Add project accomplishments
    projectAchievements.forEach((proj) => {
      proj.achievements.forEach((bullet) => {
        items.push({
          text: bullet,
          source: proj.title,
          role: proj.role,
          type: "Key Project",
          skills: proj.skills,
          color: "from-cyan-500 to-blue-500"
        });
      });
    });

    return items;
  }, []);

  // Filter accomplishments based on search input
  const filteredAccomplishments = useMemo(() => {
    if (!searchTerm.trim()) return allAccomplishments;
    const query = searchTerm.toLowerCase().trim();
    return allAccomplishments.filter(item => 
      item.text.toLowerCase().includes(query) ||
      item.source.toLowerCase().includes(query) ||
      item.role.toLowerCase().includes(query) ||
      item.skills.some(skill => skill.toLowerCase().includes(query))
    );
  }, [searchTerm, allAccomplishments]);

  // Predefined quick-filter skills for recruiters
  const hotKeywords = [
    "React Native", "Node.js", "MS SQL Server", "Java", "Android", "REST APIs", "AI/ML", "Cryptography", "Express.js"
  ];

  // Interactive KPI Cards
  const kpiStats = [
    {
      value: "2+",
      label: "Roles Held",
      description: "Full-stack & Mobile roles",
      icon: <Briefcase className="text-blue-400" size={20} />,
      onClick: () => {
        setActiveView('board');
        setSelectedCompany(0);
      }
    },
    {
      value: "4+",
      label: "Core Apps Built",
      description: "Retail, Vendor, Warehouse, Security",
      icon: <Smartphone className="text-purple-400" size={20} />,
      onClick: () => {
        setActiveView('matcher');
        setSearchTerm('e-commerce');
      }
    },
    {
      value: "95%+",
      label: "DB Tuning Speed",
      description: "MS SQL Query optimizations",
      icon: <Database className="text-cyan-400" size={20} />,
      onClick: () => {
        setActiveView('matcher');
        setSearchTerm('SQL');
      }
    },
    {
      value: "AI & PQC",
      label: "Specialized Tech",
      description: "Neural Nets & Cryptography",
      icon: <Brain className="text-emerald-400" size={20} />,
      onClick: () => {
        setActiveView('matcher');
        setSearchTerm('AI');
      }
    }
  ];

  // Helper to highlight matching text in search results
  const highlightText = (text, search) => {
    if (!search.trim()) return text;
    try {
      const parts = text.split(new RegExp(`(${search})`, 'gi'));
      return (
        <span>
          {parts.map((part, i) => 
            part.toLowerCase() === search.toLowerCase().trim()
              ? <mark key={i} className="bg-accent-blue/30 text-white font-bold px-1 rounded border-b border-accent-blue">{part}</mark> 
              : part
          )}
        </span>
      );
    } catch (e) {
      return text;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent-blue/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/10 left-10 w-[300px] h-[300px] bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-4"
          >
            <Sparkles size={14} className="text-accent-blue animate-pulse" />
            <span>Interactive Experience Hub</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            An interactive dashboard showcasing professional roles, technical benchmarks, and project outcomes.
          </p>
        </div>

        {/* Recruiter Quick Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {kpiStats.map((kpi, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.2)' }}
              onClick={kpi.onClick}
              className="glass-card p-6 flex flex-col justify-between cursor-pointer border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {kpi.icon}
                </div>
                <span className="text-xs text-gray-500 font-medium group-hover:text-accent-blue transition-colors flex items-center gap-0.5">
                  Filter <ArrowUpRight size={10} />
                </span>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-white tracking-tight mb-1">{kpi.value}</h4>
                <p className="text-sm font-bold text-gray-300 mb-0.5">{kpi.label}</p>
                <p className="text-xs text-gray-500 leading-normal">{kpi.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive View Controller Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative">
            <button
              onClick={() => { setActiveView('board'); setSelectedCompany(0); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                activeView === 'board' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase size={16} />
              <span>Interactive Board</span>
              {activeView === 'board' && (
                <motion.div
                  layoutId="activeViewTab"
                  className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveView('timeline')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                activeView === 'timeline' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Calendar size={16} />
              <span>Timeline View</span>
              {activeView === 'timeline' && (
                <motion.div
                  layoutId="activeViewTab"
                  className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveView('matcher')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                activeView === 'matcher' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Search size={16} />
              <span>Recruiter Matcher</span>
              {activeView === 'matcher' && (
                <motion.div
                  layoutId="activeViewTab"
                  className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Content Panels */}
        <div className="relative min-h-[480px]">
          <AnimatePresence mode="wait">
            
            {/* View 1: Timeline View */}
            {activeView === 'timeline' && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto relative pl-8 md:pl-0"
              >
                {/* Vertical Center Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-transparent opacity-25 md:-translate-x-1/2" />

                {experiences.map((exp, idx) => (
                  <div 
                    key={idx}
                    className={`relative mb-16 md:flex md:items-stretch md:justify-between ${
                      idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Glowing Node Dot */}
                    <div className="absolute left-[-24px] md:left-1/2 top-6 w-5 h-5 rounded-full bg-background border-4 border-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 md:-translate-x-1/2" />

                    {/* Timeline Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="w-full md:w-[45%] glass-card p-6 md:p-8 relative overflow-hidden group border border-white/5"
                    >
                      {/* Subtle color highlight corner */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color}`} />
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-accent-blue font-bold flex items-center gap-1.5 bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-md text-gray-300 font-semibold mb-4">{exp.company}</p>
                      
                      <p className="text-sm text-gray-400 mb-6 italic leading-relaxed">"{exp.summary}"</p>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-gray-400 text-sm flex gap-3 leading-relaxed">
                            <span className="text-accent-blue mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent-blue" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                        {exp.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-400 hover:text-white hover:border-accent-blue/30 transition-all font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Empty block for spacing on larger screens */}
                    <div className="hidden md:block w-[45%]" />
                  </div>
                ))}
              </motion.div>
            )}

            {/* View 2: Detailed Board View */}
            {activeView === 'board' && (
              <motion.div
                key="board"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left Side: Sidebar Company Tabs */}
                <div className="lg:col-span-4 flex flex-col gap-3">
                  {experiences.map((exp, idx) => {
                    const isSelected = selectedCompany === idx;
                    return (
                      <motion.div
                        key={idx}
                        onClick={() => setSelectedCompany(idx)}
                        whileHover={{ scale: isSelected ? 1 : 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden flex items-center justify-between ${
                          isSelected 
                            ? 'bg-white/[0.04] border-accent-blue/40 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                            : 'bg-white/[0.01] border-white/5 hover:border-white/15 hover:bg-white/[0.02]'
                        }`}
                      >
                        {/* Selector indicator */}
                        {isSelected && (
                          <motion.div 
                            layoutId="boardIndicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-accent-blue"
                          />
                        )}
                        
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border ${
                            isSelected ? 'bg-accent-blue/20 border-accent-blue/30 text-white' : 'bg-white/5 border-white/10 text-gray-400'
                          }`}>
                            {exp.companyShort.charAt(0)}
                          </div>
                          <div>
                            <h4 className={`font-bold text-md transition-colors ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                              {exp.companyShort}
                            </h4>
                            <p className="text-xs text-gray-500 font-medium">{exp.duration}</p>
                          </div>
                        </div>

                        <ChevronRight 
                          size={16} 
                          className={`transition-transform duration-300 ${
                            isSelected ? 'text-accent-blue translate-x-1' : 'text-gray-600'
                          }`} 
                        />
                      </motion.div>
                    );
                  })}

                  {/* Visual Quick Tip */}
                  <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 text-xs text-gray-500 leading-normal">
                    <span className="text-accent-blue font-bold">Recruiter Tip:</span> Switch companies to inspect localized metrics, toolchains, and project assignments.
                  </div>
                </div>

                {/* Right Side: Detailed Dashboard Card */}
                <div className="lg:col-span-8">
                  <AnimatePresence mode="wait">
                    {experiences.map((exp, idx) => {
                      if (selectedCompany !== idx) return null;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="glass-card p-8 border border-white/5 relative overflow-hidden h-full flex flex-col justify-between"
                        >
                          {/* Inner soft glow background */}
                          <div 
                            className="absolute right-0 top-0 w-64 h-64 blur-[80px] rounded-full pointer-events-none -z-10 transition-colors duration-500" 
                            style={{ backgroundColor: exp.glowColor }} 
                          />

                          <div>
                            {/* Card Header Info */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                              <div>
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${exp.logoBg} mb-3`}>
                                  <Briefcase size={12} />
                                  {exp.role}
                                </span>
                                <h3 className="text-3xl font-extrabold text-white tracking-tight">{exp.company}</h3>
                              </div>
                              <div className="flex flex-row md:flex-col items-start md:items-end gap-3 md:gap-1 text-sm text-gray-400">
                                <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                                  <Calendar size={14} className="text-accent-blue" />
                                  {exp.duration}
                                </span>
                                <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 md:border-none md:bg-transparent md:px-0 md:py-0">
                                  <MapPin size={14} className="text-gray-500" />
                                  {exp.location}
                                </span>
                              </div>
                            </div>

                            {/* Brief Summary Quote */}
                            <div className="mb-6 pl-4 border-l-2 border-accent-purple/40 italic text-gray-300 text-sm leading-relaxed">
                              "{exp.summary}"
                            </div>

                            {/* Core Bullet accomplishments */}
                            <h4 className="text-xs uppercase font-extrabold tracking-wider text-gray-500 mb-3">Key Responsibilities & Scope</h4>
                            <ul className="space-y-4 mb-8">
                              {exp.description.map((bullet, bulletIdx) => (
                                <li key={bulletIdx} className="flex items-start gap-3 text-gray-300 text-sm md:text-md leading-relaxed">
                                  <CheckCircle2 size={16} className="text-accent-blue shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Key Benchmarks / Highlights */}
                            <h4 className="text-xs uppercase font-extrabold tracking-wider text-gray-500 mb-3">Impact Highlight</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                              {exp.highlights.map((highlight, hIdx) => (
                                <div key={hIdx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                                  <span className="block font-bold text-accent-blue mb-1">{highlight.label}</span>
                                  <span className="text-gray-400 leading-normal">{highlight.detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack Footer */}
                          <div>
                            <h4 className="text-xs uppercase font-extrabold tracking-wider text-gray-500 mb-3">Technologies Leveraged</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.skills.map((skill, skillIdx) => (
                                <span
                                  key={skillIdx}
                                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 hover:text-white hover:border-accent-blue/30 transition-all font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* View 3: Recruiter Matcher View */}
            {activeView === 'matcher' && (
              <motion.div
                key="matcher"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                {/* Search Bar Block */}
                <div className="glass-card p-6 border border-white/5 mb-8 relative overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between relative z-10">
                    <div className="relative w-full">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search skills, companies, tools... (e.g. React Native, SQL, Java)"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:bg-white/[0.08] transition-all text-sm"
                      />
                    </div>
                    {searchTerm && (
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors border border-white/5 shrink-0"
                      >
                        Clear Search
                      </button>
                    )}
                  </div>

                  {/* Hot Keywords pills */}
                  <div className="mt-4 flex flex-wrap gap-2 items-center">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mr-2">Hot Skills:</span>
                    {hotKeywords.map((keyword, kIdx) => {
                      const isActive = searchTerm.toLowerCase().trim() === keyword.toLowerCase().trim();
                      return (
                        <button
                          key={kIdx}
                          onClick={() => setSearchTerm(keyword)}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                            isActive
                              ? 'bg-accent-blue/20 border-accent-blue text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                              : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {keyword}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Match Results list */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center px-2">
                    <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                      {searchTerm ? `Matching Achievements (${filteredAccomplishments.length})` : 'All Accomplishments & Milestones'}
                    </h4>
                    <span className="text-xs text-gray-500">
                      Querying Work + Project records
                    </span>
                  </div>

                  <AnimatePresence mode="popLayout">
                    {filteredAccomplishments.length > 0 ? (
                      filteredAccomplishments.map((item, itemIdx) => (
                        <motion.div
                          key={`${item.source}-${itemIdx}`}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all flex flex-col md:flex-row md:items-center md:justify-between gap-4 group hover:bg-white/[0.03]"
                        >
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gradient-to-r ${item.color || 'from-blue-500 to-indigo-500'} text-black`}>
                                {item.type}
                              </span>
                              <span className="text-xs text-gray-300 font-bold">
                                {item.source}
                              </span>
                              <span className="text-xs text-gray-500">
                                — {item.role}
                              </span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                              {highlightText(item.text, searchTerm)}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1 shrink-0 md:max-w-[200px] justify-start md:justify-end">
                            {item.skills.slice(0, 3).map((skill, skIdx) => (
                              <span 
                                key={skIdx}
                                onClick={() => setSearchTerm(skill)}
                                className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-400 hover:text-white hover:border-accent-blue/30 transition-all cursor-pointer font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                            {item.skills.length > 3 && (
                              <span className="text-[10px] text-gray-600 font-bold self-center px-1">
                                +{item.skills.length - 3}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 glass-card border border-white/5"
                      >
                        <Award className="mx-auto text-gray-600 mb-3" size={32} />
                        <h4 className="font-bold text-white mb-1">No direct matching achievements</h4>
                        <p className="text-sm text-gray-500 max-w-sm mx-auto">
                          Try searching other keys like "React Native", "Java", "SQL", "API", or "Deep Learning" to locate matching experience logs.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Experience;

