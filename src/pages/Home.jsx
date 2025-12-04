import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, MessageCircle, Instagram, Code, Bot, Server, Database, Paintbrush, User, Info, Calendar, MapPin, Globe, Briefcase, Phone, Mail } from 'lucide-react';

const IMAGE_SRC = "logo2.png";

const Home = () => {
  const roles = [
    'Human',
    'Full Stack Developer',
    'Discord Bot Developer',
    'Founder Of One Dream Esports',
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Xecutegg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/souma-goswami-86032b257/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://discord.gg/WVThZG7Q5X', label: 'Discord' },
    { icon: Instagram, href: 'https://www.instagram.com/xecute.gg_/', label: 'Instagram' },
  ];

  const personalInfo = [
    { label: 'Real Name', value: 'Souma Goswami', icon: User },
    { label: 'Aka', value: 'Xecute', icon: Info },
    { label: 'Gender', value: 'Male', icon: User },
    { label: 'Age', value: '22 Years', icon: Calendar },
    { label: 'Email', value: 'soumagoswami2002@gmail.com', icon: Mail },
    { label: 'Languages', value: 'Hindi, English, Bengali', icon: Globe },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        delayChildren: 0.1, // Reduced from 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced y from 30 to 20
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduced from 0.6
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center pt-25 pb-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mt-10"
        >
          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Souma <span className="text-blue-400">Goswami</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-lg md:text-xl text-gray-300">I'm</p>
              <div className="h-12 md:h-14 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -48, -96, -144, 0] }}
                  transition={{
                    duration: 6, // Reduced from 8
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="space-y-3"
                >
                  {roles.map((role, index) => (
                    <div
                      key={index}
                      className="h-12 md:h-14 flex items-center text-xl md:text-2xl font-semibold text-blue-400"
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
                className="inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-3 bg-blue-400 text-slate-900 font-semibold rounded-full hover:bg-blue-300 transition-all duration-200 group"
              >
                Hire Me
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-3 border border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400/10 transition-all duration-200 group"
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
                  whileHover={{ scale: 1.05, y: -1 }} // Reduced from scale: 1.1, y: -2
                  whileTap={{ scale: 0.98 }} // Reduced from 0.95
                  className="p-2 md:p-3 rounded-full border border-gray-600 hover:border-blue-400 hover:bg-blue-400 hover:text-slate-900 transition-all duration-200"
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
              whileHover={{ scale: 1.01 }} // Reduced from 1.02
              transition={{ duration: 0.2 }} // Reduced from 0.3
              className="relative"
            >
              {/* Gray background circle */}
              <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gray-700 to-gray-800"></div>

              {/* Image circle on top */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-600">
                <img
                  src={IMAGE_SRC}
                  alt="Souma Goswami"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Floating elements with reduced motion */}
              <motion.div
                animate={{ y: [0, -5, 0] }} // Reduced from -10 to -5
                transition={{ duration: 1.5, repeat: Infinity }} // Reduced from 2
                className="absolute -top-3 -right-3 w-6 h-6 md:w-8 md:h-8 bg-blue-400 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 5, 0] }} // Reduced from 10 to 5
                transition={{ duration: 2, repeat: Infinity }} // Reduced from 2.5
                className="absolute -bottom-3 -left-3 w-5 h-5 md:w-6 md:h-6 bg-blue-400 rounded-full"
              />
              <motion.div
                animate={{ x: [0, 5, 0] }} // Reduced from 10 to 5
                transition={{ duration: 2, repeat: Infinity }} // Reduced from 3
                className="absolute top-1/2 -left-6 w-4 h-4 md:w-5 md:h-5 bg-purple-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Reduced from -100px
          className="w-full py-16 px-5 md:px-16 mt-10"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block bg-blue-900/30 text-blue-400 py-1 px-4 rounded-full text-sm font-medium border border-blue-700/50">
                About Me
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-4xl font-bold text-white mb-6"
            >
              Welcome to <span className="text-blue-400">My Portfolio</span> Discover My Journey!
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 mb-8"
            >
              <p className="text-gray-300 leading-relaxed">
                I'm <span className="text-blue-400 font-semibold">Souma Goswami</span>, also known as <span className="text-blue-400 font-semibold">Xecute</span> — a passionate full-stack web developer based in West Bengal, India. I specialize in building modern, scalable, and high-performance websites with clean code and smooth user experience at the core.
              </p>

              <p className="text-gray-300 mt-4 leading-relaxed">
                As the founder of <span className="text-blue-400 font-semibold">One Dream Esports</span>, I aim to support underdog teams and uplift rising talents across the esports community. Beyond development, I enjoy learning, solving real problems through technology, and crafting meaningful digital experiences that help businesses and creators grow.
              </p>

              <p className="text-blue-400 font-semibold mt-6">
                #LetsBuildSomethingGreatTogether
              </p>
            </motion.div>

            {/* Personal Info Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
            >
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, y: -2 }} // Reduced motion
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <info.icon size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-102 shadow-lg shadow-blue-500/25"
              >
                Hire Me For Your Next Project!
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Home;