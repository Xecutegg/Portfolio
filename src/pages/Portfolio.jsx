import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Eye, Code } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'One Dream Esports',
      description: 'A modern esports platform for BGMI tournaments, scrims, and community management.',
      longDescription: 'One Dream Esports is a full-fledged competitive gaming platform built with a focus on clean UI, responsive layouts, and smooth user experience. This project showcases my front-end development skills using HTML, CSS, JavaScript, and modern styling techniques. The website hosts BGMI tournaments, provides team registrations, scrims updates, event information, and acts as the official hub for the One Dream Esports community.',
      image: '/image copy.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind'],
      liveUrl: 'https://onedreamesports.in',
      category: 'Web Development',
      featured: true,
    },

    {
      id: 2,
      title: 'SecureX',
      description: 'A comprehensive esports platform for tournament management and community engagement.',
      longDescription: 'This is my first major frontend project showcasing my skills in HTML5, CSS3, and JavaScript. The website features responsive design, interactive elements, and modern UI components. It serves as the official platform for One Dream Esports tournaments and community activities.',
      image: '/securex.png',
      technologies: ['React', 'Tailwind', 'JavaScript', 'MongoDB'],
      liveUrl: 'https://securexbot.in',
      category: 'Web Development',
      featured: true,
    },
    {
      id: 3,
      title: 'EliteQ',
      description: 'An exciting new project currently in development. Stay tuned for more details.',
      longDescription: 'This upcoming project will showcase advanced web development techniques and modern design principles. Currently in the planning and development phase, it promises to deliver exceptional user experience and cutting-edge functionality.',
      image: '/image.png',
      technologies: ['React', 'Tailwind', 'Javascript', 'MongoDB'],
      liveUrl: 'https://eliteqbot.in',
      category: 'Web Development',
      featured: false,
    },
    {
      id: 4,
      title: 'SecureX Bot Design',
      description: 'A comprehensive design system for consistent UI across products.',
      longDescription: 'Created a scalable design system with reusable components, typography scales, and color systems. Implemented with Storybook for documentation and collaboration between designers and developers.',
      image: '/securexbot.png',
      technologies: ['Node', 'Javascript', 'MongoDB'],
      liveUrl: 'https://discord.com/oauth2/authorize?client_id=1378379564207706182',
      category: 'Design',
      featured: true,
    },
    {
      id: 5,
      title: 'EliteQ Bot Design',
      description: 'A comprehensive design system for consistent UI across products.',
      longDescription: 'Created a scalable design system with reusable components, typography scales, and color systems. Implemented with Storybook for documentation and collaboration between designers and developers.',
      image: '/eliteqbot.png',
      technologies: ['Python', 'PostgreSQL'],
      liveUrl: 'https://discord.com/oauth2/authorize?client_id=1364516570964955186',
      category: 'Design',
      featured: true,
    },
  ];

  const categories = ['All', 'Web Development', 'Design'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
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
    <section className="min-h-screen pt-16 md:pt-24 pb-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl mt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            My <span className="text-blue-400">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore my portfolio showcasing web development projects, creative designs, and innovative solutions.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentProject(0);
              }}
              className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-200 ${activeCategory === category
                  ? 'bg-blue-400 text-slate-900 font-medium'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Main Project Display - Only show if projects exist */}
        {filteredProjects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16"
          >
            {/* Project Details */}
            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredProjects[currentProject].id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <span className="text-blue-400 text-base md:text-lg font-bold">
                      {String(filteredProjects[currentProject].id).padStart(2, '0')}
                    </span>
                    <div className="h-px bg-blue-400 flex-1" />
                    <span className="text-xs md:text-sm text-gray-400 bg-gray-800 px-2 md:px-3 py-1 rounded-full">
                      {filteredProjects[currentProject].category}
                    </span>
                    {filteredProjects[currentProject].featured && (
                      <span className="text-xs md:text-sm bg-blue-400 text-slate-900 px-2 md:px-3 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {filteredProjects[currentProject].title}
                  </h2>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {filteredProjects[currentProject].longDescription}
                  </p>

                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-base md:text-lg font-semibold text-blue-400">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[currentProject].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 md:px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <motion.a
                      href={filteredProjects[currentProject].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-blue-400 text-slate-900 font-medium rounded-full hover:bg-blue-300 transition-colors duration-200 group"
                    >
                      <Eye size={16} className="mr-2" />
                      Live Preview
                      <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Project Image Carousel */}
            <motion.div
              variants={itemVariants}
              className="relative order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-auto"
            >
              <div className="relative h-full overflow-hidden rounded-xl bg-gray-800 border border-gray-700">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={filteredProjects[currentProject].id}
                    src={filteredProjects[currentProject].image}
                    alt={filteredProjects[currentProject].title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {filteredProjects.length > 1 && (
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4">
                    <motion.button
                      onClick={prevProject}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 sm:p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-green-400 hover:text-slate-900 transition-all duration-200"
                      aria-label="Previous project"
                    >
                      <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                    </motion.button>

                    <motion.button
                      onClick={nextProject}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 sm:p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-green-400 hover:text-slate-900 transition-all duration-200"
                      aria-label="Next project"
                    >
                      <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                    </motion.button>
                  </div>
                )}

                {/* Project Indicators */}
                {filteredProjects.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {filteredProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${index === currentProject ? 'bg-blue-400' : 'bg-white/30'
                          }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 md:py-16 bg-gray-800 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-2">
              No projects found in this category
            </h3>
            <p className="text-gray-500 text-sm md:text-base">
              Check back later or view other categories
            </p>
          </motion.div>
        )}

        {/* All Projects Grid */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
              More <span className="text-blue-400">Projects</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 group cursor-pointer ${currentProject === index ? 'ring-2 ring-blue-400' : ''
                    }`}
                  onClick={() => setCurrentProject(index)}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium">
                        Click to view details
                      </span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <span className="text-blue-400 text-xs md:text-sm font-medium">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-1 bg-blue-400 text-slate-900 text-xs font-bold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-gray-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-700 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;