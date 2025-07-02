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
  MessageCircle
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
    },
    {
      year: '2024 - Present',
      title: 'Discord Bot Developer',
      company: 'Custom Bot Development',
      description: 'Created advanced Discord bots using Discord.js and Python, implementing features like moderation, music, economy systems, scrims, tournaments and custom commands.',
    },
    {
      year: '2023-2024',
      title: 'Frontend Developer',
      company: 'Web Development Projects',
      description: 'Built modern responsive websites using React, Vite, Tailwind CSS, and implemented animations with Framer Motion.',
    },
    {
      year: '2021-2022',
      title: 'Esports Tournament Organizer',
      company: 'One Dream Esports',
      description: 'Organized BGMI scrims and tournaments for 4 years, developing management systems and automated Discord bots for player coordination.',
    },
    {
      year: '2019-2020',
      title: 'Content Creator & Developer',
      company: 'YouTube & Personal Projects',
      description: 'Created tech content while learning web development, building simple websites and experimenting with JavaScript and automation tools.',
    },
  ];

  const education = [
    {
      year: '2025 - Present',
      title: 'Full Stack Web Development',
      company: 'Self-Taught & Online Courses',
      description: 'Learning MERN stack (MongoDB, Express.js, React, Node.js), RESTful APIs, database design, and deployment strategies.',
    },
    {
      year: '2024 - Present',
      title: 'Discord Bot Development',
      company: 'Discord.js & Python Programming',
      description: 'Mastering Discord.js library, Python discord.py, database integration, and advanced bot features like slash commands and embeds.',
    },
    {
      year: '2023 - Present',
      title: 'Frontend Development Specialization',
      company: 'Modern Web Technologies',
      description: 'Advanced React concepts, state management (Redux/Context), Javascript, Tailwind CSS, and animation libraries like Framer Motion.',
    },
    {
      year: '2022-2024',
      title: 'Bachelor of Arts (BA)',
      company: 'K.D. College',
      description: 'Completed BA while simultaneously learning programming fundamentals, algorithms, and web development technologies.',
    },
    {
      year: '2021-2022',
      title: 'Programming Fundamentals',
      company: 'Self-Learning & Online Resources',
      description: 'Started with HTML, CSS, JavaScript basics, Git version control, and understanding of software development lifecycle.',
    },
  ];

  const skills = [
    { name: 'HTML5', level: 85 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 55 },
    { name: 'React.js', level: 45 },
    { name: 'Node.js & Express', level: 55 },
    { name: 'MongoDB & Database Design', level: 75 },
    { name: 'Discord.js Bot Development', level: 80 },
    { name: 'Python Programming', level: 55 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git & GitHub', level: 80 },
    { name: 'RESTful API Development', level: 70 },
    { name: 'Responsive Web Design', level: 100 },
  ];

  const personalInfo = [
    { label: 'Name', value: 'Souma Goswami' },
    { label: 'Aka', value: 'Xecute' },
    { label: 'Gender', value: 'Male' },
    { label: 'Age', value: '22 Years Old' },
    { label: 'Status', value: 'Single' },
    { label: 'City', value: 'Kolkata/Midnapore' },
    { label: 'Nationality', value: 'Indian' },
    { label: 'Availability', value: 'Full Time' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Mobile No', value: '+91 9064774963' },
    { label: 'Email', value: 'founder@xecute.me' },
    { label: 'Languages', value: 'Hindi, English, Bengali' },
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
            <h2 className="text-3xl font-bold">
              My <span className="text-green-400">Experience</span>
            </h2>
            <p className="text-gray-400">
              Explore my journey in full-stack development, Discord bot creation, and modern web technologies—delivering scalable solutions.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-green-400 transition-colors duration-200"
                >
                  <div className="text-green-400 text-sm font-medium">{exp.year}</div>
                  <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                  <div className="text-gray-400 text-sm mb-3">{exp.company}</div>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              My <span className="text-green-400">Education</span>
            </h2>
            <p className="text-gray-400">
              My educational journey in programming, from fundamentals to advanced full-stack development and specialized bot creation.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-green-400 transition-colors duration-200"
                >
                  <div className="text-green-400 text-sm font-medium">{edu.year}</div>
                  <h3 className="text-xl font-semibold mt-2">{edu.title}</h3>
                  <div className="text-gray-400 text-sm mb-3">{edu.company}</div>
                  <p className="text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              My <span className="text-green-400">Skills</span>
            </h2>
            <p className="text-gray-400">
              Technical expertise in modern web development, backend technologies, and specialized programming skills for diverse applications.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-green-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-green-400 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'about':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              About <span className="text-green-400">Me</span>
            </h2>
            <p className="text-gray-400">
              Here is my About Me section! Feel free to check it out, and you can also contact me anytime.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex justify-between items-center"
                >
                  <span className="text-gray-400">{info.label}</span>
                  <span className="text-white font-medium">{info.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Why Hire <span className="text-green-400">Me?</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Full-stack developer specializing in modern web technologies, Discord bot development, and scalable application architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-green-400 text-slate-900'
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
              >
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Content Area */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
            className="lg:col-span-3"
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
