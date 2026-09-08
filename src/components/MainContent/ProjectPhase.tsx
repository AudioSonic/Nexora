import "./ProjectPhase.css";
import LockIcon from "../../assets/icons/icon_lock.svg";

type ProjectPhaseProp = {
    phaseTitle: string,
    unlocked: boolean,
    phaseDescription: string,
    active: boolean,
    onSelect: () => void
}

function ProjectPhase(props: ProjectPhaseProp) {
    return (
        <button
            className={`phase-section-button ${props.active ? "active" : ""}`}
            disabled={!props.unlocked}
            onClick={props.onSelect}
        >
            <div className="phase-title-and-lock">
                <h2 className="phase-section-title">
                    {props.phaseTitle}
                </h2>

                {!props.unlocked && (
                    <img
                        src={LockIcon}
                        className="phase-section-lock-icon"
                    />
                )}
            </div>

            <span className="phase-section-description">
                {props.phaseDescription}
            </span>
        </button>
    )
}

export default ProjectPhase;

