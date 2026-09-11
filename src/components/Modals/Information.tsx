import "./Information.css"
import IconCheck from "../../assets/icons/icon_check.svg"

type InformationProps = {
    label: string,
    value: string,
    completed: boolean
}

function Information(prop: InformationProps){
    return(
        <div className="information">
            <div className={`check-outer-layer ${prop.completed ? "completed" : ""}`}>
                <img className="check-icon" src={IconCheck} style={{display: prop.completed ? "flex" : "none"}}/>
            </div>

            <div className="text-information">
                <span><b>{prop.label}</b></span>
                <p>{prop.value ? prop.value : "Noch nicht angegeben"}</p>
            </div>
        </div>
    )
}

export default Information
