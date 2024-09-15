import React, { useState } from "react";

export default function Social({ icon, link, bg }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card rounded-3xl h-full w-full flex justify-center items-center p-10 card transition duration-300 ease-in-out"
      style={{ backgroundColor: hover ? bg : "var(--card-bg-color)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
    </a>
  );
}
