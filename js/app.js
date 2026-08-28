function init(){
    loadSkillList();
    setDefaults();
    calculateTotalCompletedThemes();
}

function loadSkillList(){
    const skillList = document.getElementById("skill-list");

    skills.forEach((skill) => {
        const button = renderSkillButton(skill);
        skillList.append(button);
    });
}

function setDefaults(){
    const firstEntry = skills[0];
    loadSkillPage(firstEntry);
}



init();

