import "./SkillContent.css"
import CompletedFinalProjectsIcon from "../../assets/icons/icon_final_project.svg"
import CompletedThemesIcon from "../../assets/icons/icon_completed_themes.svg"
import CompletedPhasesIcon from "../../assets/icons/icon_completed_phases.svg"
import CompletedPercentageIcon from "../../assets/icons/icon_completed_percentage.svg"
import type { Skill } from "../data/data"
import { getThemeProgressKey, isThemeCompleted, type ThemeProgressMap } from "../data/themeProgress"

type PhaseContentProps = { activeSkill: Skill; progress: ThemeProgressMap };

function calculateProgress(skill: Skill, progress: ThemeProgressMap) {
    let completedFinalProjects = 0;
    let completedThemes = 0;
    let totalThemes = 0;
    let completedPhases = 0;

    skill.phases.forEach(phase => {
        totalThemes += phase.themes.length;
        completedThemes += phase.themes.filter(theme => isThemeCompleted(theme, progress[getThemeProgressKey(skill.id, phase.id, theme.id)])).length;
        completedFinalProjects += phase.finalProjects.filter(project => project.completed).length;
        if (phase.themes.every(theme => isThemeCompleted(theme, progress[getThemeProgressKey(skill.id, phase.id, theme.id)])) && phase.finalProjects.every(project => project.completed)) completedPhases++;
    });

    return { percentage: Math.round((completedThemes / totalThemes) * 100), totalThemes, completedThemes, completedFinalProjects, completedPhases, totalPhases: skill.phases.length };
}

function PhaseContent({ activeSkill, progress }: PhaseContentProps) {
    const data = calculateProgress(activeSkill, progress);
    const entries = [
        [CompletedFinalProjectsIcon, data.completedFinalProjects, "Abschlussprojekte"],
        [CompletedThemesIcon, `${data.completedThemes} / ${data.totalThemes}`, "Themen"],
        [CompletedPhasesIcon, `${data.completedPhases} / ${data.totalPhases}`, "Phasen"],
        [CompletedPercentageIcon, `${data.percentage}%`, "Fortschritt"]
    ] as const;
    return <section className="general-overview panel">{entries.map(([icon, amount, label]) => <div className="general-overview-section" key={label}><div className="overview-content"><img className="overview-icon" src={icon}/><span className="overview-amount">{amount}</span><span className="overview-description">{label}</span></div></div>)}</section>;
}

export default PhaseContent;
