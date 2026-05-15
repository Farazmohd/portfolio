import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">MF.</h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Building modern, scalable, and secure digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              {[
                { Icon: Github, href: "https://github.com/Farazmohd" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-faraz-716380269/" },
                { Icon: Mail, href: "mailto:mohdfaraz9886@gmail.com" }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-sm flex items-center gap-2">
              © {new Date().getFullYear()} Mohammed Faraz. Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Mysore.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
