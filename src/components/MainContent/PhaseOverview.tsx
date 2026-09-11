import "./PhaseOverview.css"
import ThemeButton from "./ThemeButton"
import FinalProjectButton from "./FinalProjectButton"
import type { Phase } from "../data/data"
import { getThemeProgressKey, isThemeCompleted, type ThemeProgressMap } from "../data/themeProgress"

type PhaseOverviewProp = {
    phase: Phase;
    skillId: number;
    progress: ThemeProgressMap;
    onThemeSelect: (id: number) => void;
}

function calculateProgress(prop: PhaseOverviewProp) {
    const totalThemesCount = prop.phase.themes.length;
    let completedThemesCount = 0;

    prop.phase.themes.forEach(theme => {
        if(isThemeCompleted(theme, prop.progress[getThemeProgressKey(prop.skillId, prop.phase.id, theme.id)])){
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
    const progress = calculateProgress(prop);
    return (
        <section className="phase-content panel">

            <header className="phase-content-header">
                <div>
                    <h3 className="phase-title">{prop.phase.title}</h3>
                    <p className="phase-description">{prop.phase.longDesc}</p>
                </div>

                <span className="phase-percentage">{progress.percentage}% abgeschlossen</span>
            </header>

            <div className="phase-progress">
                <progress
                    className="skill-progress-bar"
                    value={progress.percentage}
                    max="100"
                ></progress>

                <span className="phase-progress-info">
                    {progress.completedThemes} von {progress.totalThemes} Themen abgeschlossen
                </span>
            </div>

            <div className="phase-sections">
                {prop.phase.themes.map(theme => 
                    <ThemeButton
                        title={theme.title}
                        completed={isThemeCompleted(theme, prop.progress[getThemeProgressKey(prop.skillId, prop.phase.id, theme.id)])}
                        key={theme.id}
                        onSelect={() => prop.onThemeSelect(theme.id)}
                    />
                )}
            </div>
            <div className="final-project-list">
                {prop.phase.finalProjects.map(project => 
                    <FinalProjectButton title={project.title} unlocked={progress.percentage === 100 ? true : false} key={project.id}/>
                )}
            </div>
                <button className="btn add-final-project-button" style={progress.percentage === 100 && 
                    prop.phase.finalProjects.every(project => project.completed) ? {display: "flex"} : {display: "none"}} >
                    + Weiteres Abschlussprojekt hinzufügen
                </button>
        </section>
    )
}

export default PhaseOverview;
