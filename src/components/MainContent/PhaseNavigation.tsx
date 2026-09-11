import "./PhaseNavigation.css"
import Phase from "./ProjectPhase"
import type { Phase as PhaseData, Skill } from "../data/data";
import { getThemeProgressKey, isThemeCompleted, type ThemeProgressMap } from "../data/themeProgress";

type PhaseNavigationProps = { skill: Skill; activePhaseId: number; onPhaseSelect: (id: number) => void; progress: ThemeProgressMap };

function isPhaseUnlocked(phase: PhaseData, skill: Skill, progress: ThemeProgressMap): boolean {
    const index = skill.phases.findIndex(currentPhase => currentPhase.id === phase.id);
    if (index === 0) return true;
    if (index === -1) return false;
    const previous = skill.phases[index - 1];
    return previous.themes.every(theme => isThemeCompleted(theme, progress[getThemeProgressKey(skill.id, previous.id, theme.id)])) && previous.finalProjects.every(project => project.completed);
}

function PhaseNavigation({ skill, activePhaseId, onPhaseSelect, progress }: PhaseNavigationProps) {
    return <section className="panel phase-overview">{skill.phases.map(phase => <Phase phaseTitle={phase.title} unlocked={isPhaseUnlocked(phase, skill, progress)} phaseDescription={phase.shortDesc} key={phase.id} active={phase.id === activePhaseId} onSelect={() => onPhaseSelect(phase.id)} />)}</section>;
}

export default PhaseNavigation;
