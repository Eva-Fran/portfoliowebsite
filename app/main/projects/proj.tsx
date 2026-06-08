"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tag: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: "Project One",
    tag: "Frontend",
    description:
      "A full-featured web application built with Angular and TailwindCSS. Focused on performance and accessibility, resulting in a 40% improvement in load time.",
    stack: ["Angular", "TailwindCSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
  },
  {
    title: "Project Two",
    tag: "Fullstack",
    description:
      "Responsive dashboard with real-time data visualization. Built for speed and clarity with a focus on intuitive UX.",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
  },
  {
    title: "Project Three",
    tag: "React",
    description:
      "Data-heavy analytics platform built for scale. Handles thousands of records with smooth filtering and export features.",
    stack: ["React", "GraphQL", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-[10%] bg-white">
      <h2 className="text-4xl font-bold text-black text-center mb-16">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-12">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} flip={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex gap-12 items-center ${flip ? "flex-row-reverse" : "flex-row"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* IMAGE */}
      <div className="flex-1 overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-[320px] object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col gap-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#4CCF4A]">
          {project.tag}
        </span>

        <h3 className="text-2xl font-bold text-black">{project.title}</h3>

        <p className="text-gray-500 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* stack badges */}
        <div className="flex gap-2 flex-wrap">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs border border-gray-200 text-gray-500 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="flex gap-4 mt-2">  
            href={project.liveUrl}
            className="text-sm font-semibold text-black border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
         <a>
            Live →
          </a>  
            href={project.githubUrl}
            className="text-sm font-semibold text-gray-400 hover:text-black transition-colors"
          <a>
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}