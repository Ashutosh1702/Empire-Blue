import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SituationImpactSection from "./components/SituationImpactSection";
import WaveDivider from "./components/WaveDivider";
import HealthBenefitsSection from "./components/HealthBenefitsSection";

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SituationImpactSection />
      
      <HealthBenefitsSection />
    </main>
  );
};

export default HomePage;
