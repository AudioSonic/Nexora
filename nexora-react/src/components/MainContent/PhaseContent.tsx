import "./PhaseContent.css"
import CompletedFinalProjectsIcon from "../../assets/icons/icon_final_project.svg"
import CompletedThemesIcon from "../../assets/icons/icon_completed_themes.svg"
import CompletedPhasesIcon from "../../assets/icons/icon_completed_phases.svg"
import CompletedPercentageIcon from "../../assets/icons/icon_completed_percentage.svg"

function PhaseContent(){
    return (
        <section className="general-overview panel">
            <div className="general-overview-section">
                <div className="overview-content">
                    <img className="overview-icon" src={CompletedFinalProjectsIcon}/>
                    <span className="overview-amount">1</span>
                    <span className="overview-description">Abschlussprojekte</span>
                </div>
            </div>

            <div className="general-overview-section">
                <div className="overview-content">
                    <img className="overview-icon" src={CompletedThemesIcon}/>
                    <span className="overview-amount">16 / 26</span>
                    <span className="overview-description">Themen</span>
                </div>
            </div>

            <div className="general-overview-section">
                <div className="overview-content">
                    <img className="overview-icon" src={CompletedPhasesIcon}/>
                    <span className="overview-amount">1 / 4</span>
                    <span className="overview-description">Phasen</span>
                </div>
            </div>

            <div className="general-overview-section">
                <div className="overview-content">
                    <img className="overview-icon" src={CompletedPercentageIcon}/>
                    <span className="overview-amount">62%</span>
                    <span className="overview-description">Fortschritt</span>
                </div>
            </div>
        </section>
        
    )
}

export default PhaseContent;