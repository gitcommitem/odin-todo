import "./style.css";
let store = require('store');

let listOfProjects = [];

import { createProject } from "./projectFactory";
import { renderProject } from "./renderProject";
import { renderProjectList } from "./renderProjectList";
import { focusProject } from "./focusProject";

import { createTodoObj } from "./todoFactory";
import { renderTodo } from "./renderTodo";

if(store.get("projects") === undefined){
    store.set("projects",listOfProjects);

    const general = createProject("📨","General","General to-dos","",listOfProjects);
    listOfProjects.push(general);
    renderProjectList(general);
    focusProject(general);
    renderProject(general);

    const test1 = createTodoObj("This is a high priority todo","","","high","",general);
    general.todos.push(test1);
    const test2 = createTodoObj("This is a medium priority todo","","","med","",general);
    general.todos.push(test2);
    const test3 = createTodoObj("This is a low priority todo","","","low","",general);
    general.todos.push(test3);
    const test4 = createTodoObj("This is a todo with no priority","","","none","",general);
    general.todos.push(test4);

    store.set("projects",listOfProjects);

    general.todos.forEach(todo => {
        renderTodo(todo);
    })
}
else{
    listOfProjects = store.get("projects");

    if(listOfProjects.length === 0){
        const emptyStateDivEl = document.querySelector("div.empty-state");
        emptyStateDivEl.classList.remove("hidden");
    }
    else{
        listOfProjects.forEach(project=>{
            renderProjectList(project);
        })
        focusProject(listOfProjects[0]);
        renderProject(listOfProjects[0]);
        listOfProjects[0].todos.forEach(todo => {
            renderTodo(todo);
        })
    }

};




import { removePrevProjTodos } from "./removePrevProjTodos";

const sidebarEl = document.querySelector("div#sidebar");
sidebarEl.addEventListener("click",(target) =>{

    const projectOptContEl = document.querySelector("section#project-info div.option-popup");
    if(projectOptContEl.classList.contains("hidden")===false){
        toggleHidden(projectOptContEl);
    }

    const deadlineContEl = document.querySelector("div.deadline-cont");
    if(deadlineContEl.classList.contains("hidden")===false){
        toggleHidden(deadlineContEl);
        const deadlineInputEl = document.querySelector("input#deadline");
        toggleHidden(deadlineInputEl);
    }
    
    const isAddNewProjectButtonEl = target.target.matches("button") === true;
    if(isAddNewProjectButtonEl){
        const newProj = createProject("","","","",listOfProjects);
        listOfProjects.push(newProj);
        store.set("projects",listOfProjects);
        renderProjectList(newProj);
        focusProject(newProj);
        renderProject(newProj);
        removePrevProjTodos();

        const emptyStateDivEl = document.querySelector("div.empty-state");
        if(emptyStateDivEl.classList.contains("hidden") === false){
            emptyStateDivEl.classList.add("hidden");
        }
    };

    const isProjectLiEl = target.target.matches("li[data-project-id]") === true;
    if(isProjectLiEl){
        const targetProjectId = +target.target.dataset.projectId;
        const targetProject = listOfProjects.filter(project => project.id === targetProjectId)

        focusProject(targetProject[0]);
        renderProject(targetProject[0]);
        removePrevProjTodos();
        targetProject[0].todos.forEach(todo=>{
            renderTodo(todo);
        });

    };

});

import { toggleReadOnly } from "./toggleReadOnly";
import { toggleHidden } from "./toggleHidden";

