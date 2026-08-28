function createFinalProjectButton(phase){
    const finalProjectButton = document.createElement("button");
    finalProjectButton.classList.add("final-project-button-inactive");
    finalProjectButton.disabled = true;
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

    const allThemesCompleted = phase.finalProjects.every(project => project.completed === true);

    if(allThemesCompleted){
        finalProjectButtonLockIcon.style.display = "none";

        finalProjectButtonTitle.textContent = "Abschlussprojekt freigeschaltet";
        finalProjectButtonSubTitle.textContent = "Zum Abschlussprojekt";
        finalProjectButton.classList.add("btn");

        finalProjectButton.classList.remove("final-project-button-inactive");
        finalProjectButton.classList.add("final-project-button-active");

        finalProjectButton.disabled = false;  
    }

    return finalProjectButton;
}

function createThemeButton(index, title, completed){
    const button = document.createElement("button");
    button.classList.add("theme-button");
    button.classList.add("btn");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("theme-check-icon-container");
    if(completed === true){
        iconContainer.style.backgroundColor = "var(--color-secondary)"; 
    }

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

function createPhaseSection(skill, phase){
    const phaseSection = document.createElement("button");
    phaseSection.classList.add("phase-section-button");
    phaseSection.disabled = true;

    const titleAndLock = document.createElement("div");
    titleAndLock.classList.add("phase-title-and-lock");

    const lockIcon = document.createElement("img");
    lockIcon.src = "../assets/icons/icon_lock.svg";
    lockIcon.classList = "phase-section-lock-icon";

    if(checkPhaseCompletion(skill, phase)){
        lockIcon.style.display = "none";
        phaseSection.disabled = false;
    }

    const phaseTitle = document.createElement("h2");
    phaseTitle.classList.add("phase-section-title");
    const phaseDesc = document.createElement("span");
    phaseDesc.classList.add("phase-section-description");

    phaseTitle.textContent = phase.title;
    phaseDesc.textContent = phase.shortDesc;

    titleAndLock.append(phaseTitle, lockIcon);
    phaseSection.append(titleAndLock, phaseDesc);

    return phaseSection;
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