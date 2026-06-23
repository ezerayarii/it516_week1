"use client";

declare global {
  interface Window {
    week3ThemeToggleReady?: boolean;
  }
}

function setupThemeToggle() {
  if (typeof window === "undefined") {
    return;
  }

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem("week3-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const applyTheme = (theme: string) => {
    document.documentElement.dataset.theme = theme;

    document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach(
      (button) => {
        const isDark = theme === "dark";
        button.setAttribute("aria-pressed", String(isDark));
        button.textContent = isDark ? "Use light mode" : "Use dark mode";
      },
    );
  };

  window.setTimeout(() => applyTheme(getPreferredTheme()), 0);

  if (window.week3ThemeToggleReady) {
    return;
  }

  window.week3ThemeToggleReady = true;

  document.addEventListener("click", (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
      "[data-theme-toggle]",
    );

    if (!button) {
      return;
    }

    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    localStorage.setItem("week3-theme", nextTheme);
    applyTheme(nextTheme);
  });
}

if (typeof window !== "undefined") {
  setupThemeToggle();
}

export default function ThemeToggle() {
  return (
    <button
      aria-label="Toggle color theme"
      aria-pressed="false"
      className="theme-toggle"
      data-theme-toggle
      type="button"
    >
      Use dark mode
    </button>
  );
}
