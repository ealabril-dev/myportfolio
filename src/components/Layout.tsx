import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

type Theme = "light" | "dark";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
    }
    // Default: light
    return "light";
  });

  // Apply theme to <html> (documentElement)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const isActive = (path: string) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="logo">
          <span className="logo-mark">EA</span>
          <span className="logo-text">Emmanuel | Full Stack Developer</span>
        </div>

        <div className="nav">
          <nav className="nav-links">
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
            <Link to="/skills" className={isActive("/skills")}>
              Skills
            </Link>
            <Link to="/tech-stack" className={isActive("/tech-stack")}>
              Tech Stack
            </Link>
            <Link to="/projects" className={isActive("/projects")}>
              Projects
            </Link>
            <Link to="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
          >
            <span className="theme-toggle-icon">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
            <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
          </button>
        </div>
      </header>

      <main className="app-main">{children}</main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Emmanuel — Full Stack Developer</p>
        <p className="footer-sub">
          Open to opportunities in web, backend, and cloud engineering.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
