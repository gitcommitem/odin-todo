const createTodoObj = (title,desc,dueDate,priority,status) =>{

    if(title === ""){
        title = "untitled"
    };

    return {title,desc,dueDate,priority,status};

};

export {createTodoObj};