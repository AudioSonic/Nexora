import "./SkillItem.css"

type SkillItemProps = {
    name: string;
    progress: number;
    logoSrc: string;
    logoAlt: string;

};

function SkillItem(props: SkillItemProps){
    return(
        <button className="btn skill-button">
            <div className="skill-button-upper">
                <div className="logo-title">
                    <img className="skill-logo" src={props.logoSrc} alt={props.logoAlt}/>
                    <span>{props.name}</span>
                </div>
                <span className="skill-percentage">{props.progress}%</span>
                </div>
            <progress className="skill-button-progress-bar" value={props.progress} max="100"/>
        </button>
    )
}

export default SkillItem