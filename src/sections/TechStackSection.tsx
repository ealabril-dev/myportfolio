import React from "react";

interface TechStackSectionProps {
  compact?: boolean;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ compact }) => {
  return (
    <section className="section">
      <h2 className="section-title">Tech Stack</h2>
      <p className="section-subtitle">
        Tools and technologies I use to deliver reliable solutions.
      </p>

      <div className="grid grid-3">
        <div className="card">
          <h3>Frontend</h3>
          <p>Modern, type-safe interfaces.</p>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>Vue.js</li>
            <li>Next.js / Nuxt.js</li>
            {!compact && <li>Styled Components / CSS Modules</li>}
          </ul>
        </div>
        <div className="card">
          <h3>Backend</h3>
          <p>Secure & scalable APIs.</p>
          <ul>
            <li>Node.js</li>
            <li>Laravel</li>
            <li>Python</li>
            {!compact && <li>REST best practices</li>}
          </ul>
        </div>
        <div className="card">
          <h3>Data & Other</h3>
          <p>Persistence and infrastructure.</p>
          <ul>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            {!compact && (
              <>
                <li>Git & GitHub</li>
                <li>CI/CD pipelines</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
