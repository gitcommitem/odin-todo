const removeProjectEls = (project) =>{
    const targetProjectLiEl = document.querySelector(`li[data-project-id="${project.id}"]`)
    targetProjectLiEl.remove();
};