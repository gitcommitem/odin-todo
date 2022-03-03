const focusProject = (project) => {
    const focusedProjectLiEl = document.querySelector("li.focus");
    if(focusedProjectLiEl !== null){
        focusedProjectLiEl.classList.remove("focus");
    };
 
    const targetProjectLiEl = document.querySelector(`li[data-project-id="${project.id}"]`)
    targetProjectLiEl.classList.add("focus");
};

export {focusProject};