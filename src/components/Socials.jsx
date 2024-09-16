import React from "react";
import Social from "./child/Social";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Socials() {
  const socials = [
    {
      icon: <Github size={48} />,
      link: "https://github.com/aviralale",
      bg: "#F64D27",
    },
    {
      icon: <Linkedin size={48} />,
      link: "https://linkedin.com/in/aviral-ale",
      bg: "#0A66C2",
    },
    {
      icon: <Instagram size={48} />,
      link: "https://instagram.com/aviral.who_",
      bg: "#A1239C",
    },
    {
      icon: <Mail size={48} />,
      link: "mailto:69aviral@gmail.com",
      bg: "#AD201D",
    },
  ];

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex gap-4">
        {socials.slice(0, 2).map((social, index) => (
          <Social
            key={index}
            icon={social.icon}
            link={social.link}
            bg={social.bg}
          />
        ))}
      </div>
      <div className="flex space-x-4">
        {socials.slice(2).map((social, index) => (
          <Social
            key={index}
            icon={social.icon}
            link={social.link}
            bg={social.bg}
          />
        ))}
      </div>
    </div>
  );
}
