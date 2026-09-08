import "./MainContent.css" 
import FooterIcon from "../../assets/icons/icon_leaf.svg"
import PhaseContent from "./SkillContent"
import PhaseNavigation from "./PhaseNavigation"
import PhaseOverview from "./PhaseOverview"
import type { Skill } from "../data/data"
import type { Phase } from "../data/data"
import type { Theme } from "../data/data"

type MainContentProps = {
    skill: Skill,
    phase: Phase,
    theme: Theme,
    activePhaseId: number,
    onPhaseSelect: (id: number) => void
};

function MainContent(props: MainContentProps) {
    return (
        <div className="main-content">
                <div className="skill-page-header">
                    <img src={props.skill.logo} alt={props.skill.logoAlt} className="skill-page-logo"/>
                    <div className="skill-page-title-group">
                        <h1 className="skill-page-title">{props.skill.name}</h1>
                        <p className="skill-page-description">{props.skill.desc}</p>
                    </div>
                </div>

                <PhaseContent activeSkill={props.skill}/>
                <PhaseNavigation skill={props.skill} activePhaseId={props.activePhaseId} onPhaseSelect={props.onPhaseSelect}/>
                <PhaseOverview phase={props.phase} theme={props.theme}/>

                <div id="skill-page-footer">
                    <img
                        id="skill-page-footer-icon"
                        src={FooterIcon}
                    />
                    <span id="skill-page-footer-text">
                        Dranbleiben zahlt sich aus. Jeder Schritt bringt dich weiter!
                    </span>
                </div>
        </div>
    )
}

export default MainContent;
