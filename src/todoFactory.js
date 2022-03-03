const createTodoObj = (title,desc,dueDate,priority,status) =>{

    if(title === ""){
        title = "Untitled"
    };

    if(desc === ""){
        desc = "Click to add comment/note"
    };

    if(dueDate === ""){
        dueDate = "Click to add due date"
    };

    if(status === ""){
        status = "Not started"
    };

    return {title,desc,dueDate,priority,status};

};

export {createTodoObj};