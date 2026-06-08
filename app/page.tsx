import Image from "next/image";
import Navbar from "./main/new/navbar";
import Hero from "./main/page";
import AboutMe from "./main/about/aboutme";
import Experience from "./main/experiences/exp";
import Projects from "./main/projects/proj";
import Contact from "./main/contact/contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact/>
    </main>
  );
}
