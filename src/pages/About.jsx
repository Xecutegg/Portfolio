import { motion } from "framer-motion";
import { useState } from "react";
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
  Server,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "about", label: "About Me", icon: User },
  ];

  const experiences = [
    {
      year: '2025-2026',
      title: 'Full Stack Developer (Freelance)',
      company: 'Freelance & Client Projects',
      description: 'Designing and building full stack web applications with React, Node.js, Express and MongoDB. Focus on performance, responsive UI, and production-ready deployments.',
      icon: Monitor
    },
    {
      year: '2024',
      title: 'Esports Manager & Tournament Ops',
      company: 'One Dream Esports',
      description: 'Leading tournament organization, scrims management and event operations. Built tools and Discord automation to manage registrations, scoreboards, and match workflows.',
      icon: Trophy
    },
    {
      year: '2023 - 2024',
      title: 'Frontend Developer',
      company: 'Web Development Projects',
      description: 'Built modern, responsive websites and dashboards using React, Vite, Tailwind CSS and Framer Motion for polished UX and animations.',
      icon: Palette
    },
    {
      year: '2021 - 2023',
      title: 'Content Creator & Community Lead',
      company: 'YouTube & One Dream Community',
      description: 'Created educational content, ran community events, and supported grassroots esports teams through coaching and operations.',
      icon: Video
    },
  ];

  const education = [
    {
      year: "2025-2026",
      title: "Full-Stack Web Development (MERN & Next.js)",
      company: "Online Learning",
      description:
        "Learning advanced full-stack development including React, Next.js, Node.js, Express, MongoDB, API design, and deployment.",
      icon: BookOpen,
    },
    {
      year: "2024",
      title: "Esports Management & Operations",
      company: "One Dream Esports",
      description:
        "Hands-on experience in tournament hosting, scrims management, team coordination, and building automation tools for esports workflows.",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Frontend Development",
      company: "Modern Web Technologies",
      description:
        "Focusing on React, Tailwind CSS, JavaScript, UI/UX fundamentals, and animation libraries like Framer Motion.",
      icon: Laptop,
    },
    {
      year: "2022 - 2024",
      title: "Bachelor of Arts (BA)",
      company: "K.D. College of Commerce & General Studies",
      description:
        "Pursuing a BA degree while actively developing skills in web development and building personal projects.",
      icon: GraduationCap,
    },
    {
      year: "2021 - 2022",
      title: "Youtube Content Creation & Basic Programming",
      company: "Self Learning",
      description:
        "Started with HTML, CSS, JavaScript, Git, and foundational programming concepts also learn about youtube.",
      icon: Code,
    },
  ];

  const skills = [
    { name: "HTML5", level: 99, icon: Code },
    { name: "CSS3", level: 99, icon: Palette },
    { name: "JavaScript", level: 100, icon: Zap },
    { name: "React / Next.js", level: 99, icon: Settings },
    { name: "MongoDB", level: 75, icon: Database },
    { name: "Tailwind CSS", level: 85, icon: Wrench },
    { name: "Git & GitHub", level: 80, icon: GitBranch },
    { name: "Discord Bot Development", level: 75, icon: Bot },
    { name: "Communication & Management", level: 90, icon: MessageCircle },
  ];

  const personalInfo = [
    { label: "Name", value: "Souma Goswami", icon: User },
    { label: "Aka", value: "Xecute", icon: Info },
    { label: "Role", value: "Founder Of One Dream Esports", icon: Info },
    { label: "Gender", value: "Male", icon: User },
    { label: "Age", value: "22 Years", icon: Calendar },
    { label: "Status", value: "Single", icon: Info },
    { label: "State", value: "West Bangal", icon: MapPin },
    { label: "Nationality", value: "Indian", icon: Globe },
    { label: "Availability", value: "Full Time", icon: Briefcase },
    { label: "Freelance", value: "Available", icon: Briefcase },
    { label: "Email", value: "soumagoswami2002@gmail.com", icon: Mail },
    { label: "Languages", value: "Hindi, English, Bengali", icon: Globe },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Xecutegg", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/souma-goswami-86032b257/",
      label: "LinkedIn",
    },
    {
      icon: MessageCircle,
      href: "https://discord.gg/WVThZG7Q5X",
      label: "Discord",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/xecute.gg_/",
      label: "Instagram",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Reduced from 0.1
        delayChildren: 0.1, // Reduced from 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced from 20
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduced from 0.5
        ease: "easeOut",
      },
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                My <span className="text-blue-400">Experience</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Explore my journey in full-stack development, Discord bot
                creation, and modern web technologies—delivering scalable
                solutions.
              </p>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative overflow-hidden bg-gray-800 p-6 rounded-xl border border-gray-700"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400"></div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-400/10 rounded-lg border border-blue-400/20">
                      <exp.icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-blue-400 text-sm font-medium">
                        {exp.year}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mt-1">
                        {exp.title}
                      </h3>
                      <div className="text-gray-400 text-sm mb-2">
                        {exp.company}
                      </div>
                      <p className="text-gray-300 text-sm md:text-base">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "education":
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                My <span className="text-blue-400">Education</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                My educational journey in programming, from fundamentals to
                advanced full-stack development and specialized bot creation.
              </p>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative overflow-hidden bg-gray-800 p-6 rounded-xl border border-gray-700"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-purple-400"></div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-400/10 rounded-lg border border-blue-400/20">
                      <edu.icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-blue-400 text-sm font-medium">
                        {edu.year}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mt-1">
                        {edu.title}
                      </h3>
                      <div className="text-gray-400 text-sm mb-2">
                        {edu.company}
                      </div>
                      <p className="text-gray-300 text-sm md:text-base">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                My <span className="text-blue-400">Skills</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Technical expertise in modern web development, backend
                technologies, and specialized programming skills for diverse
                applications.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative overflow-hidden bg-gray-800 p-5 rounded-xl border border-gray-700"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400"></div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-400/10 rounded-lg border border-blue-400/20">
                      <skill.icon size={20} className="text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-base md:text-lg font-semibold">
                          {skill.name}
                        </h3>
                        <span className="text-blue-400 font-medium text-sm md:text-base">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.6, delay: index * 0.08 }}
                          className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "about":
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                About <span className="text-blue-400">Me</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Here is my About Me section! Feel free to check it out, and you
                can also contact me anytime.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative overflow-hidden bg-gray-800 p-4 rounded-lg border border-gray-700"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400"></div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-700 rounded-lg">
                      <info.icon size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs md:text-sm">
                        {info.label}
                      </span>
                      <p className="text-white font-medium text-sm md:text-base">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300"
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
      <div className="container mx-auto max-w-7xl mt-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }} // Reduced from 20
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} // Reduced from 0.6
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Why Hire <span className="text-blue-400">Me?</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Full-stack developer specializing in modern web technologies,
            Discord bot development, and scalable application architecture.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -15 }} // Reduced from -20
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }} // Reduced from 0.6, 0.2
            className="lg:w-64"
          >
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-2 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-150 ${activeTab === tab.id
                    ? "bg-blue-400 text-slate-900"
                    : "bg-gray-800 text-white"
                    }`}
                >
                  <tab.icon size={18} />
                  <span className="font-medium text-sm md:text-base">
                    {tab.label}
                  </span>
                  {activeTab === tab.id && (
                    <ArrowRight size={16} className="ml-auto" />
                  )}
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