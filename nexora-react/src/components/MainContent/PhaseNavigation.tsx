import "./PhaseNavigation.css"
import Phase from "./ProjectPhase"
import { useState } from "react";
import { type Skill} from "../data/data";

type PhaseNavigationProps = {
    skill: Skill,
    activePhaseId: number,
    onPhaseSelect: (id: number) => void
}

function PhaseNavigation(props: PhaseNavigationProps){
    return (
        <section className="panel phase-overview">
            {props.skill.phases.map(phase => 
                <Phase
                    phaseTitle={phase.title}
                    unlocked={true}
                    phaseDescription={phase.shortDesc}
                    key={phase.id}
                    active={phase.id === props.activePhaseId}
                    onSelect={() => props.onPhaseSelect(phase.id)}
                />
            )}
          
        </section>
    )
}

export default PhaseNavigation;
