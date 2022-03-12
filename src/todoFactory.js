const createTodoObj = (title,desc,dueDate,priority,status,targetProject) =>{

    if(status === ""){
        status = "Not started"
    };

    let id = 0;

    if(targetProject.todos.length !== 0){
        const lastEntryId = targetProject.todos[targetProject.todos.length-1].id;
        id = lastEntryId + 1;
    };

    return {title,desc,dueDate,priority,status,id};

};

export {createTodoObj};