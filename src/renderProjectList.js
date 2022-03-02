const renderProjectList = (project) => {
    const sidebarUlEl = document.querySelector("div#sidebar ul#projects");
    const projectLiEl = document.createElement("li");
    projectLiEl.textContent = `${project.icon}${project.title}`;
    sidebarUlEl.appendChild(projectLiEl);
}

export {renderProjectList};