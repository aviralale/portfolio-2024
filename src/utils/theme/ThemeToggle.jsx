import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="card flex justify-center items-center w-full h-full transition-all duration-300 transform hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={40} /> : <Moon size={40} />}
    </button>
  );
};
