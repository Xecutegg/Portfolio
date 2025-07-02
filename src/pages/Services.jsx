import { motion } from 'framer-motion';
import { Code, Palette, Trophy, MessageCircle, Video, Paintbrush, ArrowRight, Server, Bot, Database } from 'lucide-react';

const Services = () => {
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

  const colorClasses = {
    blue: {
      border: 'hover:border-blue-400',
      icon: 'group-hover:text-blue-400',
      title: 'group-hover:text-blue-400',
      button: 'hover:bg-blue-400',
    },
    purple: {
      border: 'hover:border-purple-400',
      icon: 'group-hover:text-purple-400',
      title: 'group-hover:text-purple-400',
      button: 'hover:bg-purple-400',
    },
    pink: {
      border: 'hover:border-pink-400',
      icon: 'group-hover:text-pink-400',
      title: 'group-hover:text-pink-400',
      button: 'hover:bg-pink-400',
    },
    yellow: {
      border: 'hover:border-yellow-400',
      icon: 'group-hover:text-yellow-400',
      title: 'group-hover:text-yellow-400',
      button: 'hover:bg-yellow-400',
    },
    indigo: {
      border: 'hover:border-indigo-400',
      icon: 'group-hover:text-indigo-400',
      title: 'group-hover:text-indigo-400',
      button: 'hover:bg-indigo-400',
    },
    red: {
      border: 'hover:border-red-400',
      icon: 'group-hover:text-red-400',
      title: 'group-hover:text-red-400',
      button: 'hover:bg-red-400',
    },
  };

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
  };

  return (
    <section className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-green-400">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of digital services to help bring your ideas to life. 
            From web development to esports management, I've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`group bg-slate-800 p-6 rounded-xl border border-slate-700 ${colors.border} transition-all duration-300`}
              >
                {/* Icon and Arrow */}
                <div className="flex justify-between items-start mb-4">
                  <service.icon 
                    size={40} 
                    className={`${colors.icon} transition-colors duration-300`} 
                  />
                  <button className={`p-2 rounded-full border border-gray-600 ${colors.button} hover:text-slate-900 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0`}>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${colors.title} transition-colors duration-300`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 p-8 rounded-2xl border border-green-400/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your vision to life. I'm here to help you create 
              something amazing that stands out from the competition.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-green-400 text-slate-900 font-semibold rounded-full hover:bg-green-300 transition-colors duration-200 group"
            >
              Get Started Today
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
