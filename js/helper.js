function calculateProgressBarValue(array){
    let completedThemesAmount = 0;
    let allThemesAmount = 0;

    const themes = array.flatMap(element =>
        Array.isArray(element.themes) ? element.themes : [element]
    );

    completedThemesAmount = themes.filter(theme => theme.completed === true).length;
    allThemesAmount = themes.length;

    if (allThemesAmount === 0) {
        return 0;
    }

    const progressBarValue = Math.round((completedThemesAmount / allThemesAmount) * 100);

    return progressBarValue;
}

function calculateTotalCompletedThemes() {
    let completedThemesAmount = 0;
    let overallThemeAmount = 0;
    let completedThemePercentage = 0;
    const totalProgressBar = document.getElementById("total-progress-circle");
    const totalProgressValue = document.getElementById("total-progress-value");
    const totalProgressText = document.getElementById("total-progress-text");

    skills.forEach(skill => {
        skill.phases.forEach(phase => {
            completedThemesAmount += phase.themes.filter(
                theme => theme.completed === true
            ).length;
        });
    });

    skills.forEach(skill => {
        skill.phases.forEach(phase => {
            phase.themes.forEach(theme => overallThemeAmount++);
        })
    });

    completedThemePercentage = Math.round((completedThemesAmount / overallThemeAmount) * 100);
    totalProgressValue.textContent = `${completedThemePercentage}%`;

    totalProgressBar.style.setProperty(
        "--progress",
        `${completedThemesAmount}%`
    );

    totalProgressText.textContent = `${completedThemesAmount} von ${overallThemeAmount} Themen abgeschlossen`;

    return completedThemesAmount;
}

function checkPhaseCompletion(skill, phase){
    let phaseCompleted = false;

    // Phase 1 ist immer freigeschaltet
    if (phase.id === skill.phases[0].id) {
        return true;
    }

    const phaseIndex = skill.phases.findIndex(
        element => element.id === phase.id
    );

    const previousPhase = skill.phases[phaseIndex - 1];

    phaseCompleted = previousPhase.themes.every(
        theme => theme.completed
    ) && 
    previousPhase.finalProjects.every(
        finalProject => finalProject.completed === true);

    return phaseCompleted;
}
