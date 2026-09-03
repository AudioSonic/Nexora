import "./MainContent.css" 
import PhaseContent from "./PhaseContent"
import PhaseNavigation from "./PhaseNavigation"
import PhaseOverview from "./PhaseOverview"

function MainContent(){
    return (
    <div className="skill-page-header">
        <img src="assets/logos/js_logo.png" alt="undefined" className="skill-page-logo"/>
        <div className="skill-page-title-group">
            <h1 className="skill-page-title">JavaScript</h1>
            <p className="skill-page-description">Lerne JavaScript von den Grundlagen bis zur Strukturierung moderner Anwendungen.</p>
        </div>

        <PhaseContent />
        <PhaseNavigation />
        <PhaseOverview />

        <div id="skill-page-footer">
            <img id="skill-page-footer-icon" src="assets/icons/icon_leaf.svg"/>
            <span id="skill-page-footer-text">Dranbleiben zahlt sich aus. Jeder Schritt bringt dich weiter!</span>
        </div>
    </div>
    )
}

export default MainContent;