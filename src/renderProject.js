const renderProject = (project) => {

    const iconH1El = document.querySelector("h1#icon");
    iconH1El.textContent = project.icon;

    const titleInputEl = document.querySelector("input#projectTitle");
    titleInputEl.value = project.title;

    const checkboxEl = document.querySelector("input[type='checkbox']#deadline");
    const deadlineDateInputEl = document.querySelector("input[type='date']#deadline");
    const deadlineInputEL = document.querySelector("input#deadline");
    if(project.deadline === "" ){
        deadlineInputEL.value = project.deadline;
        checkboxEl.checked = false;
        deadlineDateInputEl.disabled = false;
        deadlineDateInputEl.value = project.deadline;
    }
    else if(project.deadline === "No deadline for this project" ){
        deadlineInputEL.value = project.deadline;
        checkboxEl.checked = true;
        deadlineDateInputEl.disabled = true;
        deadlineDateInputEl.value = project.deadline;
    }
    else{
        deadlineInputEL.value = `Deadline is ${project.deadline}`;
        checkboxEl.checked = false;
        deadlineDateInputEl.disabled = false;
        deadlineDateInputEl.value = project.deadline;
    }

    const descTextAreaEL = document.querySelector("textarea#proj-desc");
    descTextAreaEL.value = project.desc;

};

export {renderProject};