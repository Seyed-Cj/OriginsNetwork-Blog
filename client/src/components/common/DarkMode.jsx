import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="px-4 py-2 text-black dark:text-white"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
