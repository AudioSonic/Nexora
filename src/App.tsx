import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import MainContent from "./components/MainContent/MainContent"
import { useState } from "react";
import { skills } from "./components/data/data";
import type { ThemeProgressMap } from "./components/data/themeProgress";
import AddNewSkill from "./components/Modals/AddNewSkill";

function App() {
  const [activeSkillId, setSkillId] = useState(1);
  const [activePhaseId, setPhaseId] = useState(1);
  const [activeThemeId, setThemeId] = useState<number | null>(null);
  const [themeProgress, setThemeProgress] = useState<ThemeProgressMap>({});
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const [isAddSkillModalOpen, setIsAddSkillModalOpen] = useState(false);

  function handleSkillSelect(skillId: number) {
    setSkillId(skillId);
    setPhaseId(1);
    setThemeId(null);
    setActiveProjectId(null);
  }

  const selectedSkill = skills.find(
    skill => skill.id === activeSkillId
  );

  if (!selectedSkill) {
    return <p>Skill nicht gefunden</p>;
  }

  const selectedPhase = selectedSkill?.phases.find(
    phase => phase.id === activePhaseId
  );

  if (!selectedPhase) {
    return <p>Phase nicht gefunden</p>;
  }

  const selectedTheme = activeThemeId === null
    ? undefined
      : selectedPhase.themes.find(theme => theme.id === activeThemeId);
  const selectedProject = activeProjectId === null ? undefined : selectedPhase.finalProjects.find(project => project.id === activeProjectId);

  return (
    <>
    <div id="app">
      <Sidebar
        onSkillSelect={handleSkillSelect}
        onAddSkill={() => setIsAddSkillModalOpen(true)}
      />
      <MainContent
        skill={selectedSkill}
        phase={selectedPhase}
        theme={selectedTheme}
        themeProgress={themeProgress}
        onThemeProgressChange={(key, progress) => setThemeProgress(previous => ({ ...previous, [key]: progress }))}
        activePhaseId={activePhaseId}
        onPhaseSelect={(phaseId) => {
          setPhaseId(phaseId);
          setThemeId(null);
        }}
        onThemeSelect={setThemeId}
        onThemeBack={() => setThemeId(null)}
        project={selectedProject}
        onProjectSelect={setActiveProjectId}
        onProjectBack={() => setActiveProjectId(null)}
      />
    </div>
    {isAddSkillModalOpen && (
      <AddNewSkill onClose={() => setIsAddSkillModalOpen(false)} />
    )}
    </>
  );
}

export default App
