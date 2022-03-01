const renderTodo = (todo) => {
    const cardDivEl = document.createElement("div");
    cardDivEl.classList.add("todo-item",`${todo.priority}`);

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

    const titleH1El = document.createElement("h1");
    titleH1El.classList.add("todo-title");
    titleH1El.textContent = todo.title;
    infoContDivEl.appendChild(titleH1El);

    const descPEl = document.createElement("p");
    descPEl.classList.add("todo-desc");
    descPEl.textContent = todo.desc;
    infoContDivEl.appendChild(descPEl);

    const statusPEl = document.createElement("p");
    statusPEl.classList.add("status");
    statusPEl.textContent = todo.status;
    infoContDivEl.appendChild(statusPEl);

    const duePEl = document.createElement("p");
    duePEl.classList.add("dueDate");
    duePEl.textContent = todo.dueDate;
    infoContDivEl.appendChild(duePEl);
};

export {renderTodo};