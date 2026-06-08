import { link } from "node:fs";
import React from "react";
const Nav_Links = ["Home", "About", "Projects", "Contact"];

const Socials = [
  {src:"LinkedIn.svg" , alt: "LinkedIn" } ,
  {src:"Github.svg", alt:"GitHub" }, 
  {src:"Twitter.svg",  alt:"Twitter"}
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 text-white border-b border-gray-700">
      <p className="text-2xl font-bold">EFE</p>
      <ul className="flex space-x-6 cursor-pointer">
        {Nav_Links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
      <div className="flex space-x-4">
        {Socials.map((s)=>(
          <img key={s.alt} src={s.src} alt={s.alt}/>
        ))}
      </div>
    </nav>
  );
}
