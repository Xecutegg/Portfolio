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

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
          ${scrolled
            ? 'backdrop-blur-lg bg-zinc-900/80 border border-lime-500/20'
            : 'bg-zinc-900/50 border border-zinc-800'}
          rounded-full w-[90%] sm:w-[85%] md:w-[83vw] h-16 flex items-center justify-between px-4 sm:px-6`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <Link
            to="/"
            className="flex items-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative">
              <img
                src="logo2.png"
                alt="Souma Goswami"
                className="w-9 h-9 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-lime-500 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full border-2 border-lime-500/30 animate-pulse"></div>
            </div>
            <div className="ml-2 sm:ml-3">
              <h1 className="text-sm sm:text-base font-bold text-white group-hover:text-lime-500 transition-colors duration-300">
                Souma Goswami
              </h1>
              <p className="text-[10px] sm:text-xs text-lime-500 font-medium leading-none">
                Software Developer
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-center mx-4 xl:mx-8">
          <nav className="flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group
                  ${location.pathname === item.path
                    ? 'text-black bg-lime-500'
                    : 'text-zinc-300 hover:text-lime-500'
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname !== item.path && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-lime-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Social Links & Mobile Menu Button */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-1.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:bg-lime-500 hover:text-black transition-all duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-lime-500 text-black hover:bg-lime-600 transition-all duration-300 transform hover:scale-105"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`menu-button inline-flex items-center justify-center p-2 rounded-lg md:hidden transition-all duration-300
              ${isMenuOpen
                ? 'bg-lime-500 text-black'
                : 'bg-zinc-800 text-zinc-400 hover:bg-lime-500 hover:text-black'
              }`}
            aria-expanded={isMenuOpen}
          >
            {!isMenuOpen ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`mobile-menu absolute top-full right-0 mt-3 w-72 bg-zinc-900/95 rounded-2xl overflow-hidden z-50 border border-lime-500/20 backdrop-blur-sm md:hidden transition-all duration-300
            ${isMenuOpen ? 'block animate-in slide-in-from-top-2' : 'hidden'}`}
        >
          <div className="py-3">
            {/* Navigation Links */}
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 text-sm transition-all duration-200
                  ${location.pathname === item.path
                    ? 'bg-lime-500 text-black'
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-lime-500'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={location.pathname === item.path ? 'text-black' : 'text-current'}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <div className="ml-auto w-1 h-6 bg-black rounded-full"></div>
                )}
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="border-t border-zinc-700/50 my-2 mx-4"></div>
            <div className="flex items-center justify-center space-x-4 py-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:bg-lime-500 hover:text-black transition-all duration-300 transform hover:scale-110"
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
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-lime-500 text-black hover:bg-lime-600 transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;