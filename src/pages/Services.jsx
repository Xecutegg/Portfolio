import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Palette, Trophy, MessageCircle, Video, Paintbrush, ArrowRight, Server, Bot, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Complete end-to-end website development with modern frameworks, clean architecture, and production-ready performance.',
      features: [
        'React Frontend',
        'Node.js / Express Backend',
        'MongoDB Database Integration',
        'Custom APIs'
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Bot,
      title: 'Discord Bot Development',
      description: 'Advanced, customizable Discord bots built for communities, esports, management, and automation.',
      features: [
        'Custom Commands & Systems',
        'Moderation & Anti-Spam Tools',
        'Scrims / Tournament Automation'
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Secure, scalable backend systems with optimized APIs, authentication, and smooth data flow.',
      features: [
        'API Development',
        'Authentication & Authorization',
        'Server-Side Logic & Integrations'
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Database,
      title: 'Database Engineering',
      description: 'Efficient database design and optimization for fast queries, reliability, and structured data handling.',
      features: [
        'MongoDB & Mongoose',
        'Query Optimization',
        'Data Structuring & Migration'
      ],
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Paintbrush,
      title: 'Frontend Development',
      description: 'Beautiful, modern, and responsive user interfaces with smooth interactions and pixel-perfect design.',
      features: [
        'React & Component Architecture',
        'Responsive Layouts',
        'Tailwind CSS & Modern Styling',
        'UI Performance Optimization'
      ],
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <section className="bg-gray-900 min-h-screen pt-20 pb-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-20 mt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-blue-400 text-sm font-medium">What I Offer</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Professional <span className="text-blue-400">Services</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl lg:max-w-3xl mx-auto px-4">
            Comprehensive digital solutions tailored to your needs, from web development to custom integrations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              className="relative h-full"
            >
              {/* Main Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 sm:p-7 lg:p-8 flex flex-col overflow-hidden">
                {/* Colored Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}></div>

                {/* Icon Section */}
                <div className="relative flex items-start justify-between mb-6 lg:mb-7">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                    <service.icon size={28} className="text-white" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-blue-400/60 bg-blue-400/10 px-2 py-1 rounded-lg">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 lg:mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base mb-6 lg:mb-7 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 lg:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        custom={featureIndex}
                        variants={featureItemVariants}
                        className="flex items-start text-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 mt-1.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { label: 'Projects', value: '10+' },
            { label: 'Clients', value: '30+' },
            { label: 'Experience', value: '3 Years' },
            { label: 'Technologies', value: '6+' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/30"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-18"
        >
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 sm:p-8 lg:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
                Ready to bring your <span className="text-blue-400">project to life</span>?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-6 lg:mb-8">
                Let's collaborate to create something exceptional with cutting-edge technology and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="block">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl lg:rounded-2xl flex items-center justify-center gap-2">
                    Get Started Today
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link to="/portfolio" className="block">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 lg:py-4 bg-gray-800/50 border border-gray-700 text-gray-300 font-semibold rounded-xl lg:rounded-2xl">
                    View My Work
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;