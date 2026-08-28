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
    progressBar.value = calculateProgressBarValue(skill.phases);
    progressBar.max = 100;

    logoTitle.append(logo, title);
    upper.append(logoTitle, percentage);
    button.append(upper, progressBar);

    button.addEventListener("click", () => loadSkillPage(skill));
    
    return button;
}
