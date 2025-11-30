import React from "react";
import HeroSection from "../sections/HeroSection";
import SkillsSection from "../sections/SkillsSection";
import TechStackSection from "../sections/TechStackSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection compact />
      <TechStackSection compact />
      <ProjectsSection compact />
      <ContactSection compact />
    </>
  );
};

export default Home;
