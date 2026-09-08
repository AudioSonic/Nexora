import "./TotalProgress.css"
import { skills } from "../data/data";

function calculateTotalProgress(){
    let totalAmount = 0;
    let completedAmount = 0;

    skills.forEach(skill => {
        skill.phases.forEach(phase => {
            totalAmount += phase.themes.length;
            phase.themes.forEach(theme => {
                if(theme.completed){
                    completedAmount++;
                }
            })
        })
    });

    return {
        totalAmountOfThemes: totalAmount,
        completedAmountOfThemes: completedAmount,
        progress: Math.round((completedAmount / totalAmount) * 100)
    }
}

function TotalProgress(){
    const progress = calculateTotalProgress();
    return (
        <div id="total-progress">
            <span id="total-progress-title">Gesamtfortschritt</span>
            <div id="total-percentage">
                <div id="progress-circle" style={{ "--progress": `${progress.progress}%` } as React.CSSProperties}>
                    <span id="total-progress-value">{progress.progress}%</span>
                </div>

                <span id="total-progress-text">
                    {progress.completedAmountOfThemes} von {progress.totalAmountOfThemes} Themen<br/>abgeschlossen
                </span>
            </div>
        </div>
    )
}

export default TotalProgress;