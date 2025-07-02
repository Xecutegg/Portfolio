import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Instagram, MessageCircle, Code, Bot, Server, Database, Paintbrush } from 'lucide-react';

const Home = () => {
  const roles = [
    'Human',
    'Founder Of One Dream',
    'Full Stack Developer',
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Xecutegg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/souma-goswami-86032b257/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://discord.gg/WVThZG7Q5X', label: 'Discord' },
    { icon: Instagram, href: 'https://www.instagram.com/xecute.gg_/', label: 'Instagram' },
  ];

  const services = [
    {
      icon: Code,
      title: 'Full Stack Web Development',
      description: 'I build complete web applications from frontend to backend, using modern technologies like React, Node.js, and databases.',
      features: ['React/Next.js Frontend', 'Node.js/Express Backend', 'Database Integration', 'API Development'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Bot,
      title: 'Discord Bot Development',
      description: 'I create custom Discord bots with advanced features, moderation, games, and integrations to enhance your server experience.',
      features: ['Custom Commands', 'Moderation Tools', 'Database Integration', 'Third-party APIs'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'I develop robust server-side applications, RESTful APIs, and microservices with secure authentication and data management.',
      features: ['RESTful APIs', 'Authentication Systems', 'Database Design', 'Cloud Deployment'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'I design and implement efficient database architectures using SQL and NoSQL databases for optimal performance.',
      features: ['MySQL/PostgreSQL', 'MongoDB', 'Database Optimization', 'Data Migration'],
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Paintbrush,
      title: 'Frontend Development',
      description: 'I create responsive and interactive user interfaces using modern frameworks and libraries with pixel-perfect designs.',
      features: ['React/Vue.js', 'Responsive Design', 'Modern CSS', 'Performance Optimization'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: MessageCircle,
      title: 'API Integration',
      description: 'I integrate third-party APIs and services to extend functionality and connect your applications with external platforms.',
      features: ['REST API Integration', 'Payment Gateways', 'Social Media APIs', 'Webhook Implementation'],
      color: 'from-red-500 to-red-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-25 pb-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Souma <span className="text-green-400">Goswami</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-lg md:text-xl text-gray-300">I'm</p>
              <div className="h-12 md:h-14 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -48, -96, -144, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="space-y-3"
                >
                  {roles.map((role, index) => (
                    <div
                      key={index}
                      className="h-12 md:h-14 flex items-center text-xl md:text-2xl font-semibold text-green-400"
                    >
                      {role}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl"
            >
              I'm Souma Goswami, also known as Xecute — a full-stack web developer and Discord bot developer.
              I specialize in building powerful web applications and advanced Discord bots using modern technologies.
              Passionate about clean code, creative solutions, and delivering real value through development.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-3 bg-green-400 text-slate-900 font-semibold rounded-full hover:bg-green-300 transition-all duration-200 group"
              >
                Hire Me
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-3 border border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400/10 transition-all duration-200 group"
              >
                My Services
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-3 md:gap-4 pt-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 md:p-3 rounded-full border border-gray-600 hover:border-green-400 hover:bg-green-400 hover:text-slate-900 transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={18} className="md:w-5 md:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-green-400 shadow-2xl">
                <img
                  src="/Images/loogo.png"
                  alt="Souma Goswami"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 -right-3 w-6 h-6 md:w-8 md:h-8 bg-green-400 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-3 -left-3 w-5 h-5 md:w-6 md:h-6 bg-blue-400 rounded-full"
              />
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -left-6 w-4 h-4 md:w-5 md:h-5 bg-purple-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 md:mt-32"
        >
          <motion.div
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <motion.h2
                variants={fadeInVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4"
              >
                My <span className="text-green-400">Services</span>
              </motion.h2>
              <motion.p
                variants={fadeInVariants}
                className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
              >
                Comprehensive solutions tailored to your needs, from web development to custom integrations
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-400 transition-all duration-300 h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${service.color}"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} shadow-lg`}>
                        <service.icon size={28} className="text-white" />
                      </div>
                      <ArrowRight size={20} className="text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span key={i} className="text-xs md:text-sm px-2 py-1 bg-slate-700/50 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-green-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;