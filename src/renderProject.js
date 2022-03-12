const renderProject = (project) => {

    const iconH1El = document.querySelector("h1#icon");
    iconH1El.textContent = project.icon;

    const titleInputEl = document.querySelector("input#projectTitle");
    titleInputEl.value = project.title;

    const deadlineH2EL = document.querySelector("input#deadline");
    deadlineH2EL.value = project.deadline;

    const descTextAreaEL = document.querySelector("textarea#proj-desc");
    descTextAreaEL.value = project.desc;

};

export {renderProject};