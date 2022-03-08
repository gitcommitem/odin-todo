const updateProjectList = (project) =>{
    const projectLiEl = document.querySelector(`li[data-project-id="${project.id}"]`);
    projectLiEl.textContent = `${project.icon}${project.title}`;
};

export {updateProjectList};