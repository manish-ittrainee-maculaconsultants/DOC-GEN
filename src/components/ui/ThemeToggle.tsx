"use client";

import { useEffect, useState } from "react";
import { ComputerIcon, MoonIcon, SunIcon } from "../icons/svg";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    const initialTheme: Theme =
      savedTheme === "light" ||
      savedTheme === "dark" ||
      savedTheme === "system"
        ? savedTheme
        : "system";

    setTheme(initialTheme);

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    function applyTheme(selectedTheme: Theme) {
      const isDark =
        selectedTheme === "dark" ||
        (selectedTheme === "system" && mediaQuery.matches);

      document.documentElement.classList.toggle("dark", isDark);
    }

    applyTheme(initialTheme);

    function handleSystemChange() {
      if (initialTheme === "system") {
        applyTheme("system");
      }
    }

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, []);

  function changeTheme(newTheme: Theme) {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const isDark =
      newTheme === "dark" ||
      (newTheme === "system" && systemDark);

    document.documentElement.classList.toggle("dark", isDark);
  }

  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-slate-200
      bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-900"
      role="group"
      aria-label="Choose theme"
    >
      {/* Light theme */}
      <button
        type="button"
        onClick={() => changeTheme("light")}
        aria-pressed={theme === "light"}
        aria-label="Light theme"
        className={`flex flex-1 items-center justify-center gap-2 rounded-md
        px-3 py-2 text-sm transition-colors ${
          theme === "light"
            ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-300"
        }`}
      >
        <SunIcon />
        
      </button>

      {/* Dark theme */}
      <button
        type="button"
        onClick={() => changeTheme("dark")}
        aria-pressed={theme === "dark"}
        aria-label="Dark theme"
        className={`flex flex-1 items-center justify-center gap-2 rounded-md
        px-3 py-2 text-sm transition-colors ${
          theme === "dark"
            ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-300"
        }`}
      >
        <MoonIcon />
        
      </button>

      {/* System theme */}
      <button
        type="button"
        onClick={() => changeTheme("system")}
        aria-pressed={theme === "system"}
        aria-label="Use system theme"
        className={`flex flex-1 items-center justify-center rounded-md
        px-3 py-2 text-sm transition-colors ${
          theme === "system"
            ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-300"
        }`}
      >
        <ComputerIcon />
      </button>
    </div>
  );
}
