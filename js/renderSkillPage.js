function loadSkillPage(skill){
    const mainContent = document.getElementById("main-content");
    mainContent.replaceChildren();
    mainContent.append(renderSkillPage(skill));
}

function renderSkillPage(skill){
    const skillPage = document.createElement("article");
    skillPage.classList.add("skill-page");

    const header = renderSkillPageHeader(skill);
    const generalOverview = renderGeneralOverview(skill);
    const phaseOverview = renderPhaseOverview(skill);
    const footer = renderSkillPageFooter();

    skillPage.append(header, generalOverview, phaseOverview, footer);

    return skillPage;
}

function renderSkillPageHeader(skill){
    const header = document.createElement("header");
    header.classList.add("skill-page-header");
    const titleAndDesc = document.createElement("div");
    titleAndDesc.classList.add("skill-page-title-group");
    const logo = document.createElement("img");
    
    if (skill.logo) {
        logo.src = skill.logo;

        logo.onerror = () => {
            logo.replaceWith(document.createTextNode(skill.name[0].toUpperCase()));
        };
    } else {
        logo.replaceWith(document.createTextNode(skill.name[0].toUpperCase()));
    }


    logo.classList.add("skill-page-logo");

    const title = document.createElement("h1");
    title.classList.add("skill-page-title");
    title.textContent = skill.name;

    const description = document.createElement("p");
    description.classList.add("skill-page-description");
    description.textContent = skill.desc;
    
    titleAndDesc.append(title, description);

    header.append(logo, titleAndDesc);

    return header;
}

function renderGeneralOverview(skill){

    let finalProjectCount = 0;
    let completedThemeCount = 0;
    let totalThemeCount = 0;
    let completedPhaseCount = 0;
    let totalPhasesCount = 0;

    skill.phases.forEach(phase => {
        //Final Project
        finalProjectCount += phase.finalProjects.filter(project => project.completed === true).length;

        //Themes
        completedThemeCount += phase.themes.filter(theme => theme.completed).length;
        totalThemeCount += phase.themes.length;

        //Phases
        const phaseCompleted = phase.themes.every(theme => theme.completed);
        if(phaseCompleted){
            completedPhaseCount++;
        }
        totalPhasesCount++;
    });

    const totalSkillProgress = Math.round((completedThemeCount / totalThemeCount) * 100);

    const generalOverview = document.createElement("section");
    generalOverview.classList.add("general-overview");
    generalOverview.classList.add("panel");

    const overviewFinalProjects = document.createElement("div");
    overviewFinalProjects.classList.add("general-overview-section");
    const finalProjectsContent = createOverviewSection("../assets/icons/icon_final_project.svg", finalProjectCount, null, 1, "Abschlussprojekte");
    overviewFinalProjects.append(finalProjectsContent);

    const overviewCompletedThemes = document.createElement("div");
    overviewCompletedThemes.classList.add("general-overview-section");
    const completedThemesContent = createOverviewSection("../assets/icons/icon_completed_themes.svg", completedThemeCount, totalThemeCount, 0, "Themen");
    overviewCompletedThemes.append(completedThemesContent);

    const overviewCompletedPhases = document.createElement("div");
    overviewCompletedPhases.classList.add("general-overview-section");
    const completedPhases = createOverviewSection("../assets/icons/icon_completed_phases.svg", completedPhaseCount, totalPhasesCount, 0, "Phasen");
    overviewCompletedPhases.append(completedPhases);

    const overviewCompletePercentage = document.createElement("div");
    overviewCompletePercentage.classList.add("general-overview-section");
    const completedPercentageContent = createOverviewSection("../assets/icons/icon_completed_percentage.svg", totalSkillProgress, null, 2, "Fortschritt");
    overviewCompletePercentage.append(completedPercentageContent);

    const hr = document.createElement("hr");

    generalOverview.append(overviewFinalProjects, overviewCompletedThemes, overviewCompletedPhases, overviewCompletePercentage);

    return generalOverview;
}

function renderPhaseOverview(skill){
    const phaseLayout = document.createElement("div");
    phaseLayout.classList.add("phase-layout");

    const phaseContent = document.createElement("section");
    phaseContent.classList.add("phase-content");
    phaseContent.classList.add("panel");

    const phaseOverview = document.createElement("section");
    phaseOverview.classList.add("phase-overview");
    phaseOverview.classList.add("panel");
    const phaseButtons = [];
    skill.phases.forEach(phase => {
        const projectPhase = createPhaseSection(skill, phase);
        phaseButtons.push(projectPhase);
        phaseOverview.append(projectPhase);

        projectPhase.addEventListener("click", () => {
        for (const phaseButton of phaseButtons) {
            phaseButton.classList.remove("active");
        }

        projectPhase.classList.add("active");
        const phaseData = renderPhaseContent(phase);
        phaseContent.replaceChildren();

        phaseContent.append(phaseData);

        const finalProjectButton = createFinalProjectButton(phase);
        phaseContent.append(finalProjectButton);
        });
    });

    phaseLayout.append(phaseOverview, phaseContent);

    if (phaseButtons.length > 0) {
        phaseButtons[0].click();
    }

    return phaseLayout;
}

function renderPhaseContent(skillPhase){
    const phaseData = document.createElement("div");
    phaseData.classList.add("phase-data");

    const phaseContentHeader = document.createElement("header");
    phaseContentHeader.classList.add("phase-content-header");

    const phaseTitle = document.createElement("h3");
    phaseTitle.classList.add("phase-title");
    phaseTitle.textContent = skillPhase.title + " - " + skillPhase.shortDesc;

    const phaseDesc = document.createElement("p");
    phaseDesc.classList.add("phase-description");
    phaseDesc.textContent = skillPhase.longDesc;

    const phaseTitleAndDesc = document.createElement("div");
    phaseTitleAndDesc.append(phaseTitle, phaseDesc);

    const phasePercentage = document.createElement("span");
    phasePercentage.classList.add("phase-percentage");
    phasePercentage.textContent = "100%" + " abgeschlossen";

    phaseContentHeader.append(phaseTitleAndDesc, phasePercentage);

    // Progressbar 
    const progress = document.createElement("div");
    progress.classList.add("phase-progress");

    const progressBar = document.createElement("progress");
    progressBar.classList.add("skill-progress-bar");
    progressBar.value = calculateProgressBarValue(skillPhase.themes);
    progressBar.max = 100;

    const progressInfo = document.createElement("span");
    progressInfo.classList.add("phase-progress-info");
    progressInfo.textContent = "10 von 10 Themen abgeschlossen";

    progress.append(progressBar, progressInfo)

    // Phase Sections 
    const phaseSections = document.createElement("div");
    phaseSections.classList.add("phase-sections");

    skillPhase.themes.forEach(theme => {
        const themeButton = createThemeButton(theme.id, theme.title, theme.completed);
        phaseSections.append(themeButton);
    })

    phaseData.append(phaseContentHeader, progress, phaseSections);
    return phaseData;
}

function renderSkillPageFooter(){
    const footer = document.createElement("footer");
   footer.classList.add("skill-page-footer");
   const footerIcon = document.createElement("img");
   footerIcon.classList.add("skill-page-footer-icon");
   footerIcon.src="../assets/icons/icon_leaf.svg";
   const motivationText = document.createElement("span");
   motivationText.classList.add("skill-page-footer-text");
   motivationText.textContent = "Dranbleiben zahlt sich aus. Jeder Schritt bringt dich weiter!";

    footer.append(footerIcon, motivationText);

   return footer;
}