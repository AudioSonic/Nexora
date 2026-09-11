import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import MainContent from "./components/MainContent/MainContent"
import { useState } from "react";
import { skills } from "./components/data/data";
import type { ThemeProgressMap } from "./components/data/themeProgress";

function App() {
  const [activeSkillId, setSkillId] = useState(1);
  const [activePhaseId, setPhaseId] = useState(1);
  const [activeThemeId, setThemeId] = useState<number | null>(null);
  const [themeProgress, setThemeProgress] = useState<ThemeProgressMap>({});

  function handleSkillSelect(skillId: number) {
    setSkillId(skillId);
    setPhaseId(1);
    setThemeId(null);
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

  return (
    <>
    <div id="app">
      <Sidebar onSkillSelect={handleSkillSelect}/>
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
      />
    </div>
    </>
  );
}

export default App
