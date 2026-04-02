"use client";

import "./virtual-research-lab.css";
import HeroSection from "../components/virtual-research-lab/HeroSection";
import LabModules from "../components/virtual-research-lab/LabModules";
import DesignPipeline from "../components/virtual-research-lab/DesignPipeline";
import ModelViewer from "../components/virtual-research-lab/ModelViewer";
import SimulationResults from "../components/virtual-research-lab/SimulationResults";
import ResearchPapers from "../components/virtual-research-lab/ResearchPapers";
import PrintReady from "../components/virtual-research-lab/PrintReady";
import AIAssistant from "../components/virtual-research-lab/AIAssistant";

export default function VirtualResearchLab() {
  return (
    <div className="vrl-page">
        <HeroSection />
        <LabModules />
        <DesignPipeline />
        <ModelViewer />
        <SimulationResults />
        <ResearchPapers />
        <PrintReady />

      {/* <AIAssistant /> */}

    </div>
  );
}
