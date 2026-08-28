function renderSkillButton(skill){
    const button = document.createElement("button");
    button.classList.add("btn", "skill-button");

    const upper = document.createElement("div");
    upper.classList.add("skill-button-upper");

    const logoTitle = document.createElement("div");
    logoTitle.classList.add("logo-title");
    
    let logo = document.createElement("img");
    logo.classList.add("skill-logo");

    if(skill.logo){

        logo.src = skill.logo;
        logo.alt = skill.alt;
    }
    else{
        logo = document.createElement("span");
        logo.classList.add("skill-logo");

        logo.textContent = skill.name.charAt(0).toUpperCase();
        logo.style.backgroundColor = "darkgrey";
        logo.style.fontWeight = "bold";
        logo.style.fontSize = "23px";
    }


    const title = document.createElement("span");
    title.textContent = skill.name;

    const percentage = document.createElement("span");
    percentage.classList.add("skill-percentage");
    percentage.textContent = `${calculateProgressBarValue(skill.phases)}%`;

    const progressBar = document.createElement("progress");
    progressBar.classList.add("skill-button-progress-bar");
    progressBar.value = calculateProgressBarValue(skill.phases);
    progressBar.max = 100;

    logoTitle.append(logo, title);
    upper.append(logoTitle, percentage);
    button.append(upper, progressBar);

    button.addEventListener("click", () => loadSkillPage(skill));
    
    return button;
}
