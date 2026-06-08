type Experience = {
  period: string;
  title: string;
  company: string;
  description: string;
};

const EXPERIENCES: Experience[] = [
  {
    period: "2025 — Present",
    title: "Senior Frontend Developer",
    company: "Company Name",
    description:
      "Leading frontend architecture for the company's core product suite. Building scalable component libraries and driving performance improvements across all user-facing applications.",
  },
  {
    period: "2023 — 2025",
    title: "Frontend Developer",
    company: "Company Name",
    description:
      "Developed and maintained multiple Angular-based applications. Collaborated closely with design and product teams to ship high-quality features on tight deadlines.",
  },
  {
    period: "2021 — 2023",
    title: "Junior Developer",
    company: "Company Name",
    description:
      "Built responsive UI components and learned best practices for modern web development. Contributed to launching two customer-facing products from scratch.",
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-[10%] bg-black">
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Experience
      </h2>

      <div className="flex flex-col">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} isLatest={i === 0} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  isLatest,
}: {
  exp: Experience;
  isLatest: boolean;
}) {
  return (
    <div className="grid grid-cols-[180px_1fr] gap-8 py-10 border-b border-gray-800">
      <div className="flex items-start gap-3 pt-1">
        <span className="text-sm text-gray-500 whitespace-nowrap">
          {exp.period}
        </span>
      </div>

      <div
        className={`rounded-xl p-6 border ${
          isLatest
            ? "border-[#4CCF4A]/30 bg-[#4CCF4A]/5"
            : "border-gray-800 bg-gray-900"
        }`}
      >
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-white font-bold text-lg">{exp.title}</h3>
          {isLatest && (
            <span className="text-[10px] font-semibold tracking-widest uppercase bg-[#4CCF4A]/15 text-[#4CCF4A] px-2 py-1 rounded-full">
              Current
            </span>
          )}
        </div>
        <p className="text-[#4CCF4A] text-sm font-medium mb-3">
          {exp.company}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          {exp.description}
        </p>
      </div>

    </div>
  );
}