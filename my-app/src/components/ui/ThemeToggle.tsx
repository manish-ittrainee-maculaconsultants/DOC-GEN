"use client";

import { useEffect, useState } from "react";
import MoonIcon from "../icons/svg";
import SunIcon from "../icons/svg";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    // Check the system theme
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Use saved theme if available, otherwise use system theme
    const isDark =
      savedTheme !== null ? savedTheme === "dark" : systemDark;

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggleTheme() {
    const newTheme = !dark;

    setDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);

    // Save the user's preference
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
    
  );
}
