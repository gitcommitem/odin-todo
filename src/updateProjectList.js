const updateProjectList = (project) =>{
    const projectLiEl = document.querySelector(`li[data-project-id="${project.id}"]`);
    project.title === "" ? projectLiEl.textContent = `${project.icon}`+ "\u00a0" +`Untitled` :
    projectLiEl.textContent = `${project.icon}`+ "\u00a0" +`${project.title}`;
};

export {updateProjectList};