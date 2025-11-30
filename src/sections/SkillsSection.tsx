import React from "react";

interface SkillsSectionProps {
  compact?: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ compact }) => {
  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Core capabilities I bring to teams and projects.
      </p>
      <div className="grid grid-3">
        <div className="card">
          <h3>Frontend Engineering</h3>
          <p>
            Building responsive, accessible interfaces with React/Vue.js, TypeScript, and modern CSS.
          </p>
          {!compact && <ul>
            <li>React & React Hooks</li>
            <li>State management</li>
            <li>Component-driven architecture</li>
          </ul>}
        </div>
        <div className="card">
          <h3>Backend Development</h3>
          <p>
           Designing robust APIs and services across Node.js and Laravel environments, utilizing industry best practices
          </p>
          {!compact && <ul>
            <li>RESTful APIs</li>
            <li>Authentication & authorization</li>
            <li>Database modeling</li>
          </ul>}
        </div>
        <div className="card">
          <h3>Software Craftsmanship</h3>
          <p>
            Focus on maintainability, testing, and clean code for long-term
            success.
          </p>
          {!compact && <ul>
            <li>Clean architecture</li>
            <li>Testing mindset</li>
            <li>Collaboration & documentation</li>
          </ul>}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
