import "./MainContent.css" 
import FooterIcon from "../../assets/icons/icon_leaf.svg"
import PhaseContent from "./PhaseContent"
import PhaseNavigation from "./PhaseNavigation"
import PhaseOverview from "./PhaseOverview"
import type { Skill } from "../data/data"

function MainContent({ skill }: { skill: Skill }){
    return (
        <div className="main-content">
                <div className="skill-page-header">
                    <img src={skill.logo} alt={skill.logoAlt} className="skill-page-logo"/>
                    <div className="skill-page-title-group">
                        <h1 className="skill-page-title">{skill.name}</h1>
                        <p className="skill-page-description">{skill.desc}</p>
                    </div>
                </div>


                <PhaseContent />
                <PhaseNavigation skill={skill} />
                <PhaseOverview phaseTitle="Title" phaseDescription="Description" phasePercentage={70} totalAmountOfThemes={30} completedAmountOfThemes={15} themeTitle="Variable" themeCompleted={false}/>



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
