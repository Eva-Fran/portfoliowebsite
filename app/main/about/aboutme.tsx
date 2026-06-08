// components/AboutMe.tsx

const HIGHLIGHTS = [
  { value: "2+", label: "Years building" },
  { value: "15+", label: "Projects shipped" },
  { value: "5", label: "Happy clients" },
];

export default function AboutMe() {
  return (
    <section className="py-24 px-[10%] bg-white mt-[50px]">
      <h2 className="text-4xl font-bold text-center text-black mb-16">About Me</h2>

      <div className="flex gap-16 items-center">

        {/* LEFT — text */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-2xl font-bold text-black leading-snug">
            I don't just write code — <br />
            <span className="text-[#4CCF4A]">I engineer experiences.</span>
          </p>

          <p className="text-gray-600 leading-relaxed">
            With 3+ years of frontend experience, I've built everything from
            pixel-perfect marketing sites to complex data-heavy dashboards.
            I obsess over performance, accessibility, and the tiny details
            most developers skip.
          </p>

          <p className="text-gray-600 leading-relaxed">
            My stack is modern, my standards are high, and my goal is always
            the same — ship software that works beautifully and holds up
            under real-world pressure.
          </p>

          {/* stats */}
          <div className="flex gap-8 mt-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="flex flex-col">
                <span className="text-3xl font-bold text-[#4CCF4A]">{h.value}</span>
                <span className="text-sm text-gray-500 mt-1">{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="flex-1 relative">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
            alt="Developer workspace"
            className="rounded-2xl w-full object-cover h-[420px]"
          />
          {/* floating badge */}
          <div className="absolute -bottom-5 -left-5 bg-black text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-lg">
            💻 Open to new roles
          </div>
        </div>

      </div>
    </section>
  );
}