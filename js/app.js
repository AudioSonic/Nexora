function init(){
    loadSkillList();
    setDefaults();
}

function setDefaults(){
    const firstEntry = skills[0];
    loadSkillPage(firstEntry);
}

/* ----- Skill Buttons ----- */

function loadSkillList(){
    const skillList = document.getElementById("skill-list");

    skills.forEach((skill) => {
        const button = renderSkillButton(skill);
        skillList.append(button);
    });
}

function renderSkillButton(skill){
    const button = document.createElement("button");
    button.classList.add("btn", "skill-button");

    const upper = document.createElement("div");
    upper.classList.add("skill-button-upper");

    const logoTitle = document.createElement("div");
    logoTitle.classList.add("logo-title");

    const logo = document.createElement("img");
    logo.classList.add("skill-logo");
    logo.src = skill.logo;
    logo.alt = skill.alt;

    const title = document.createElement("span");
    title.textContent = skill.name;

    const percentage = document.createElement("span");
    percentage.classList.add("skill-percentage");
    percentage.textContent = "100%";

    const progressBar = document.createElement("progress");
    progressBar.classList.add("skill-button-progress-bar");
    progressBar.value = 62;
    progressBar.max = 100;

    logoTitle.append(logo, title);
    upper.append(logoTitle, percentage);
    button.append(upper, progressBar);

    button.addEventListener("click", () => loadSkillPage(skill));
    
    return button;
}


/* ----- Skill Page ----- */

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

   const footer = document.createElement("footer");
   footer.classList.add("skill-page-footer");
   const footerIcon = document.createElement("img");
   footerIcon.classList.add("skill-page-footer-icon");
   footerIcon.src="../assets/icons/icon_leaf.svg";
   const motivationText = document.createElement("span");
   motivationText.classList.add("skill-page-footer-text");
   motivationText.textContent = "Dranbleiben zahlt sich aus. Jeder Schritt bringt dich weiter!";

    footer.append(footerIcon, motivationText);

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
    const generalOverview = document.createElement("section");
    generalOverview.classList.add("general-overview");
    generalOverview.classList.add("panel");

    const overviewFinalProjects = document.createElement("div");
    overviewFinalProjects.classList.add("general-overview-section");
    const finalProjectsContent = createOverviewSection("../assets/icons/icon_final_project.svg", 1, null, 1, "Abschlussprojekte");
    overviewFinalProjects.append(finalProjectsContent);

    const overviewCompletedThemes = document.createElement("div");
    overviewCompletedThemes.classList.add("general-overview-section");
    const completedThemesContent = createOverviewSection("../assets/icons/icon_completed_themes.svg", 10, 10, 0, "Themen");
    overviewCompletedThemes.append(completedThemesContent);

    const overviewCompletedPhases = document.createElement("div");
    overviewCompletedPhases.classList.add("general-overview-section");
    const completedPhases = createOverviewSection("../assets/icons/icon_completed_phases.svg", 4, 4, 0, "Phasen");
    overviewCompletedPhases.append(completedPhases);

    const overviewCompletePercentage = document.createElement("div");
    overviewCompletePercentage.classList.add("general-overview-section");
    const completedPercentageContent = createOverviewSection("../assets/icons/icon_completed_percentage.svg", 100, null, 2, "Fortschritt");
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
        const projectPhase = createPhaseSection(phase.title, phase.shortDesc);
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

        const finalProjectButton = renderFinalProjectButton(phase);
        phaseContent.append(finalProjectButton);
        });
    });

    phaseLayout.append(phaseOverview, phaseContent);

    if (phaseButtons.length > 0) {
        phaseButtons[0].click();
    }

    return phaseLayout;
}

function renderFinalProjectButton(phase){
 const finalProjectButton = document.createElement("button");
    finalProjectButton.classList.add("final-project-button");
    const finalProjectButtonLockIcon = document.createElement("img");
    finalProjectButtonLockIcon.classList.add("final-project-icon");
    finalProjectButtonLockIcon.src = "../assets/icons/icon_lock.svg";

    const finalProjectButtonTitle = document.createElement("span");
    finalProjectButtonTitle.classList.add("final-project-title");
    finalProjectButtonTitle.textContent = "Abschlussprojekt freischalten";

    const finalProjectButtonSubTitle = document.createElement("span");
    finalProjectButtonSubTitle.classList.add("final-project-subtitle");
    finalProjectButtonSubTitle.textContent = "Schließe alle Themen ab, um das Abschlussprojekt zu starten.";

    finalProjectButton.append(finalProjectButtonLockIcon, finalProjectButtonTitle, finalProjectButtonSubTitle);

    return finalProjectButton;
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
    progressBar.value = 62;
    progressBar.max = 100;

    const progressInfo = document.createElement("span");
    progressInfo.classList.add("phase-progress-info");
    progressInfo.textContent = "10 von 10 Themen abgeschlossen";

    progress.append(progressBar, progressInfo)

    // Phase Sections 
    const phaseSections = document.createElement("div");
    phaseSections.classList.add("phase-sections");

    skillPhase.themes.forEach(theme => {
        const themeButton = createThemeButton(theme.id, theme.title);
        phaseSections.append(themeButton);
    })

    phaseData.append(phaseContentHeader, progress, phaseSections);
    return phaseData;
}

function createThemeButton(index, title){
    const button = document.createElement("button");
    button.classList.add("theme-button");
    button.classList.add("btn");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("theme-check-icon-container");
    const icon = document.createElement("img");
    icon.src="../assets/icons/icon_check.svg";
    iconContainer.append(icon);

    const themeTitle = document.createElement("span");
    themeTitle.classList.add("theme-title");
    themeTitle.textContent = index + ". " + title;

    const arrow = document.createElement("img");
    arrow.src="../assets/icons/icon_arrow_right.svg";

    const iconAndTitle = document.createElement("div");
    iconAndTitle.classList.add("theme-icon-and-title");
    iconAndTitle.append(iconContainer, themeTitle);

    button.append(iconAndTitle, arrow);

    return button;
}

function createPhaseSection(title, desc){
    const phase = document.createElement("button");
    phase.classList.add("phase-section-button");
    const phaseTitle = document.createElement("h2");
    phaseTitle.classList.add("phase-section-title");
    const phaseDesc = document.createElement("span");
    phaseDesc.classList.add("phase-section-description");

    phaseTitle.textContent = title;
    phaseDesc.textContent = desc;

    phase.append(phaseTitle,phaseDesc);

    return phase;
}

function createOverviewSection(iconPath, curAmount, maxAmount = null, amountStyle, desc){
    const section = document.createElement("div");
    section.classList.add("overview-content");
    const icon = document.createElement("img");
    icon.classList.add("overview-icon");
    const amount = document.createElement("span");
    amount.classList.add("overview-amount");
    const description = document.createElement("span");
    description.classList.add("overview-description");

    icon.src = iconPath;
    description.textContent = desc;

    if(amountStyle === 0 && curAmount && maxAmount){
        amount.textContent = `${curAmount} / ${maxAmount}`;
    }
    else if(amountStyle === 1 && curAmount){
        amount.textContent = curAmount;
    }
    else if (amountStyle === 2 && curAmount){
        amount.textContent = `${curAmount}%`
    }
    else {
        amount.textContent = "0";
    }

    section.append(icon, amount, description);

    return section;
}

init();

