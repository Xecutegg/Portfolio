import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, MessageCircle, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Graphic Design',
    'Tournament Management',
    'Discord Management',
    'Video Editing',
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Xecutegg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/souma-goswami-86032b257/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://discord.gg/WVThZG7Q5X', label: 'Discord' },
    { icon: Instagram, href: 'https://www.instagram.com/xecute.gg_/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                Xecute<span className="text-green-400">.Me</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
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
                  className="p-2 rounded-full bg-slate-700 hover:bg-green-400 hover:text-slate-900 transition-all duration-200"
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
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} className="text-green-400" />
                <a 
                  href="mailto:Founder@xecute.me"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Founder@xecute.me
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} className="text-green-400" />
                <a 
                  href="tel:+919064774963"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  +91 9064774963
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-green-400" />
                <span>Kolkata/Midnapore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Xecute.Me. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
