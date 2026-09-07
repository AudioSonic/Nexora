import "./PhaseOverview.css"
import ThemeButton from "./ThemeButton"
import FinalProjectButton from "./FinalProjectButton"

type PhaseOverviewProp = {
    phaseTitle: string,
    phaseDescription: string,
    phasePercentage: number,
    totalAmountOfThemes: number,
    completedAmountOfThemes: number,
    themeTitle: string,
    themeCompleted: boolean,
   /* onSelect: () => void*/
}

function PhaseOverview(prop: PhaseOverviewProp){
    return (
        <section className="phase-content panel">

            <header className="phase-content-header">
                <div>
                    <h3 className="phase-title">{prop.phaseTitle}</h3>
                    <p className="phase-description">{prop.phaseDescription}</p>
                </div>

                <span className="phase-percentage">{prop.phasePercentage}</span>
            </header>

            <div className="phase-progress">
                <progress
                    className="skill-progress-bar"
                    value={prop.phasePercentage}
                    max="100"
                ></progress>

                <span className="phase-progress-info">
                    {prop.completedAmountOfThemes} von {prop.totalAmountOfThemes} Themen abgeschlossen
                </span>
            </div>

            <div className="phase-sections">
                <ThemeButton title={prop.themeTitle} completed={prop.themeCompleted} />
            </div>

            <FinalProjectButton title="Abschlussprojektfreigeschaltet" subTitle="Zum Abschlussprojekt" unlocked={true}/>
        </section>
    )
}

export default PhaseOverview;
