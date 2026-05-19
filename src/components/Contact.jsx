import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    // Replace YOUR_ACCESS_KEY_HERE with your real key from web3forms.com
    formData.append("access_key", "a50f8d3a-e6fe-487b-a445-08af2384adb4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setStatus("error");
      setResult(data.message);
    }
  };
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-white font-medium">mohdfaraz9886@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-white font-medium">+91 9886550624</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white font-medium">Mysore, Karnataka, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-bold">Follow Me</p>
                <div className="flex gap-4">
                  {[
                    { Icon: Github, href: "https://github.com", label: "GitHub" },
                    { Icon: Linkedin, href: "https://linkedin.com/in/mohammed-faraz-716380269", label: "LinkedIn" },
                    { Icon: Twitter, href: "#", label: "Twitter" }
                  ].map(({ Icon, href, label }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ y: -5 }}
                      className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-2/3"
          >
            <form onSubmit={onSubmit} className="glass-card p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="contact-name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="contact-email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="Inquiry about project"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                  id="contact-message"
                  name="message"
                  required
                  rows="5" 
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              {result && (
                <p className={`text-center text-sm font-medium mt-4 ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}>
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
