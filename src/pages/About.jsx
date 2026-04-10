import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  MapPin,
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
  Palette,
  Trophy,
  Video,
  BookOpen,
  Database,
  Laptop,
  Zap,
  Wrench,
  Settings,
  Smartphone,
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

  // ✅ UPDATED EXPERIENCE (NO DISCORD)
  const experiences = [
    {
      year: "2026-Present",
      title: "Cross-Platform App Developer",
      company: "Freelance & Personal Projects",
      description:
        "Building cross-platform mobile apps using React Native, Expo and NativeWind with focus on performance, scalability and smooth UI across Android and iOS.",
      icon: Smartphone,
    },
    {
      year: "2025-Last Year",
      title: "Full Stack Developer",
      company: "MERN Stack Projects",
      description:
        "Developing full-stack applications using Node.js, Express and MongoDB with React (Vite + Tailwind). Creating scalable APIs and production-ready systems.",
      icon: Server,
    },
    {
      year: "2024-2025",
      title: "Frontend Developer",
      company: "Modern Web Projects",
      description:
        "Built modern responsive websites using React (Vite) and Tailwind CSS with focus on performance and clean UI/UX.",
      icon: Monitor,
    },
    {
      year: "2022-2023",
      title: "Esports Manager",
      company: "One Dream Esports",
      description:
        "Managed esports tournaments, scrims and operations while leading teams and organizing large-scale competitive events.",
      icon: Trophy,
    },
  ];

  const education = [
    {
      year: "2025-2026",
      title: "Advanced Full Stack & App Development",
      company: "Self Learning",
      description:
        "Learning MERN stack deeply along with React Native, Expo and NativeWind for cross-platform apps including backend architecture and deployment.",
      icon: BookOpen,
    },
    {
      year: "2024-2025",
      title: "Frontend & Modern Web Development",
      company: "Self Learning",
      description:
        "Focused on React (Vite), Tailwind CSS and modern UI/UX practices.",
      icon: Laptop,
    },
    {
      year: "2022 - 2024",
      title: "Bachelor of Arts (BA)",
      company: "K.D. College of Commerce & General Studies",
      description:
        "Completed graduation while developing skills in web development and real-world projects.",
      icon: GraduationCap,
    },
    {
      year: "2021-2022",
      title: "Programming Basics",
      company: "Self Learning",
      description:
        "Started with HTML, CSS, JavaScript and gradually moved into advanced development.",
      icon: Code,
    },
  ];

  const skills = [
    { name: "HTML5", level: 99, icon: Code },
    { name: "CSS3 / Tailwind", level: 95, icon: Palette },
    { name: "JavaScript", level: 80, icon: Zap },
    { name: "React (Vite)", level: 50, icon: Monitor },
    { name: "React Native (Expo)", level: 30, icon: Smartphone },
    { name: "NativeWind", level: 85, icon: Palette },
    { name: "Node.js & Express", level: 90, icon: Server },
    { name: "MongoDB", level: 80, icon: Database },
    { name: "Git & GitHub", level: 75, icon: GitBranch },
  ];

  const personalInfo = [
    { label: "Name", value: "Souma Goswami", icon: User },
    { label: "Aka", value: "Xecute", icon: Info },
    { label: "Role", value: "Full Stack Developer", icon: Info },
    { label: "Age", value: "24 Years", icon: Calendar },
    { label: "State", value: "West Bengal", icon: MapPin },
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
      icon: Instagram,
      href: "https://www.instagram.com/xecute.gg_/",
      label: "Instagram",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              My <span className="text-blue-400">Experience</span>
            </h2>
            {experiences.map((exp, index) => (
              <motion.div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="flex gap-4">
                  <exp.icon className="text-blue-400" />
                  <div>
                    <div className="text-blue-400 text-sm">{exp.year}</div>
                    <h3 className="font-semibold">{exp.title}</h3>
                    <div className="text-gray-400 text-sm">{exp.company}</div>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "education":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              My <span className="text-blue-400">Education</span>
            </h2>
            {education.map((edu, index) => (
              <motion.div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="flex gap-4">
                  <edu.icon className="text-blue-400" />
                  <div>
                    <div className="text-blue-400 text-sm">{edu.year}</div>
                    <h3 className="font-semibold">{edu.title}</h3>
                    <div className="text-gray-400 text-sm">{edu.company}</div>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "skills":
        return (
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        );

      case "about":
        return (
          <div>
            <p className="text-gray-400 mb-4">
              I’m a full-stack developer focused on building modern web apps and cross-platform mobile applications using React Native and Expo.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {personalInfo.map((info, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <p>{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Why Hire <span className="text-blue-400">Me?</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-64 flex lg:flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded ${activeTab === tab.id ? "bg-blue-400 text-black" : "bg-gray-800"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default About;