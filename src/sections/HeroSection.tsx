import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="section hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Full Stack Developer</p>
        <h1 className="hero-title">Hi, I’m Emmanuel.</h1>
        <p className="hero-subtitle">
         I design and build reliable, scalable solutions for both web and Android platforms — 
         crafting everything from clean, responsive UIs to robust backend APIs and database architectures.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn primary">
            View Projects 
          </Link>
          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
        <div className="hero-meta">
          <span>• Full Stack (React, Node, etc.)</span>
          <span>• End-to-end delivery</span>
          <span>• Focused on code quality</span>
        </div>
      </div>
      <div className="hero-card">
        <h3>Current Focus</h3>
        <p>Building performant, maintainable web solutions.</p>
        <ul>
          <li>TypeScript-first development</li>
          <li>Clean API design</li>
          <li>CI/CD and best practices</li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
