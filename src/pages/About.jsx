import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Mail,
  User,
  Globe,
  Briefcase,
  CodeXml,
  Info,
  Github,
  Linkedin,
  Instagram,
  Monitor,
  Bot,
  Palette,
  Trophy,
  Video,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: CodeXml },
    { id: "about", label: "About Me", icon: User },
  ];

  const experiences = [
    {
      year: "2026 - Present",
      title: "Software Developer",
      company: "Freelance & Client Projects",
      description:
        "Building MERN stack apps and cross-platform mobile apps with React Native (Expo), focusing on performance and scalable architecture.",
      icon: Monitor,
    },
    {
      year: "2025",
      title: "Esports Manager & Tournament Ops",
      company: "One Dream Esports",
      description:
        "Managed tournaments, scrims, and automated workflows using custom Discord bots for registrations, slots, and match operations.",
      icon: Trophy,
    },
    {
      year: "2023 - 2024",
      title: "Frontend Developer",
      company: "Web Development",
      description:
        "Created responsive UIs using React, Vite, and Tailwind with focus on performance and smooth user experience.",
      icon: Palette,
    },
    {
      year: "2021 - 2023",
      title: "Content Creator",
      company: "YouTube & Community",
      description:
        "Produced esports content and built a gaming community through events and team support.",
      icon: Video,
    },
  ];

  const skillCategories = [
    {
      category: "Frontend",
      items: [
        { name: "React", badge: "https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white" },
        { name: "React Native", badge: "https://img.shields.io/badge/React%20Native-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white" },
        { name: "Expo", badge: "https://img.shields.io/badge/Expo-%23000020.svg?style=for-the-badge&logo=expo&logoColor=white" },
        { name: "Tailwind CSS", badge: "https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
        { name: "NativeWind", badge: "https://img.shields.io/badge/NativeWind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
        { name: "Discord.js", badge: "https://img.shields.io/badge/Discord.js-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" },
        { name: "Express", badge: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" },
        { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" },
        { name: "Redis", badge: "https://img.shields.io/badge/Redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" },
        { name: "Socket.IO", badge: "https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white" },
        { name: "Postgres", badge: "https://img.shields.io/badge/Postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Vercel", badge: "https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" },
        { name: "Cloudflare", badge: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white" },
        { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
        { name: "Git", badge: "https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
        { name: "GitHub", badge: "https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" },
        { name: "AWS", badge: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" },
        { name: "Nginx", badge: "https://img.shields.io/badge/Nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white" },
        { name: "Docker", badge: "https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" },
        { name: "PM2", badge: "https://img.shields.io/badge/PM2-2B2B2B?style=for-the-badge&logo=pm2&logoColor=white" },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
        { name: "Python", badge: "https://img.shields.io/badge/Python-%2314354C?style=for-the-badge&logo=python&logoColor=white" },
        { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white" },
        { name: "CSS3", badge: "https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=css&logoColor=white" },
      ],
    },
  ];

  const personalInfo = [
    { label: "Name", value: "Souma Goswami", icon: User },
    { label: "Aka", value: "Xecute", icon: Info },
    { label: "Role", value: "Founder Of One Dream Esports", icon: Info },
    { label: "Gender", value: "Male", icon: User },
    { label: "Age", value: "22 Years", icon: Calendar },
    { label: "Status", value: "Single", icon: Info },
    { label: "State", value: "West Bengal", icon: MapPin },
    { label: "Nationality", value: "Indian", icon: Globe },
    { label: "Availability", value: "Full Time", icon: Briefcase },
    { label: "Freelance", value: "Available", icon: Briefcase },
    { label: "Email", value: "soumagoswami2002@gmail.com", icon: Mail },
    { label: "Languages", value: "Hindi, English, Bengali", icon: Globe },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Xecutegg", label: "GitHub", },
    { icon: Linkedin, href: "https://www.linkedin.com/in/souma-goswami-86032b257/", label: "LinkedIn" },
    { icon: Bot, href: "https://discord.gg/WVThZG7Q5X", label: "Discord" },
    { icon: Instagram, href: "https://www.instagram.com/xecute.gg_/", label: "Instagram" },
  ];

  // Animation variants - smooth and responsive
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, y: 15, transition: { duration: 0.25, ease: "easeInOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const cardHover = {
    rest: { scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    hover: { scale: 1.02, y: -4, transition: { duration: 0.25, ease: "easeOut" } }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Professional <span className="text-lime-500">Journey</span>
              </h2>
              <p className="text-zinc-300 mt-2 text-sm sm:text-base">
                A timeline of roles where I've built scalable solutions and led technical initiatives.
              </p>
            </div>
            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  custom={cardHover}
                  className="group relative bg-zinc-900/50 p-5 sm:p-6 rounded-2xl border border-zinc-700/50 hover:border-lime-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-row items-start gap-4 sm:gap-5">
                    <div className="shrink-0 self-start">
                      <div className="inline-flex items-center justify-center p-3 bg-lime-500/10 rounded-xl border border-lime-500/20 group-hover:border-lime-500/40 group-hover:bg-lime-500/20 transition-all duration-300">
                        <exp.icon size={22} className="text-lime-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span className="text-xs sm:text-sm font-medium text-lime-500 bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20">
                          {exp.year}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">{exp.title}</h3>
                      <p className="text-lime-500/80 text-sm mb-3">{exp.company}</p>
                      <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Tech <span className="text-lime-500">Stack</span>
              </h2>
              <p className="text-zinc-300 mt-2 text-sm sm:text-base">Tools and technologies I work with daily.</p>
            </div>
            <div className="space-y-5">
              {skillCategories.map((cat, cIdx) => (
                <motion.div
                  key={cIdx}
                  variants={itemVariants}
                  whileHover={{ backgroundColor: "rgba(24, 24, 27, 0.6)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-zinc-900/30 p-5 rounded-2xl border border-zinc-700/50"
                >
                  <h3 className="text-md sm:text-lg font-semibold text-lime-500 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-lime-500 rounded-full" />
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.items.map((it, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -3 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative group cursor-pointer"
                      >
                        <img
                          src={it.badge}
                          alt={it.name}
                          title={it.name}
                          className="h-6 sm:h-7 md:h-8 w-auto rounded-md transition-all duration-200"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "about":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                About <span className="text-lime-500">Me</span>
              </h2>
              <p className="text-zinc-300 mt-2 text-sm sm:text-base">Get to know me better — my background, contact details, and where to connect.</p>
            </div>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(24, 24, 27, 0.6)" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="bg-zinc-900/30 p-3 sm:p-4 rounded-xl border border-zinc-700/50 hover:border-lime-500/40 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-lime-500/10 transition-all duration-200 group-hover:scale-110">
                      <info.icon size={16} className="text-lime-500" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400">{info.label}</p>
                      <p className="text-white font-medium text-xs sm:text-sm truncate">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="pt-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-lime-500 rounded-full" />
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-300 hover:text-black hover:bg-lime-500 hover:border-lime-500 transition-all duration-200 group"
                  >
                    <link.icon size={18} className="group-hover:text-black transition-colors duration-200" />
                    <span className="text-xs sm:text-sm font-medium">{link.label}</span>
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
    <section className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden bg-zinc-900">
      <div className="container mx-auto max-w-7xl relative z-10 mt-[-50px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-white">Why Hire </span>
            <span className="text-lime-500 relative inline-block">
              Me?
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-lime-500/50 rounded-full" />
            </span>
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Full Stack Developer specializing in modern web technologies, Discord bot development, and scalable application architecture.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Tabs - Active state with lime-500 */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="lg:w-72 w-full"
          >
            <div className="sticky top-24 z-10">
              <div className="flex lg:flex-col gap-2 p-2 rounded-2xl">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      aria-label={tab.label}
                      className={`group relative flex-1 lg:flex-initial flex items-center justify-center lg:justify-start gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-xl border transition-all duration-300 text-sm sm:text-base overflow-hidden ${isActive
                        ? "bg-lime-500 text-black border-lime-500"
                        : "bg-zinc-900/70 text-zinc-300 border-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-600"
                        }`}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${isActive
                          ? "bg-black/20"
                          : "bg-zinc-700/70 group-hover:bg-zinc-600/80"
                          }`}
                      >
                        <tab.icon size={17} className="sm:w-5 sm:h-5" />
                      </span>
                      <span className="hidden lg:inline font-medium tracking-wide">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;