import "./PhaseOverview.css"
import ThemeButton from "./ThemeButton"
import FinalProjectButton from "./FinalProjectButton"
import type { Phase } from "../data/data"
import type { Theme } from "../data/data"

type PhaseOverviewProp = {
    phase: Phase;
    theme: Theme;
}

function calculateProgress(prop: Phase) {
    let totalThemesCount = prop.themes.length;
    let completedThemesCount = 0;

    prop.themes.forEach(theme => {
        if(theme.completed){
            completedThemesCount++;
        }
    }); 

    return {
        percentage: Math.round((completedThemesCount / totalThemesCount) * 100),
        totalThemes: totalThemesCount,
        completedThemes: completedThemesCount
    };
}

function PhaseOverview(prop: PhaseOverviewProp){
    return (
        <section className="phase-content panel">

            <header className="phase-content-header">
                <div>
                    <h3 className="phase-title">{prop.phase.title}</h3>
                    <p className="phase-description">{prop.phase.longDesc}</p>
                </div>

                <span className="phase-percentage">{calculateProgress(prop.phase).percentage}% abgeschlossen</span>
            </header>

            <div className="phase-progress">
                <progress
                    className="skill-progress-bar"
                    value={calculateProgress(prop.phase).percentage}
                    max="100"
                ></progress>

                <span className="phase-progress-info">
                    {calculateProgress(prop.phase).completedThemes} von {calculateProgress(prop.phase).totalThemes} Themen abgeschlossen
                </span>
            </div>

            <div className="phase-sections">
                {prop.phase.themes.map(theme => 
                    <ThemeButton title={theme.title} completed={theme.completed} />
                )}
            </div>

            <FinalProjectButton title="Abschlussprojektfreigeschaltet" subTitle="Zum Abschlussprojekt" unlocked={calculateProgress(prop.phase).percentage === 100 ? true : false}/>
        </section>
    )
}

export default PhaseOverview;
