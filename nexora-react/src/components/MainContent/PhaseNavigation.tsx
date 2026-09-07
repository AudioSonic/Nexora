import "./PhaseNavigation.css"
import Phase from "./ProjectPhase"
import { useState } from "react";
import { type Skill} from "../data/data";

function PhaseNavigation({ skill }: { skill: Skill }){
    const [activePhase, setActivePhase] = useState(1);
    return (
        <section className="panel phase-overview">
            {skill.phases.map(phase => 
                <Phase phaseTitle={phase.title} unlocked={true} 
                phaseDescription={phase.shortDesc} key={phase.id} active={phase.id === activePhase}
                onSelect={() => setActivePhase(phase.id) }/>
            )}
          
        </section>
    )
}

export default PhaseNavigation;
