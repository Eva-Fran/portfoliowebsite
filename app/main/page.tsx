import React from "react";

const Techstack = [
  { src: "RReact.png", alt: "React" },
  { src: "nextjslogobg.png", alt: "Next.js" },
  { src: "git.svg", alt: "TypeScript" },
  { src: "angular_icon.gif", alt: "Angular" },
  { src: "CSS3.svg", alt: "CSS" },
  { src: "HTML5.svg", alt: "HTML" },
  { src: "postgresimg.png", alt: "PostgreSQL" },
  { src: "git.svg", alt: "JavaScript" },
  { src: "Git.svg", alt: "GitHub" },
  { src: "Git.svg", alt:"Java" }
];

const doubleTechStack = [...Techstack, ...Techstack];

export default function Hero() {
  return (
    <section className="flex flex-col mt-15 px-[10%]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-6xl font-bold text-white">
            EVA <br /> FRANCISCA ESSUMAN
          </p>
          <p className="text-5xl font-bold mt-[10px] text-[#4CCF4A]">
            Software Engineer
          </p>
          <p className="text-md text-gray-300 mt-2">
            craft high-quality, performant web experiences — turning complex
            problems <br />
            into elegant, user-friendly interfaces.
          </p>
        </div>
        <div>
          <img src="Photohere.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-20">
        <span className="text-2xl font-bold text-white">Tech Stack:</span>
        <div className="overflow-hidden mt-5">
          <div className="flex space-x-4 mt-5 marquee-track  w-max">
            {doubleTechStack.map((tech, i) => (
              <div
                key={`${tech.alt}-${i}`}
                className="border border-gray-500 w-40 p-3 rounded-md flex items-center space-x-6 shrink-0"
              >
                <img src={tech.src} alt={tech.alt} className="w-7 h-7" />
                <span className="text-white">{tech.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
