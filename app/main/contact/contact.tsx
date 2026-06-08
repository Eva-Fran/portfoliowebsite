"use client";
import { useState } from "react";

type FormData = {
  email: string;
  name: string;
  message: string;
};

const SOCIALS = [
  { label: "LinkedIn", url: "#", src:"LinkedIn.svg" },
  { label: "GitHub", url: "#", src: "GitHub.svg" },
  { label: "Twitter", url: "#", src: "Twitter.svg" },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    email: "",
    name: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  }
  return (
    <section className="py-24 px-[10%] bg-black">
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        Get In Touch
      </h2>
      <p className="text-gray-500 text-center mb-16 max-w-md mx-auto text-sm leading-relaxed">
        Have a project in mind or just want to say hello? My inbox is always
        open.
      </p>

      <div className="grid grid-cols-2 gap-20 items-start max-w-5xl mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white leading-tight">
              Let's build something{" "}
              <span className="text-[#4CCF4A]">great</span> together.
            </h3>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              Whether you need a frontend engineer, a collaborator, or just want
              to connect — feel free to reach out. I typically respond within 24
              hours.
            </p>
          </div>

          {/* socials */}
          <div className="flex flex-col gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}  href={s.url}
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#4CCF4A] transition-colors group">
                <img src={s.src} alt={s.label} width={15} height={15}/>
                <span className="group-hover:underline underline-offset-4">
                  {s.label}
                </span>
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">
              Email
            </p>
            <a
              href="mailto:afuaannorwa@gmail.com"
              className="text-white text-sm hover:text-[#4CCF4A] transition-colors">
              afuaannorwa@gmail.com
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 py-16 border border-[#4CCF4A]/20 rounded-2xl bg-[#4CCF4A]/5">
            <span className="text-4xl">✉️</span>
            <p className="text-white font-bold text-xl">Message sent!</p>
            <p className="text-gray-500 text-sm text-center max-w-xs">
              Thanks for reaching out, I'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ email: "", name: "", message: "" });
              }}
              className="mt-2 text-xs text-[#4CCF4A] underline underline-offset-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <FormField label="Email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
            />
            <FormField
              label="Name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />

            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-500 uppercase tracking-widest">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4CCF4A]/50 resize-none placeholder:text-gray-600 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-[#4CCF4A] text-black font-bold text-sm py-3 rounded-xl hover:bg-[#3ab838] transition-colors"
            >
              Send Message →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-gray-500 uppercase tracking-widest">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4CCF4A]/50 placeholder:text-gray-600 transition-colors"
      />
    </div>
  );
}
