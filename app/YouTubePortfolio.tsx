"use client";
import React from "react";
import {
  Home,
  FileText,
  Briefcase,
  Code,
  ThumbsUp,
  Github,
  Play,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";

const navItems = [
  {
    name: "Resume",
    icon: <FileText className="w-6 h-6" />,
    href: "#resume",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      window.open("/pdf/JeongJun_Resume_v30.pdf", "_blank");
    },
  },
  { name: "Career", icon: <Briefcase className="w-6 h-6" />, href: "#career" },
  { name: "Project", icon: <Code className="w-6 h-6" />, href: "#project" },
  {
    name: "Recommendation",
    icon: <ThumbsUp className="w-6 h-6" />,
    href: "#recommendation",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      window.open("/pdf/Recommendation.pdf", "_blank");
    },
  },
  {
    name: "Github",
    icon: <Github className="w-6 h-6" />,
    href: "https://github.com/songjeongjun320", // GitHub 링크
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/junsong0602", // LinkedIn 링크
  },
];

const languages = [
  "Python",
  "Java",
  "C++",
  "Next.js",
  "TypeScript",
  "JavaScript",
];

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: "/placeholder.svg?height=180&width=320",
    views: "1.2K views",
    date: "2 days ago",
    description: "This is a brief description of Project 1.",
  },
  {
    id: 2,
    title: "Project 2",
    image: "/placeholder.svg?height=180&width=320",
    views: "3.4K views",
    date: "1 week ago",
    description: "This is a brief description of Project 2.",
  },
  {
    id: 3,
    title: "Project 3",
    image: "/placeholder.svg?height=180&width=320",
    views: "5.6K views",
    date: "2 weeks ago",
    description: "This is a brief description of Project 3.",
  },
  {
    id: 4,
    title: "Project 4",
    image: "/placeholder.svg?height=180&width=320",
    views: "7.8K views",
    date: "3 weeks ago",
    description: "This is a brief description of Project 4.",
  },
  {
    id: 5,
    title: "Project 5",
    image: "/placeholder.svg?height=180&width=320",
    views: "9.0K views",
    date: "1 month ago",
    description: "This is a brief description of Project 5.",
  },
  {
    id: 6,
    title: "Project 6",
    image: "/placeholder.svg?height=180&width=320",
    views: "10.2K views",
    date: "2 months ago",
    description: "This is a brief description of Project 6.",
  },
];

export default function YouTubePortfolio() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar */}
      <div className="w-64 flex-shrink-0 p-6 flex flex-col">
        <div className="flex items-center mb-6">
          <Home className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">JeongJun Song</span>
        </div>
        <Image
          src="/img/jun-square-2.jpg"
          alt="JeongJun Song"
          width={200}
          height={200}
          className="square-full mb-6"
        />
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              name={item.name}
              href={item.href}
              icon={item.icon}
              onClick={item.onClick}
            />
          ))}
        </nav>
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-3">LANGUAGES</h3>
          {languages.map((lang) => (
            <div key={lang} className="flex items-center p-1">
              <Code className="w-4 h-4 mr-2" />
              <span className="text-sm">{lang}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="block"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={320}
                  height={180}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {project.views} • {project.date}
                  </p>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
