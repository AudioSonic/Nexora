import "./ThemeButton.css"
import IconCheck from "../../assets/icons/icon_check.svg"
import IconArrowRight from "../../assets/icons/icon_arrow_right.svg"

type ThemeButtonProp = {
    title: string,
    completed: boolean
}

function ThemeButton(props: ThemeButtonProp){
    return (
        <button className="btn theme-button">
            <div className="theme-icon-and-title">
                <div className="theme-check-icon-container" style={{ backgroundColor: "var(--color-secondary)" }}>
                    <img  src={IconCheck}/>
                </div>
                <span className="theme-title">{props.title}</span>
            </div>
            <img src={IconArrowRight}/>
        </button>
    )
}

export default ThemeButton;