const renderTodo = (todo) => {
    const cardDivEl = document.createElement("div");
    cardDivEl.classList.add("todo-item",`${todo.priority}`);
    cardDivEl.setAttribute("data-todo-id",`${todo.id}`)

    if(todo.status === "completed"){
        cardDivEl.classList.add("completed");
    };

    if(todo.priority === "none"){
        const priorityContEl = document.querySelector(`#${todo.priority} div.grid-cont`);
        priorityContEl.appendChild(cardDivEl);
    }else{
        const priorityContEl = document.querySelector(`#${todo.priority}`);
        priorityContEl.appendChild(cardDivEl);
    }

    const colorBarDivEl = document.createElement("div");
    colorBarDivEl.classList.add("color-bar");
    cardDivEl.appendChild(colorBarDivEl);

    const infoContDivEl = document.createElement("div");
    infoContDivEl.classList.add("todo-info");
    cardDivEl.appendChild(infoContDivEl);

    const titleInputEl = document.createElement("input");
    titleInputEl.readOnly = true;
    titleInputEl.classList.add("todo-title");
    titleInputEl.value = todo.title;
    titleInputEl.setAttribute("data-todo-id",`${todo.id}`)
    infoContDivEl.appendChild(titleInputEl);

    const descTxtAreaEl = document.createElement("textarea");
    descTxtAreaEl.readOnly = true;
    descTxtAreaEl.classList.add("todo-desc");
    descTxtAreaEl.value = todo.desc;
    descTxtAreaEl.setAttribute("data-todo-id",`${todo.id}`)
    infoContDivEl.appendChild(descTxtAreaEl);

    const statusInputEl = document.createElement("input");
    statusInputEl.readOnly = true;
    statusInputEl.classList.add("status");
    statusInputEl.value = todo.status;
    statusInputEl.setAttribute("data-todo-id",`${todo.id}`)
    infoContDivEl.appendChild(statusInputEl);

    const statusSelectEl = document.createElement("select");
    statusSelectEl.classList.add("status");
    infoContDivEl.appendChild(statusSelectEl);

    const createOptionEl = (value,statusSelectEl) =>{
        const optionEl = document.createElement("option");
        optionEl.setAttribute("data-todo-id",`${todo.id}`)
        optionEl.value = value;
        optionEl.textContent = value;
        statusSelectEl.appendChild(optionEl);
    };

    createOptionEl("Not started",statusSelectEl);
    createOptionEl("In progress",statusSelectEl);
    createOptionEl("Paused",statusSelectEl);
    createOptionEl("Completed",statusSelectEl);

    const selectedOptionEl = document.querySelector(`option[data-todo-id="${todo.id}"][value="${todo.status}"]`);
    selectedOptionEl.selected = true;
    
    const dueInputEl = document.createElement("input");
    dueInputEl.readOnly = true;
    dueInputEl.classList.add("dueDate");
    dueInputEl.value = todo.dueDate;
    dueInputEl.setAttribute("data-todo-id",`${todo.id}`)
    infoContDivEl.appendChild(dueInputEl);
};

export {renderTodo};