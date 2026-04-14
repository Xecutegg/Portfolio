import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Xecutegg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/souma-goswami-86032b257/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://discord.gg/WVThZG7Q5X', label: 'Discord' },
    { icon: Instagram, href: 'https://www.instagram.com/xecute.gg_/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-zinc-900 border-t border-lime-500/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                <span className="text-white">Xecute</span>
                <span className="text-lime-500">.Me</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Passionate web developer, esports organizer, and creative designer.
              Building digital experiences and managing gaming communities with innovation.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:bg-lime-500 hover:text-black transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="relative inline-block text-zinc-400 hover:text-lime-500 transition-colors duration-300 text-sm group"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-lime-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zinc-400 text-sm group">
                <Mail size={16} className="text-lime-500 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:soumagoswami2002@gmail.com"
                  className="hover:text-lime-500 transition-colors duration-300"
                >
                  soumagoswami2002@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 text-sm group">
                <MapPin size={16} className="text-lime-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="hover:text-lime-500 transition-colors duration-300">West Bengal, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Additional Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Work With Me</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Available for freelance work and collaborations. Let's create something amazing together!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-lime-500 text-black hover:bg-lime-600 transition-all duration-300 transform hover:scale-105"
            >
              Hire Me Now
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-lime-500/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-zinc-400 text-sm">
              © {currentYear} <span className="text-lime-500">Xecute.Me</span>. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-zinc-400 hover:text-lime-500 text-sm transition-colors duration-300 relative group"
              >
                Privacy Policy
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-lime-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link
                to="/terms"
                className="text-zinc-400 hover:text-lime-500 text-sm transition-colors duration-300 relative group"
              >
                Terms of Service
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-lime-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;