const mainDivEl = document.querySelector("div#main");
mainDivEl.addEventListener("click",(target)=>{

    const isAddNewProjectButtonEl = target.target.matches("div.empty-state button") === true;
    if(isAddNewProjectButtonEl){
        const newProj = createProject("","","","",listOfProjects);
        listOfProjects.push(newProj);
        store.set("projects",listOfProjects);
        renderProjectList(newProj);
        focusProject(newProj);
        renderProject(newProj);
        removePrevProjTodos();
        
        const emptyStateDivEl = document.querySelector("div.empty-state");
        emptyStateDivEl.classList.add("hidden");
    };

    const currentProjectId = +document.querySelector("div#sidebar li.focus").dataset.projectId;
    const currentProjectIndex = listOfProjects.findIndex(project => project.id === currentProjectId);
    const currentProject = listOfProjects[currentProjectIndex];

    const projectOptContEl = document.querySelector("section#project-info div.option-popup");
    if(projectOptContEl.classList.contains("hidden")===false){
        toggleHidden(projectOptContEl);
    }

    const deadlineContEl = document.querySelector("div.deadline-cont");
    if(deadlineContEl.classList.contains("hidden")===false){
        toggleHidden(deadlineContEl);
        const deadlineInputEl = document.querySelector("input#deadline");
        toggleHidden(deadlineInputEl);
    }

    const isProjectOptImgEl = target.target.matches("section#project-info button img") === true;
    const isProjectOptButtonEl = target.target.matches("section#project-info button") === true;
    if(isProjectOptButtonEl || isProjectOptImgEl){
        toggleHidden(projectOptContEl);
    };

    const isDeleteAllTodosLiEl = target.target.matches("section#project-info div.option-popup li#delete-todos") === true;
    if(isDeleteAllTodosLiEl){
            removePrevProjTodos();
            currentProject.todos.length = 0;
            store.set("projects",listOfProjects);
    };

    const isDeleteProjectLiEl = target.target.matches("section#project-info div.option-popup li#delete-project") === true;
    if(isDeleteProjectLiEl){
        listOfProjects.splice(currentProjectIndex,1);
        store.set("projects",listOfProjects);

        const targetProjectLiEl = document.querySelector(`li[data-project-id="${currentProjectId}"]`)
        targetProjectLiEl.remove();

        if(listOfProjects.length === 0){
            const emptyStateDivEl = document.querySelector("div.empty-state");
            emptyStateDivEl.classList.remove("hidden");
        }
        else{
            focusProject(listOfProjects[0]);
            renderProject(listOfProjects[0]);
            listOfProjects[0].todos.forEach(todo=>{
                renderTodo(todo);
            });
        }
  
    };

    const isAddHighPriorityImgEl = target.target.matches("section#high button.add img") === true;
    const isAddHighPriorityButtonEl = target.target.matches("section#high button.add") === true;
    if(isAddHighPriorityButtonEl || isAddHighPriorityImgEl){
        const newTodo = createTodoObj("","","","high","",currentProject);
        currentProject.todos.push(newTodo);
        store.set("projects",listOfProjects);
        renderTodo(newTodo);
    }

    const isAddMedPriorityImgEl = target.target.matches("section#med button.add img") === true;
    const isAddMedPriorityButtonEl = target.target.matches("section#med button.add") === true;
    if(isAddMedPriorityButtonEl || isAddMedPriorityImgEl){
        const newTodo = createTodoObj("","","","med","",currentProject);
        currentProject.todos.push(newTodo);
        store.set("projects",listOfProjects);
        renderTodo(newTodo);
    }

    const isAddLowPriorityImgEl = target.target.matches("section#low button.add img") === true;
    const isAddLowPriorityButtonEl = target.target.matches("section#low button.add") === true;
    if(isAddLowPriorityButtonEl || isAddLowPriorityImgEl){
        const newTodo = createTodoObj("","","","low","",currentProject);
        currentProject.todos.push(newTodo);
        store.set("projects",listOfProjects);
        renderTodo(newTodo);
    }

    const isAddNoPriorityImgEl = target.target.matches("section#none button.add img") === true;
    const isAddNoPriorityButtonEl = target.target.matches("section#none button.add") === true;
    if(isAddNoPriorityButtonEl || isAddNoPriorityImgEl){
        const newTodo = createTodoObj("","","","none","",currentProject);
        currentProject.todos.push(newTodo);
        store.set("projects",listOfProjects);
        renderTodo(newTodo);
    }

    const isDeleteImgEl = target.target.matches("div.todo-item button.delete img") === true;
    const isDeleteButtonEl = target.target.matches("div.todo-item button.delete") === true;
    if(isDeleteButtonEl || isDeleteImgEl){
        const currentTodoId = +target.target.dataset.todoId;
        const currentTodoIndex = currentProject.todos.findIndex(todo => todo.id === currentTodoId);

        currentProject.todos.splice(currentTodoIndex,1);
        store.set("projects",listOfProjects);

        const targetTodoEl = document.querySelector(`div.todo-item[data-todo-id="${currentTodoId}"]`);
        targetTodoEl.remove();

    }


});

