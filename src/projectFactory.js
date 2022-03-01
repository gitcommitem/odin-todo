const createProject = (icon,title,desc,deadline) => {
    
    if(title === ""){
        title = "Untitled Project"
    };

    let todos = [];

    return {icon,title,desc,deadline,todos};
};

export {createProject};