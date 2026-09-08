import "./SkillContent.css"
import CompletedFinalProjectsIcon from "../../assets/icons/icon_final_project.svg"
import CompletedThemesIcon from "../../assets/icons/icon_completed_themes.svg"
import CompletedPhasesIcon from "../../assets/icons/icon_completed_phases.svg"
import CompletedPercentageIcon from "../../assets/icons/icon_completed_percentage.svg"
import type { Skill } from "../data/data"

type PhaseContentProps = {
    activeSkill: Skill;
}

function calculateProgress(prop: Skill) {
    let completedFinalProjectCount = 0;
    let completedThemeCount = 0;
    let totalThemeCount = 0;
    let completedPhaseCount = 0;
    const totalPhaseCount = prop.phases.length;

    prop.phases.forEach(phase => {
        totalThemeCount += phase.themes.length;
        completedThemeCount += phase.themes.filter(theme => theme.completed).length;

        completedFinalProjectCount += phase.finalProjects.filter(project => project.completed).length;
        
        if(phase.themes.every(theme => theme.completed) && phase.finalProjects.every(project => project.completed)){
            completedPhaseCount++;
        }
    });

    return {
        percentage: Math.round((completedThemeCount / totalThemeCount) * 100),
        totalThemes: totalThemeCount,
        completedThemes: completedThemeCount,
        completedFinalProjects: completedFinalProjectCount,
        completedPhases: completedPhaseCount,
        totalPhases: totalPhaseCount
    };
}

function PhaseContent(props: PhaseContentProps){
    const skillData = calculateProgress(props.activeSkill);
    return (
        <section className="general-overview panel">
            <div className="general-overview-section">
                <div className="overview-content">
                    <img className="overview-icon" src={CompletedFinalProjectsIcon}/>
                    <span className="overview-amount">{skillData.completedFinalProjects}</span>
                    <span className="overview-description">Abschlussprojekte</span>
                </div>
            </div>

            <div className="general-overview-section">
                <div className="overview-content">
                    <img className="overview-icon" src={CompletedThemesIcon}/>
                    <span className="overview-amount">{skillData.completedThemes} / {skillData.totalThemes}</span>
                    <span className="overview-description">Themen</span>
                </div>
            </div>

            <div className="general-overview-section">
                <div className="overview-content">
                    <img className="overview-icon" src={CompletedPhasesIcon}/>
                    <span className="overview-amount">{skillData.completedPhases} / {skillData.totalPhases}</span>
                    <span className="overview-description">Phasen</span>
                </div>
            </div>

            <div className="general-overview-section">
                <div className="overview-content">
                    <img className="overview-icon" src={CompletedPercentageIcon}/>
                    <span className="overview-amount">{skillData.percentage}%</span>
                    <span className="overview-description">Fortschritt</span>
                </div>
            </div>
        </section>
        
    )
}

export default PhaseContent;