//Remove readonly from inputs when focused
mainDivEl.addEventListener("focusin",(target)=>{
    const isReadOnly = target.target.readOnly === true;

    const isInputEl = target.target.matches("div#main input") === true;
    if(isInputEl && isReadOnly){
        toggleReadOnly(target.target);
    }

    const isTxtAreaEl = target.target.matches("div#main textarea") === true;
    if(isTxtAreaEl && isReadOnly){
        toggleReadOnly(target.target);
    }

    const isDeadlineInputEl = target.target.matches("input#deadline") === true;
    if(isDeadlineInputEl && isReadOnly){
        const deadlineInputEl = document.querySelector("input#deadline");
        deadlineInputEl.classList.add("hidden");
        const deadLineContEl = document.querySelector("div.deadline-cont");
        deadLineContEl.classList.remove("hidden");
    };

    const currentTodoId = +target.target.dataset.todoId;

    const isStatusInputEl = target.target.matches("input.status") === true;
    if(isStatusInputEl && isReadOnly){
        const statusInputEl = document.querySelector(`input.status[data-todo-id="${currentTodoId}"]`);
        statusInputEl.classList.add("hidden");
        const statusSelectEl = document.querySelector(`select.status[data-todo-id="${currentTodoId}"]`);
        statusSelectEl.classList.remove("hidden");
        statusSelectEl.size=4;
    }

    const isDueInputEl = target.target.matches("input.dueDate") === true;
    if(isDueInputEl && isReadOnly){
        const dueInputEl = document.querySelector(`input.dueDate[data-todo-id="${currentTodoId}"]`);
        dueInputEl.classList.add("hidden");
        const dueDateInputEl = document.querySelector(`input.dueDate[data-todo-id="${currentTodoId}"][type="date"]`);
        dueDateInputEl.classList.remove("hidden");
        const checkboxEl = document.querySelector(`input.dueDate[data-todo-id="${currentTodoId}"][type="checkbox"]`);
        checkboxEl.classList.remove("hidden");
        const labelEl = document.querySelector(`label.dueDate[data-todo-id="${currentTodoId}"]`);
        labelEl.classList.remove("hidden");
    }


});

import { getUpdatedValue } from "./getUpdatedValue"; 
import { updateProjectList } from "./updateProjectList";

