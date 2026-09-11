import "./AddNewSkill.css"
import LearningIcon from "../../assets/icons/icon_final_project.svg"
import "./ChatBotSection"
import { useEffect } from "react";
import ChatBotSection from "./ChatBotSection";
import CategorySection from "./CategorySection";

type AddNewSkillProps = {
    onClose: () => void
}



function AddNewSkill(prop: AddNewSkillProps){
    useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
        document.body.style.overflow = "";
    };
    }, []);
    return(
        <div className="add-new-skill-modal" onClick={prop.onClose}>
            <div className="add-new-skill-content" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="add-new-skill-title">
                <div className="add-new-skill-header">
                    <div className="icon-container">
                        <img src={LearningIcon} alt="" />
                    </div>
                    <div className="title-and-desc">
                        <h2 id="add-new-skill-title">Neuen Skill hinzufügen</h2>
                        <p>Erzähle mir, was du lernen möchtest. Ich stelle dir ein paar Fragen und erstelle daraus einen individuellen Lernplan.</p>
                    </div>
                    <button className="modal-close" onClick={prop.onClose} aria-label="Modal schließen">×</button>
                </div>
                <div className="add-skill-main-content">
                    <ChatBotSection />
                    <CategorySection />
                </div>
                <div className="add-new-skill-footer">
                    <button className="secondary-action" onClick={prop.onClose}>Abbrechen</button>
                    <button className="primary-action" disabled>Lernplan erstellen <span aria-hidden="true">→</span></button>
                </div>
            </div>
        </div>
    )
}

export default AddNewSkill
