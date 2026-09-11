import "./CategorySection.css"
import { NewSkillInformation } from "../data/NewSkillInformation";
import Information from "./Information";

function CategorySection(){
    return(
        <div className="category-section">
            <div className="upper-section">
                <h3>Bisher erfasste Informationen</h3>
                <p>Hier siehst du, was ich bereits verstanden habe.</p>
                <div className="informations">
                    {NewSkillInformation.map(information => 
                        <Information
                            key={information.id}
                            label={information.label}
                            value={information.value}
                            completed={information.completed}
                        />
                    )}
                </div>
            </div>

                <div>
                    <hr/>
                    <div className="category-information-text">
                        <span aria-hidden="true">💡</span>
                        <p>
                            Keine Sorge, ich frage nur nach Informationen, die für deinen Lernplan
                            wirklich relevant sind. Du kannst jederzeit etwas ergänzen oder ändern. 
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default CategorySection;
