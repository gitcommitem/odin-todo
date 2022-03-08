const updateProjectList = (project) =>{
    const projectLiEl = document.querySelector(`li[data-project-id="${project.id}"]`);
    projectLiEl.textContent = `${project.icon}`+"\u00a0"+`${project.title}`;
};

export {updateProjectList};