const renderProjectList = (project) => {
    const sidebarUlEl = document.querySelector("div#sidebar ul#projects");
    const projectLiEl = document.createElement("li");
    projectLiEl.setAttribute("data-project-id",`${project.id}`)
    projectLiEl.textContent = `${project.icon}${project.title}`;
    sidebarUlEl.appendChild(projectLiEl);
}

export {renderProjectList};