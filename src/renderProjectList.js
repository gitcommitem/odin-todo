const renderProjectList = (project) => {
    const sidebarUlEl = document.querySelector("div#sidebar ul#projects");
    const projectLiEl = document.createElement("li");
    projectLiEl.setAttribute("data-project-id",`${project.id}`)
    project.title === "" ? projectLiEl.textContent = `${project.icon}`+ "\u00a0" +`Untitled` :
                           projectLiEl.textContent = `${project.icon}`+ "\u00a0" +`${project.title}`;
    sidebarUlEl.appendChild(projectLiEl);
}

export {renderProjectList};