import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Palette, Trophy, Smartphone, Settings, MessageCircle, Video, Paintbrush, ArrowRight, Server, Bot, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Complete web application development using modern MERN stack with scalable architecture and production-ready performance.',
      features: [
        'React (Vite) Frontend',
        'Node.js & Express Backend',
        'MongoDB Database',
        'API Development'
      ],
      color: 'from-lime-500 to-lime-500',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Build high-performance mobile apps for Android and iOS using React Native, Expo and NativeWind.',
      features: [
        'React Native (Expo)',
        'NativeWind Styling',
        'Android & iOS Support',
        'App Performance Optimization'
      ],
      color: 'from-lime-500 to-lime-500',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Secure and scalable backend systems with clean architecture, authentication and efficient data handling.',
      features: [
        'API Development',
        'Authentication Systems',
        'Server Logic & Integration',
        'Performance Optimization'
      ],
      color: 'from-lime-500 to-lime-500',
    },
    {
      icon: Palette,
      title: 'Frontend Development',
      description: 'Modern, responsive and visually appealing UI with smooth user experience and optimized performance.',
      features: [
        'React (Vite)',
        'Tailwind CSS',
        'Responsive Design',
        'UI/UX Optimization'
      ],
      color: 'from-lime-500 to-lime-500',
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
    <section className="bg-zinc-900 min-h-screen pt-20 pb-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-20 mt-[-55px]"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Professional <span className="text-lime-500">Services</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl lg:max-w-3xl mx-auto px-4">
            Comprehensive digital solutions tailored to your needs, from web development to custom integrations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              className="relative h-full"
            >
              {/* Main Card */}
              <div className="relative h-full bg-zinc-900/40 rounded-2xl border border-zinc-700/50 p-6 sm:p-7 lg:p-8 flex flex-col overflow-hidden hover:border-lime-500/50 transition-all duration-300">
                {/* Colored Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}></div>

                {/* Icon Section */}
                <div className="relative flex items-start justify-between mb-6 lg:mb-7">
                  <div className="p-3 rounded-xl bg-lime-500/15 border border-lime-500/30">
                    <service.icon size={28} className="text-lime-500" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-lime-500/60 bg-lime-500/10 px-2 py-1 rounded-lg">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 lg:mb-4">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 text-sm sm:text-base mb-6 lg:mb-7 leading-relaxed">
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
                        <div className="w-2 h-2 rounded-full bg-lime-500 mr-3 mt-1.5 flex-shrink-0" />
                        <span className="text-zinc-300 text-sm sm:text-base">{feature}</span>
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
              className="text-center p-4 rounded-xl bg-zinc-900/30 border border-zinc-700/30 hover:border-lime-500/40 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-lime-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-zinc-400">
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
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl border border-zinc-700/50 bg-zinc-900/40 p-6 sm:p-8 lg:p-12 hover:border-lime-500/30 transition-all duration-300">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
                Ready to bring your <span className="text-lime-500">project to life</span>?
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg mb-6 lg:mb-8">
                Let's collaborate to create something exceptional with cutting-edge technology and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="block">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 lg:py-4 bg-lime-500 hover:bg-lime-600 text-black font-semibold rounded-xl lg:rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 group hover:scale-105">
                    Get Started Today
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </Link>
                <Link to="/portfolio" className="block">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 lg:py-4 bg-zinc-800 border border-zinc-700 text-zinc-300 font-semibold rounded-xl lg:rounded-2xl hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all duration-300">
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