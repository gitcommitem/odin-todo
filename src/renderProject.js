const renderProject = (project) => {

    const iconH1El = document.querySelector("h1#icon");
    iconH1El.textContent = project.icon;

    const titleH1El = document.querySelector("h1#project-title");
    titleH1El.textContent = project.title;

    const deadlineH2EL = document.querySelector("h2#deadline");
    deadlineH2EL.textContent = project.deadline;

    const descPEL = document.querySelector("p#proj-desc");
    descPEL.textContent = project.desc;

};

export {renderProject};