import "./FinalProjectButton.css"
import LockIcon from "../../assets/icons/icon_lock.svg"

type FinalProjectButtonProp = {
    title: string,
    subTitle: string,
    unlocked: boolean
}

function FinalProjectButton(props: FinalProjectButtonProp){
    return(
        <button className={props.unlocked ? "btn final-project-button-active" : "btn final-project-button-inactive"}>
            <div className="final-project-locked">
                <img className="final-project-icon" src={LockIcon} style={props.unlocked ? {display: "none"} : {display: "flex"}}/>
                <span className={props.unlocked ? "final-project-title-active" : "final-project-title-inactive"}>
                    {props.unlocked ? "Zum Abschlussprojekt" : "Abschlussprojekt freischalten"}
                </span>
            </div>
            
            <span className="final-project-subtitle">
                {props.unlocked ? "" : "Schalte alle Themen frei, um das Abschlussprojekt zu starten."}
            </span>
        </button>
    )
}

export default FinalProjectButton;