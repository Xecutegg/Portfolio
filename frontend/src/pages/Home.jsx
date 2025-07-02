import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Instagram, MessageCircle, Code,Bot, Server, Database, Paintbrush,  } from 'lucide-react';

const Home = () => {
  const roles = [
    'Founder Of One Dream',
    'Website Developer', 
    'Youtuber',
    'Student'
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
      color: 'blue',
    },
    {
      icon: Bot,
      title: 'Discord Bot Development',
      description: 'I create custom Discord bots with advanced features, moderation, games, and integrations to enhance your server experience.',
      features: ['Custom Commands', 'Moderation Tools', 'Database Integration', 'Third-party APIs'],
      color: 'purple',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'I develop robust server-side applications, RESTful APIs, and microservices with secure authentication and data management.',
      features: ['RESTful APIs', 'Authentication Systems', 'Database Design', 'Cloud Deployment'],
      color: 'indigo',
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'I design and implement efficient database architectures using SQL and NoSQL databases for optimal performance.',
      features: ['MySQL/PostgreSQL', 'MongoDB', 'Database Optimization', 'Data Migration'],
      color: 'yellow',
    },
    {
      icon: Paintbrush,
      title: 'Frontend Development',
      description: 'I create responsive and interactive user interfaces using modern frameworks and libraries with pixel-perfect designs.',
      features: ['React/Vue.js', 'Responsive Design', 'Modern CSS', 'Performance Optimization'],
      color: 'pink',
    },
    {
      icon: MessageCircle,
      title: 'API Integration',
      description: 'I integrate third-party APIs and services to extend functionality and connect your applications with external platforms.',
      features: ['REST API Integration', 'Payment Gateways', 'Social Media APIs', 'Webhook Implementation'],
      color: 'red',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Souma <span className="text-green-400">Goswami</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-xl md:text-2xl text-gray-300">I'm a</p>
              <div className="h-12 overflow-hidden">
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
                      className="h-12 flex items-center text-xl md:text-2xl font-semibold text-green-400"
                    >
                      {role}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              I'm Souma Goswami, aka Xecute, a BGMI esports organizer, web developer, and video editor. 
              I own One Dream Esports, manage tournaments, design Discord servers, and build web projects 
              using modern technologies. Passionate about esports and coding innovation.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-400 text-slate-900 font-semibold rounded-full hover:bg-green-300 transition-all duration-200 group"
              >
                Hire Me
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border border-gray-600 hover:border-green-400 hover:bg-green-400 hover:text-slate-900 transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-green-400 shadow-2xl">
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
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
              />
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-32"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            My <span className="text-green-400">Services</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-400 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon size={40} className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <ArrowRight size={24} className="text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
