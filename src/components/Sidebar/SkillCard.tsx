import "./SkillCard.css"
import SkillLogo from "../SkillLogo"

type SkillItemProps = {
    name: string,
    progress: number,
    logoSrc: string | null,
    logoAlt: string,
    skillId: number,
    onSkillSelect: (skillId: number) => void
};

function SkillCard(props: SkillItemProps){
    return(
        <button className="btn skill-button" onClick={() => props.onSkillSelect(props.skillId)}>
            <div className="skill-button-upper">
                <div className="logo-title">
                    <SkillLogo name={props.name} src={props.logoSrc} alt={props.logoAlt} />
                    <span>{props.name}</span>
                </div>
                <span className="skill-percentage">{props.progress}%</span>
                </div>
            <progress className="skill-button-progress-bar" value={props.progress} max="100"/>
        </button>
    )
}

export default SkillCard
