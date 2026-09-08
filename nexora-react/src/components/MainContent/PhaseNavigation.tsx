import "./PhaseNavigation.css"
import Phase from "./ProjectPhase"
import type { Phase as PhaseData } from "../data/data";
import { type Skill} from "../data/data";

type PhaseNavigationProps = {
    skill: Skill,
    activePhaseId: number,
    onPhaseSelect: (id: number) => void
}

function isPhaseUnlocked(phase: PhaseData, skill: Skill): boolean {
  const currentPhaseIndex = skill.phases.findIndex(
    currentPhase => currentPhase.id === phase.id
  );

  // Die erste Phase ist immer freigeschaltet
  if (currentPhaseIndex === 0) {
    return true;
  }

  // Phase wurde im Skill nicht gefunden
  if (currentPhaseIndex === -1) {
    return false;
  }

  const previousPhase = skill.phases[currentPhaseIndex - 1];

  const allThemesCompleted = previousPhase.themes.every(
    theme => theme.completed
  );

  const allProjectsCompleted = previousPhase.finalProjects.every(
    project => project.completed
  );

  return allThemesCompleted && allProjectsCompleted;
}

function PhaseNavigation(props: PhaseNavigationProps){
    return (
        <section className="panel phase-overview">
            {props.skill.phases.map(phase => 
                <Phase
                    phaseTitle={phase.title}
                    unlocked={isPhaseUnlocked(phase, props.skill)}
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
