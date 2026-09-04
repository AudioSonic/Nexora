import "./FinalProjectButton.css"
import LockIcon from "../../assets/icons/icon_lock.svg"

type FinalProjectButtonProp = {
    title: string,
    subTitle: string,
    unlocked: boolean
}

function FinalProjectButton(props: FinalProjectButtonProp){
    return(
        <button className="btn final-project-button-active">
            <img className="final-project-icon" src={LockIcon}/>
            <span className="final-project-title">
                {props.title}
            </span>
            <span className="final-project-subtitle">
                {props.subTitle}
            </span>
        </button>
    )
}

export default FinalProjectButton;