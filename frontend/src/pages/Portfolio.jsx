import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Eye, Code } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'One Dream Esports Website',
      description: 'A comprehensive esports platform for tournament management and community engagement. Built with modern web technologies to provide seamless user experience.',
      longDescription: 'This is my first major frontend project showcasing my skills in HTML5, CSS3, and JavaScript. The website features responsive design, interactive elements, and modern UI components. It serves as the official platform for One Dream Esports tournaments and community activities.',
      image: '/Images/ode.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://onedreamesports.games/',
      githubUrl: 'https://github.com/Xecutegg/One-Dream-Webpage',
      category: 'Web Development',
      featured: true,
    },
    {
      id: 2,
      title: 'Coming Soon Project',
      description: 'An exciting new project currently in development. Stay tuned for more details about this innovative solution.',
      longDescription: 'This upcoming project will showcase advanced web development techniques and modern design principles. Currently in the planning and development phase, it promises to deliver exceptional user experience and cutting-edge functionality.',
      image: '/Images/soon.png',
      technologies: ['React', 'Next.js', 'Javascript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Development',
      featured: false,
    },
  ];

  const categories = ['All', 'Web Development', 'Design', 'Esports'];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
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
            Latest <span className="text-green-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my portfolio of web development projects, design work, and esports management solutions. 
            Each project represents my passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Main Project Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Project Details */}
          <motion.div variants={itemVariants} className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-green-400 text-lg font-bold">
                    {String(projects[currentProject].id).padStart(2, '0')}
                  </span>
                  <div className="h-px bg-green-400 flex-1" />
                  <span className="text-sm text-gray-400 bg-slate-800 px-3 py-1 rounded-full">
                    {projects[currentProject].category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold">
                  {projects[currentProject].title}
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  {projects[currentProject].longDescription}
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-400">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={projects[currentProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-green-400 text-slate-900 font-semibold rounded-full hover:bg-green-300 transition-colors duration-200 group"
                  >
                    <Eye size={18} className="mr-2" />
                    Live Preview
                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.a>

                  <motion.a
                    href={projects[currentProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-full hover:border-green-400 hover:text-green-400 transition-all duration-200 group"
                  >
                    <Github size={18} className="mr-2" />
                    GitHub Repository
                    <Code size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Project Image Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative overflow-hidden rounded-xl bg-slate-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentProject}
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-96 object-cover"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-4">
                <motion.button
                  onClick={prevProject}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-green-400 hover:text-slate-900 transition-all duration-200"
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                  onClick={nextProject}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-green-400 hover:text-slate-900 transition-all duration-200"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>

              {/* Project Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentProject ? 'bg-green-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            All <span className="text-green-400">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-green-400 transition-all duration-300 group cursor-pointer"
                onClick={() => setCurrentProject(index)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-400 text-sm font-medium">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-1 bg-green-400 text-slate-900 text-xs font-bold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700 text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
