const removePrevProjTodos = () => {
    const allTodosItemsEl = document.querySelectorAll("div.todo-item");

    allTodosItemsEl.forEach((todoEl)=>{
        todoEl.remove();
    });
}

export {removePrevProjTodos};