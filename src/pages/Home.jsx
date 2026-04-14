import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, MessageCircle, Instagram, Code, Bot, Server, Database, Paintbrush, User, Info, Calendar, MapPin, Globe, Briefcase, Phone, Mail } from 'lucide-react';

const IMAGE_SRC = "logo2.png";

const Home = () => {
  const roles = [
    'Developer',
    'Web Developer',
    'App Developer',
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
    { label: 'Age', value: '24 Years', icon: Calendar },
    { label: 'Email', value: 'soumagoswami2002@gmail.com', icon: Mail },
    { label: 'Languages', value: 'Hindi, English, Bengali', icon: Globe },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative bg-zinc-900 min-h-screen flex items-center justify-center pt-25 pb-10 px-4 sm:px-6 overflow-hidden">

      <div className="container mx-auto max-w-7xl relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mt-[-50px]"
        >
          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Souma <span className="text-lime-500">Goswami</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-lg md:text-xl text-zinc-300">I'm</p>
              <div className="h-12 md:h-14 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -48, -96, -144, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="space-y-3"
                >
                  {roles.map((role, index) => (
                    <div
                      key={index}
                      className="h-12 md:h-14 flex items-center text-xl md:text-2xl font-semibold text-lime-500"
                    >
                      {role}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl"
            >
              I'm Souma Goswami, also known as Xecute — a full-stack web developer and Discord bot developer.
              I specialize in building powerful web applications and advanced Discord bots using modern technologies.
              Passionate about clean code, creative solutions, and delivering real value through development.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-3 bg-lime-500 text-black font-semibold rounded-lg hover:bg-lime-600 transition-all duration-300 group transform hover:scale-105"
              >
                Hire Me
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-3 border border-lime-500 text-lime-500 font-semibold rounded-lg hover:bg-lime-500/10 transition-all duration-300 group"
              >
                My Services
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
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
                  className="p-2 md:p-3 rounded-lg bg-zinc-800 text-zinc-400 hover:bg-lime-500 hover:text-black transition-all duration-300"
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
              {/* Gray background circle */}
              <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800"></div>

              {/* Image circle on top */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-lime-500">
                <img
                  src={IMAGE_SRC}
                  alt="Souma Goswami"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 -right-3 w-6 h-6 md:w-8 md:h-8 bg-lime-500 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-3 -left-3 w-5 h-5 md:w-6 md:h-6 bg-lime-500 rounded-full"
              />
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-1/2 -left-6 w-4 h-4 md:w-5 md:h-5 bg-lime-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full py-16 px-5 md:px-16 mt-10"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block bg-lime-500/20 text-lime-500 py-1 px-4 rounded-full text-sm font-medium border border-lime-500/50">
                About Me
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-4xl font-bold text-white mb-6"
            >
              Welcome to <span className="text-lime-500">My Portfolio</span> Discover My Journey!
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-700 mb-8 hover:border-lime-500/50 transition-all duration-300"
            >
              <p className="text-zinc-300 leading-relaxed">
                I'm <span className="text-lime-500 font-semibold">Souma Goswami</span>, also known as <span className="text-lime-500 font-semibold">Xecute</span> — a passionate full-stack web developer based in West Bengal, India. I specialize in building modern, scalable, and high-performance websites with clean code and smooth user experience at the core.
              </p>

              <p className="text-zinc-300 mt-4 leading-relaxed">
                As the founder of <span className="text-lime-500 font-semibold">One Dream Esports</span>, I aim to support underdog teams and uplift rising talents across the esports community. Beyond development, I enjoy learning, solving real problems through technology, and crafting meaningful digital experiences that help businesses and creators grow.
              </p>

              <p className="text-lime-500 font-semibold mt-6">
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
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-700 hover:border-lime-500 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <info.icon size={20} className="text-lime-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-zinc-400 text-sm">{info.label}</p>
                      <p className="text-zinc-300 font-semibold">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <Link
                to="/contact"
                className="inline-block bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Hire Me For Your Next Project!
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Home;