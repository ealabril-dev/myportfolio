import React from "react";

interface ProjectsSectionProps {
  compact?: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ compact }) => {
  const projects = [
    {
      name: "HPDAI Website",
      role: "Full Stack Developer",
      description:
        "Built a full-stack web platform with authentication, dashboards, and API integration.",
      tech: ["HTML5", "JavaScript", "jQuery", "Bootstrap"],
    },
    {
      name: "Dental Access Android Application",
      role: "Android Developer",
      description:
        "Developed a native Android application focused on intuitive content presentation and browsing, utilizing reliable API integration for seamless access to up-to-date informational data.",
      tech: ["Java", "SQLite", "Laravel", "PostgreSQL"],
    },
    {
      name: "ITMS Iris Timeclock",
      role: "Full Stack Developer",
      description:
        "Delivered a full-stack solution integrating native Android development (Java/Kotlin) on biometric hardware with a custom API for PostgreSQL database connectivity",
      tech: ["Java/Kotlin", "PHP", "PostgreSQL"],
    },
    {
      name: "EFTC Time Management System",
      role: "Full Stack Developer",
      description:
        "Managed the stability and continuous development of the EFTC payroll platform. Optimized system performance and delivered complex new features, ensuring the software remained reliable, scalable, and compliant with evolving time management requirements.",
      tech: ["Vue.js", "Laravel", "PostgreSQL"],
    },
    {
      name: "Facility Wordpress Websites",
      role: "Wordpress Developer",
      description:
        "Ensured high stability and optimized the performance of a network of Facility CMS websites built on WordPress. The work involved developing custom themes/plugins, managing update lifecycles, and implementing robust security enhancements.",
      tech: ["PHP ", "MySQL", "HTML", "CSS"],
    },
  ];

  const items = compact ? projects.slice(0, 2) : projects;

  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Selected work that showcases my experience across the stack.
      </p>

      <div className="grid grid-3">
        {items.map((project) => (
          <div className="card" key={project.name}>
            <h3>{project.name}</h3>
            <p className="project-role">{project.role}</p>
            <p>{project.description}</p>
            <p className="project-tech">
              {project.tech.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
