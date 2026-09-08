import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import MainContent from "./components/MainContent/MainContent"
import { useState } from "react";
import { skills } from "./components/data/data";

function App() {
  const [activeSkillId, setSkillId] = useState(1);
  const [activePhaseId, setPhaseId] = useState(1);
  const [activeThemeId, setThemeId] = useState(1);

  function handleSkillSelect(skillId: number) {
    setSkillId(skillId);
    setPhaseId(1);
    setThemeId(1);
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

  const selectedTheme = selectedPhase?.themes.find(
    theme => theme.id === activeThemeId
  );

  if (!selectedTheme) {
    return <p>Theme nicht gefunden</p>;
  }

  return (
    <>
    <div id="app">
      <Sidebar onSkillSelect={handleSkillSelect}/>
      <MainContent skill={selectedSkill} phase={selectedPhase} theme={selectedTheme} activePhaseId={activePhaseId} onPhaseSelect={setPhaseId}/>
    </div>
    </>
  );
}

export default App
