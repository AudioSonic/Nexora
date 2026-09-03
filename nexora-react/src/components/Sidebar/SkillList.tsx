import "./SkillList.css"
import CSharpLogo from "../../assets/temp/csharp_logo.png"
import JSLogo from "../../assets/temp/js_logo.png"
import ReactLogo from "../../assets/temp/react_logo.svg"
import SkillItem from './SkillItem'

function SkillList(){
    return (
            <div className="skills" id="sidebar-skills">
                <span id="sidebar-section-title">MEINE SKILLS</span>
                <nav id="sidebar-nav">

                    <div id="skill-list">
                        <SkillItem name="JavaScript" progress={70} logoSrc={JSLogo} logoAlt=""/>
                        <SkillItem name="C#" progress={55} logoSrc={CSharpLogo} logoAlt="C# Logo"/>
                        <SkillItem name="React" progress={50} logoSrc={ReactLogo} logoAlt="React Logo"/>
                    </div>

                    <button className="btn" id="btn-add-skill">+ Neuen Skill hinzufügen</button>
                </nav>
            </div>
    )
}

export default SkillList;