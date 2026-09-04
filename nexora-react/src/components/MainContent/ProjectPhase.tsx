import "./ProjectPhase.css"
import LockIcon from "../../assets/icons/icon_lock.svg"

type ProjectPhaseProp = {
    phaseTitle: string,
    unlocked: boolean,
    phaseDescription: string
}

function ProjectPhase(props: ProjectPhaseProp){
    return (
        <button className="phase-section-button active">
            <div className="phase-title-and-lock">
            <h2 className="phase-section-title">{props.phaseTitle}</h2>
            <img src={LockIcon} className="phase-section-lock-icon"/>
            </div>
            <span className="phase-section-description">{props.phaseDescription}</span>
        </button>
    )
}

export default ProjectPhase; 