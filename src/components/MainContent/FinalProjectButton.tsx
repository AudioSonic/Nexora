import "./FinalProjectButton.css"
import LockIcon from "../../assets/icons/icon_lock.svg"

type FinalProjectButtonProp = {
    title: string,
    unlocked: boolean
}

function FinalProjectButton(props: FinalProjectButtonProp){
    return(
        <button disabled={!props.unlocked} className={props.unlocked ? "btn final-project-button-active" : "final-project-button-inactive"}>
            <div className="final-project-locked">
                <img className="final-project-icon" src={LockIcon} style={props.unlocked ? {display: "none"} : {display: "flex"}}/>
                <span className={props.unlocked ? "final-project-title-active" : "final-project-title-inactive"}>
                    {props.unlocked ? `Abschlussprojekt: ${props.title}` : "Abschlussprojekt gesperrt"}
                </span>
            </div>
            
            <span className="final-project-subtitle">
                {props.unlocked ? "" : "Schließe alle Themen ab, um das Abschlussprojekt freizuschalten."}
            </span>
        </button>
    )
}

export default FinalProjectButton;