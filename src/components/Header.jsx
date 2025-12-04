import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Instagram, MessageCircle, User, Home, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <User className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Portfolio', path: '/portfolio', icon: <FolderOpen className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Xecutegg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/souma-goswami-86032b257/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://discord.gg/WVThZG7Q5X', label: 'Discord' },
    { icon: Instagram, href: 'https://www.instagram.com/xecute.gg_/', label: 'Instagram' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50
          ${scrolled ? 'backdrop-blur-lg bg-gray-800/70 border border-gray-700 shadow-xl' : 'bg-gray-900/50 border border-gray-800'}
          rounded-full w-[83vw] h-16 flex items-center justify-between px-6`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
              src="logo.png" 
              alt="Souma Goswami" 
              className="w-10 h-10 sm:w-11 sm:h-11 object-cover rounded-full border-2 border-blue-500/50 shadow-lg"
            />
            <div className="ml-2 sm:ml-3">
              <h1 className="text-base sm:text-lg font-bold text-white"> 
                Souma Goswami
              </h1>
              <p className="text-[10px] sm:text-xs text-blue-400 font-medium leading-none">
                Full Stack Developer
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-center mx-8">
          <nav className="flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  location.pathname === item.path 
                    ? 'text-white bg-blue-500/20 border border-blue-500/30' 
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Social Links & Mobile Menu Button */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-700 text-gray-400"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`menu-button inline-flex items-center justify-center p-2 rounded-lg md:hidden ${
              isMenuOpen
                ? 'bg-blue-600 text-white'
                : 'text-gray-400'
            }`}
            aria-expanded={isMenuOpen}
          >
            {!isMenuOpen ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`mobile-menu absolute top-full right-0 mt-3 w-64 bg-gray-800 rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-700/50 backdrop-blur-sm md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="py-3">
            {/* Navigation Links */}
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 text-sm ${
                  location.pathname === item.path 
                    ? 'text-blue-400 bg-blue-600/20 border-r-2 border-blue-400' 
                    : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="border-t border-gray-700/50 my-2 mx-4"></div>
            <div className="flex items-center justify-center space-x-4 py-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-600 text-gray-400"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>

            {/* Mobile Contact Button */}
            <div className="px-4 py-3">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;