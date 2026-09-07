import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import MainContent from "./components/MainContent/MainContent"
import { useState } from "react";
import { skills } from "./components/data/data";

function App() {
  const [activeSkillId, setSkillId] = useState(1);

  const selectedSkill = skills.find(
    skill => skill.id === activeSkillId
  );

  if (!selectedSkill) {
    return <p>Skill nicht gefunden</p>;
  }

  return (
    <>
    <div id="app">
      <Sidebar onSkillSelect={setSkillId}/>
      <MainContent skill={selectedSkill} />
    </div>
    </>
  );
}

export default App
