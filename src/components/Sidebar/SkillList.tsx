import "./SkillList.css"
import SkillCard from './SkillCard'
import { skills, type Skill } from "../data/data";

type SkillListProps = {
    onSkillSelect: (skillId: number) => void 
    onAddSkill: () => void
}

function calculateProgress(prop: Skill): number {
    let totalThemesCount = 0;
    let completedThemesCount = 0;

    prop.phases.forEach(phase => {
        totalThemesCount += phase.themes.length;
        completedThemesCount += phase.themes.filter(theme => theme.completed).length;
    });

    return Math.round((completedThemesCount / totalThemesCount) * 100);
}

function SkillList(props: SkillListProps){
    return (
            <div className="skills" id="sidebar-skills">
                <span id="sidebar-section-title">MEINE SKILLS</span>
                <nav id="sidebar-nav">

                    <div id="skill-list">
                        {skills.map(skill => 
                            <SkillCard name={skill.name} progress={calculateProgress(skill)} 
                            logoSrc={skill.logo} logoAlt={skill.logoAlt} skillId={skill.id}
                            onSkillSelect={props.onSkillSelect} key={skill.id}/>
                        )}
                    </div>

                    <button className="btn" id="btn-add-skill" onClick={props.onAddSkill}>
                        + Neuen Skill hinzufügen
                    </button>
                </nav>
            </div>
    )
}

export default SkillList;
