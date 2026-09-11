import "./MainContent.css" 
import FooterIcon from "../../assets/icons/icon_leaf.svg"
import PhaseContent from "./SkillContent"
import PhaseNavigation from "./PhaseNavigation"
import PhaseOverview from "./PhaseOverview"
import type { Skill } from "../data/data"
import type { Phase } from "../data/data"
import type { Theme } from "../data/data"
import type { FinalProject } from "../data/data"
import ProjectOverview from "./ProjectOverview"
import SkillLogo from "../SkillLogo"
import ThemeContent from "./ThemeContent"
import type { ThemeProgressMap, ThemeProgress } from "../data/themeProgress"

type MainContentProps = {
    skill: Skill,
    phase: Phase,
    theme: Theme | undefined,
    themeProgress: ThemeProgressMap,
    onThemeProgressChange: (key: string, progress: ThemeProgress) => void,
    activePhaseId: number,
    onPhaseSelect: (id: number) => void,
    onThemeSelect: (id: number) => void,
    onThemeBack: () => void,
    project?: FinalProject,
    onProjectSelect: (id: number) => void,
    onProjectBack: () => void
};

function MainContent(props: MainContentProps) {
    return (
        <div className="main-content">
            {props.project ? (
                <ProjectOverview project={props.project} skill={props.skill} onBack={props.onProjectBack} />
            ) : props.theme ? (
                <ThemeContent
                    theme={props.theme}
                    phase={props.phase}
                    progress={props.themeProgress[`${props.skill.id}-${props.phase.id}-${props.theme.id}`]}
                    onProgressChange={(progress) => props.onThemeProgressChange(`${props.skill.id}-${props.phase.id}-${props.theme!.id}`, progress)}
                    onBack={props.onThemeBack}
                />
            ) : (
                <>
                <div className="skill-page-header">
                    <SkillLogo name={props.skill.name} src={props.skill.logo} alt={props.skill.logoAlt} className="skill-page-logo" />
                    <div className="skill-page-title-group">
                        <h1 className="skill-page-title">{props.skill.name}</h1>
                        <p className="skill-page-description">{props.skill.desc}</p>
                    </div>
                </div>

                <PhaseContent activeSkill={props.skill} progress={props.themeProgress}/>
                <PhaseNavigation skill={props.skill} activePhaseId={props.activePhaseId} progress={props.themeProgress} onPhaseSelect={props.onPhaseSelect}/>
                <PhaseOverview phase={props.phase} skillId={props.skill.id} progress={props.themeProgress} onThemeSelect={props.onThemeSelect} onProjectSelect={props.onProjectSelect}/>

                <div id="skill-page-footer">
                    <img
                        id="skill-page-footer-icon"
                        src={FooterIcon}
                    />
                    <span id="skill-page-footer-text">
                        Dranbleiben zahlt sich aus. Jeder Schritt bringt dich weiter!
                    </span>
                </div>
                </>
            )}
        </div>
    )
}

export default MainContent;
