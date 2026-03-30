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

      <div className="pt-16">
        <HeroSection />
        <LabModules />
        <DesignPipeline />
        <ModelViewer />
        <SimulationResults />
        <ResearchPapers />
        <PrintReady />
      </div>

      <AIAssistant />

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: 'rgba(0,212,255,0.08)' }}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground font-heading tracking-wider">
            © 2026 THE CORRECT STEPS — Virtual Research Lab
          </p>
        </div>
      </footer>
    </div>
  );
}
