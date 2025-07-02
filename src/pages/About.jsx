import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Info,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  ArrowRight,
  Monitor,
  Bot,
  Palette,
  Trophy,
  Video,
  BookOpen,
  Database,
  Laptop,
  Shield,
  Zap,
  Wrench,
  Settings,
  Smartphone,
  Link,
  GitBranch,
  Server
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'about', label: 'About Me', icon: User },
  ];

  const experiences = [
    {
      year: '2025 - Present',
      title: 'Full Stack Developer',
      company: 'Freelance & Projects',
      description: 'Developing full-stack web applications using React, Node.js, Express, and MongoDB. Building responsive and interactive user interfaces.',
      icon: Monitor
    },
    {
      year: '2024 - Present',
      title: 'Discord Bot Developer',
      company: 'Custom Bot Development',
      description: 'Created advanced Discord bots using Discord.js and Python, implementing features like moderation, music, economy systems, scrims, tournaments and custom commands.',
      icon: Bot
    },
    {
      year: '2023-2024',
      title: 'Frontend Developer',
      company: 'Web Development Projects',
      description: 'Built modern responsive websites using React, Vite, Tailwind CSS, and implemented animations with Framer Motion.',
      icon: Palette
    },
    {
      year: '2021-2022',
      title: 'Esports Tournament Organizer',
      company: 'One Dream Esports',
      description: 'Organized BGMI scrims and tournaments for 4 years, developing management systems and automated Discord bots for player coordination.',
      icon: Trophy
    },
    {
      year: '2019-2020',
      title: 'Content Creator & Developer',
      company: 'YouTube & Personal Projects',
      description: 'Created tech content while learning web development, building simple websites and experimenting with JavaScript and automation tools.',
      icon: Video
    },
  ];

  const education = [
    {
      year: '2025 - Present',
      title: 'Full Stack Web Development',
      company: 'Self-Taught & Online Courses',
      description: 'Learning MERN stack (MongoDB, Express.js, React, Node.js), RESTful APIs, database design, and deployment strategies.',
      icon: BookOpen
    },
    {
      year: '2024 - Present',
      title: 'Discord Bot Development',
      company: 'Discord.js & Python Programming',
      description: 'Mastering Discord.js library, Python discord.py, database integration, and advanced bot features like slash commands and embeds.',
      icon: Bot
    },
    {
      year: '2023 - Present',
      title: 'Frontend Development Specialization',
      company: 'Modern Web Technologies',
      description: 'Advanced React concepts, state management (Redux/Context), Javascript, Tailwind CSS, and animation libraries like Framer Motion.',
      icon: Laptop
    },
    {
      year: '2022-2024',
      title: 'Bachelor of Arts (BA)',
      company: 'K.D. College',
      description: 'Completed BA while simultaneously learning programming fundamentals, algorithms, and web development technologies.',
      icon: GraduationCap
    },
    {
      year: '2021-2022',
      title: 'Programming Fundamentals',
      company: 'Self-Learning & Online Resources',
      description: 'Started with HTML, CSS, JavaScript basics, Git version control, and understanding of software development lifecycle.',
      icon: Code
    },
  ];

  const skills = [
    { name: 'HTML5', level: 85, icon: Code },
    { name: 'CSS3', level: 85, icon: Palette },
    { name: 'JavaScript', level: 55, icon: Zap },
    { name: 'React.js', level: 45, icon: Settings },
    { name: 'Node.js & Express', level: 55, icon: Server },
    { name: 'MongoDB & Database Design', level: 75, icon: Database },
    { name: 'Bot Development', level: 80, icon: Bot },
    { name: 'Python Programming', level: 55, icon: Code },
    { name: 'Tailwind CSS', level: 85, icon: Wrench },
    { name: 'Git & GitHub', level: 80, icon: GitBranch },
    { name: 'Responsive Web Design', level: 100, icon: Smartphone },
  ];

  const personalInfo = [
    { label: 'Name', value: 'Souma Goswami', icon: User },
    { label: 'Aka', value: 'Xecute', icon: Info },
    { label: 'Gender', value: 'Male', icon: User },
    { label: 'Age', value: '22 Years Old', icon: Calendar },
    { label: 'Status', value: 'Single', icon: Info },
    { label: 'City', value: 'Kolkata/Midnapore', icon: MapPin },
    { label: 'Nationality', value: 'Indian', icon: Globe },
    { label: 'Availability', value: 'Full Time', icon: Briefcase },
    { label: 'Freelance', value: 'Available', icon: Briefcase },
    { label: 'Mobile No', value: '+91 9064774963', icon: Phone },
    { label: 'Email', value: 'founder@xecute.me', icon: Mail },
    { label: 'Languages', value: 'Hindi, English, Bengali', icon: Globe },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Xecutegg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/souma-goswami-86032b257/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://discord.gg/WVThZG7Q5X', label: 'Discord' },
    { icon: Instagram, href: 'https://www.instagram.com/xecute.gg_/', label: 'Instagram' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                My <span className="text-green-400">Experience</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Explore my journey in full-stack development, Discord bot creation, and modern web technologies—delivering scalable solutions.
              </p>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-400 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-400/10 rounded-lg border border-green-400/20">
                      <exp.icon size={24} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-green-400 text-sm font-medium">{exp.year}</div>
                      <h3 className="text-lg md:text-xl font-semibold mt-1">{exp.title}</h3>
                      <div className="text-gray-400 text-sm mb-2">{exp.company}</div>
                      <p className="text-gray-300 text-sm md:text-base">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                My <span className="text-green-400">Education</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                My educational journey in programming, from fundamentals to advanced full-stack development and specialized bot creation.
              </p>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-400 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-400/10 rounded-lg border border-green-400/20">
                      <edu.icon size={24} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-green-400 text-sm font-medium">{edu.year}</div>
                      <h3 className="text-lg md:text-xl font-semibold mt-1">{edu.title}</h3>
                      <div className="text-gray-400 text-sm mb-2">{edu.company}</div>
                      <p className="text-gray-300 text-sm md:text-base">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                My <span className="text-green-400">Skills</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Technical expertise in modern web development, backend technologies, and specialized programming skills for diverse applications.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-green-400 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-400/10 rounded-lg border border-green-400/20">
                      <skill.icon size={20} className="text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-base md:text-lg font-semibold">{skill.name}</h3>
                        <span className="text-green-400 font-medium text-sm md:text-base">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 mt-1">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'about':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                About <span className="text-green-400">Me</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Here is my About Me section! Feel free to check it out, and you can also contact me anytime.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-green-400 transition-all duration-200 flex items-center gap-3"
                >
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <info.icon size={18} className="text-green-400" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs md:text-sm">{info.label}</span>
                    <p className="text-white font-medium text-sm md:text-base">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-lg md:text-xl font-semibold mb-3">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:bg-green-400 hover:border-green-400 hover:text-slate-900 transition-all duration-200"
                  >
                    <link.icon size={18} />
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen pt-20 pb-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Why Hire <span className="text-green-400">Me?</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Full-stack developer specializing in modern web technologies, Discord bot development, and scalable application architecture.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-64"
          >
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-2 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-green-400 text-slate-900'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="font-medium text-sm md:text-base">{tab.label}</span>
                  {activeTab === tab.id && <ArrowRight size={16} className="ml-auto" />}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
            className="flex-1"
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;