//Update values if changes are made to inputs
mainDivEl.addEventListener("change",(target)=>{

    //Updating values for edited project info
    const currentProjectId = +document.querySelector("div#sidebar li.focus").dataset.projectId;
    const currentProjectIndex = listOfProjects.findIndex(project => project.id === currentProjectId);
    const currentProject = listOfProjects[currentProjectIndex];

    const isTitleInputEl = target.target.matches("section#project-info div.hflex input#projectTitle") === true;
    if(isTitleInputEl){
        currentProject.title = getUpdatedValue(target.target);
        store.set("projects",listOfProjects);
        updateProjectList(currentProject);
    }

    const isDeadlineDateInputEl = target.target.matches("input[type='date']#deadline") === true;
    if(isDeadlineDateInputEl){
        currentProject.deadline = getUpdatedValue(target.target);
        store.set("projects",listOfProjects);

        const deadLineContEl = document.querySelector("div.deadline-cont");
        deadLineContEl.classList.add("hidden");

        const deadlineInputEl = document.querySelector("input#deadline");
        deadlineInputEl.value = `Deadline is ${currentProject.deadline}`;
        deadlineInputEl.classList.remove("hidden");
    };

    const isDeadlineCheckBoxEl = target.target.matches("input[type='checkbox']#deadline") === true;
    if(isDeadlineCheckBoxEl){
        const checkboxEl = document.querySelector("input[type='checkbox']#deadline");
        const dateInputEl = document.querySelector("input[type='date']#deadline");

        if(checkboxEl.checked){
            dateInputEl.disabled = true;
            currentProject.deadline = "No deadline for this project";
            store.set("projects",listOfProjects);

            const deadLineContEl = document.querySelector("div.deadline-cont");
            deadLineContEl.classList.add("hidden");
    
            const deadlineInputEl = document.querySelector("input#deadline");
            deadlineInputEl.value = currentProject.deadline;
            deadlineInputEl.classList.remove("hidden");
    
        }else{
            dateInputEl.disabled = false;
        }

    }


    const isDescTxtAreaEl = target.target.matches("section#project-info textarea#proj-desc") === true;
    if(isDescTxtAreaEl){
        currentProject.desc = getUpdatedValue(target.target);
        store.set("projects",listOfProjects);
    }

    //Updating values for edited todo cards
    const currentTodoId = +target.target.dataset.todoId;
    const currentTodoIndex = currentProject.todos.findIndex(todo => todo.id === currentTodoId);
    const currentTodo = currentProject.todos[currentTodoIndex];

    const isTodoTitleInputEl = target.target.matches("div.todo-info input.todo-title") === true;
    if(isTodoTitleInputEl){
        currentTodo.title = getUpdatedValue(target.target);
        store.set("projects",listOfProjects);
    };

    const isTodoTxtAreaEl = target.target.matches("div.todo-info textarea") === true;
    if(isTodoTxtAreaEl){
        currentTodo.desc = getUpdatedValue(target.target);
        store.set("projects",listOfProjects);
    };

    const isStatusSelectEl = target.target.matches("select.status") === true;
    if(isStatusSelectEl){
        currentTodo.status = getUpdatedValue(target.target);
        store.set("projects",listOfProjects);

        const statusSelectEl = document.querySelector(`select.status[data-todo-id="${currentTodoId}"]`);
        statusSelectEl.classList.add("hidden");

        const statusInputEl = document.querySelector(`input.status[data-todo-id="${currentTodoId}"]`);
        statusInputEl.value = currentTodo.status;
        statusInputEl.classList.remove("hidden");
 
    };

    const isDueInputEl = target.target.matches("input.dueDate[type='date']") === true;
    if(isDueInputEl){

        const dueDateInputEl = document.querySelector(`input.dueDate[data-todo-id="${currentTodoId}"][type="date"]`);
        currentTodo.dueDate = getUpdatedValue(target.target);
        store.set("projects",listOfProjects);
        dueDateInputEl.classList.add("hidden");

        const dueInputEl = document.querySelector(`input.dueDate[data-todo-id="${currentTodoId}"]`);
        dueInputEl.value = `Due on ${currentTodo.dueDate}`;
        dueInputEl.classList.remove("hidden");

        const checkboxEl = document.querySelector(`input.dueDate[data-todo-id="${currentTodoId}"][type="checkbox"]`);
        checkboxEl.classList.add("hidden");
        const labelEl = document.querySelector(`label.dueDate[data-todo-id="${currentTodoId}"]`);
        labelEl.classList.add("hidden");
    }

    const isDueCheckBoxEl = target.target.matches("input.dueDate[type='checkbox']") === true;
    if(isDueCheckBoxEl){
        const checkboxEl = document.querySelector(`input.dueDate[data-todo-id="${currentTodoId}"][type="checkbox"]`);
        const dueDateInputEl = document.querySelector(`input.dueDate[data-todo-id="${currentTodoId}"][type="date"]`);

        if(checkboxEl.checked){
            dueDateInputEl.disabled = true;
            currentTodo.dueDate = "No due date";
            store.set("projects",listOfProjects);

            const dueInputEl = document.querySelector(`input.dueDate[data-todo-id="${currentTodoId}"]`);
            dueInputEl.value = currentTodo.dueDate;
            dueInputEl.classList.remove("hidden");
    
            dueDateInputEl.classList.add("hidden");
            checkboxEl.classList.add("hidden");
    
            const labelEl = document.querySelector(`label.dueDate[data-todo-id="${currentTodoId}"]`);
            labelEl.classList.add("hidden");
    
        }else{
            dueDateInputEl.disabled = false;
        }

    }

});

//Make inputs readonly again when focus is lost
mainDivEl.addEventListener("focusout",(target)=>{
    const isReadOnly = target.target.readOnly === true;

    const isInputEl = target.target.matches("div#main input") === true;
    if(isInputEl && !isReadOnly){
        toggleReadOnly(target.target);
    }

    const isTxtAreaEl = target.target.matches("div#main textarea") === true;
    if(isTxtAreaEl && !isReadOnly){
        toggleReadOnly(target.target);
    }


});