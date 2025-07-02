import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Palette, Trophy, MessageCircle, Video, Paintbrush, ArrowRight, Server, Bot, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Web Development',
      description: 'End-to-end web solutions with modern frameworks and scalable architecture for optimal performance.',
      features: ['React/Next.js Frontend', 'Node.js/Express Backend', 'Database Integration', 'API Development'],
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-400'
    },
    {
      icon: Bot,
      title: 'Discord Bot Development',
      description: 'Custom bots with advanced features to enhance community engagement and server management.',
      features: ['Custom Commands', 'Moderation Tools', 'Database Integration', 'Third-party APIs'],
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-400'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust server-side solutions with secure authentication and efficient data handling.',
      features: ['RESTful APIs', 'Authentication Systems', 'Database Design', 'Cloud Deployment'],
      color: 'from-indigo-500 to-indigo-600',
      iconColor: 'text-indigo-400'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Optimized database architectures for performance, scalability and reliability.',
      features: ['MySQL/PostgreSQL', 'MongoDB', 'Database Optimization', 'Data Migration'],
      color: 'from-yellow-500 to-yellow-600',
      iconColor: 'text-yellow-400'
    },
    {
      icon: Paintbrush,
      title: 'Frontend Development',
      description: 'Beautiful, responsive interfaces with modern frameworks and pixel-perfect designs.',
      features: ['React/Vue.js', 'Responsive Design', 'Modern CSS', 'Performance Optimization'],
      color: 'from-pink-500 to-pink-600',
      iconColor: 'text-pink-400'
    },
    {
      icon: MessageCircle,
      title: 'API Integration',
      description: 'Seamless connection between your application and external services.',
      features: ['REST API Integration', 'Payment Gateways', 'Social Media APIs', 'Webhook Implementation'],
      color: 'from-red-500 to-red-600',
      iconColor: 'text-red-400'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="min-h-screen pt-20 pb-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            My <span className="text-green-400">Services</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs, from web development to custom integrations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative overflow-hidden h-full"
            >
              <div className="h-full bg-slate-800 p-6 rounded-xl border border-slate-700 group-hover:border-green-400 transition-all duration-300 flex flex-col">
                {/* Icon with gradient background */}
                <div className={`mb-5 p-3 rounded-lg bg-gradient-to-br ${service.color} w-12 h-12 flex items-center justify-center shadow-lg`}>
                  <service.icon size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow button */}
                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg text-sm md:text-base hover:bg-green-400 hover:text-slate-900 transition-all duration-200"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 p-8 rounded-2xl border border-slate-700">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                Ready to bring your project to life?
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-6">
                Let's collaborate to create something exceptional that stands out from the competition with cutting-edge technology and innovative solutions.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 md:px-8 py-3 bg-green-400 text-slate-900 font-semibold rounded-full hover:bg-green-300 transition-colors duration-200 group"
                >
                  Get Started Today
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;