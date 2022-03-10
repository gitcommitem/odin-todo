import "./style.css";

const listOfProjects = [];

import { createProject } from "./projectFactory";
import { renderProject } from "./renderProject";
import { renderProjectList } from "./renderProjectList";
import { focusProject } from "./focusProject";

import { createTodoObj } from "./todoFactory";
import { renderTodo } from "./renderTodo";

const general = createProject("📨","General","General to-dos","",listOfProjects);
listOfProjects.push(general);
renderProjectList(general);
focusProject(general);
renderProject(general);

const test1 = createTodoObj("This is a high priority card","You can drag cards to rearrange them or change their priority","","high","",general);
general.todos.push(test1);
const test2 = createTodoObj("This is a medium priority card","You can drag cards to rearrange them or change their priority","","med","",general);
general.todos.push(test2);
const test3 = createTodoObj("This is a low priority card","You can drag cards to rearrange them or change their priority","","low","",general);
general.todos.push(test3);
const test4 = createTodoObj("This is a card with no priority","You can drag cards to rearrange them or change their priority","","none","",general);
general.todos.push(test4);

general.todos.forEach(todo => {
    renderTodo(todo);
})

import { removePrevProjTodos } from "./removePrevProjTodos";

const sidebarEl = document.querySelector("div#sidebar");
sidebarEl.addEventListener("click",(target) =>{

    const projectOptContEl = document.querySelector("section#project-info div.option-popup");
    if(projectOptContEl.classList.contains("hidden")===false){
        toggleHidden(projectOptContEl);
    }
    
    const isAddNewProjectButtonEl = target.target.matches("button") === true;
    if(isAddNewProjectButtonEl){
        const newProj = createProject("","","","",listOfProjects);
        listOfProjects.push(newProj);
        console.log(newProj);
        renderProjectList(newProj);
        focusProject(newProj);
        renderProject(newProj);
        removePrevProjTodos();
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

    console.log(target.target.tagName);
});

import { toggleReadOnly } from "./toggleReadOnly";
import { toggleHidden } from "./toggleHidden";

const mainDivEl = document.querySelector("div#main");
mainDivEl.addEventListener("click",(target)=>{
    const currentProjectId = +document.querySelector("div#sidebar li.focus").dataset.projectId;
    const currentProjectIndex = listOfProjects.findIndex(project => project.id === currentProjectId);
    const currentProject = listOfProjects[currentProjectIndex];

    const projectOptContEl = document.querySelector("section#project-info div.option-popup");
    if(projectOptContEl.classList.contains("hidden")===false){
        toggleHidden(projectOptContEl);
    }

    const isProjectOptImgEl = target.target.matches("section#project-info button img") === true;
    const isProjectOptButtonEl = target.target.matches("section#project-info button") === true;
    if(isProjectOptButtonEl || isProjectOptImgEl){
        toggleHidden(projectOptContEl);
    };

    const isProjectOptLiEl = target.target.matches("section#project-info div.option-popup li") === true;
    if(isProjectOptLiEl){

        const deleteAllTodosLiEl = document.querySelector("div.option-popup li[data-action=delete-todos]")
        if(deleteAllTodosLiEl){
            removePrevProjTodos();
            currentProject.todos.length = 0;
        }
    };

    const isAddHighPriorityImgEl = target.target.matches("section#high button.add img") === true;
    const isAddHighPriorityButtonEl = target.target.matches("section#high button.add") === true;
    if(isAddHighPriorityButtonEl || isAddHighPriorityImgEl){
        const newTodo = createTodoObj("","","","high","",currentProject);
        currentProject.todos.push(newTodo);
        renderTodo(newTodo);
        console.log(currentProject.todos);
    }

    const isAddMedPriorityImgEl = target.target.matches("section#med button.add img") === true;
    const isAddMedPriorityButtonEl = target.target.matches("section#med button.add") === true;
    if(isAddMedPriorityButtonEl || isAddMedPriorityImgEl){
        const newTodo = createTodoObj("","","","med","",currentProject);
        currentProject.todos.push(newTodo);
        renderTodo(newTodo);
    }

    const isAddLowPriorityImgEl = target.target.matches("section#low button.add img") === true;
    const isAddLowPriorityButtonEl = target.target.matches("section#low button.add") === true;
    if(isAddLowPriorityButtonEl || isAddLowPriorityImgEl){
        const newTodo = createTodoObj("","","","low","",currentProject);
        currentProject.todos.push(newTodo);
        renderTodo(newTodo);
    }

    const isAddNoPriorityImgEl = target.target.matches("section#none button.add img") === true;
    const isAddNoPriorityButtonEl = target.target.matches("section#none button.add") === true;
    if(isAddNoPriorityButtonEl || isAddNoPriorityImgEl){
        const newTodo = createTodoObj("","","","none","",currentProject);
        currentProject.todos.push(newTodo);
        renderTodo(newTodo);
    }

    console.log(target.target.tagName);
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

    console.log(target.target);

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
        updateProjectList(currentProject);
    }

    const isDescTxtAreaEl = target.target.matches("section#project-info textarea#proj-desc") === true;
    if(isDescTxtAreaEl){
        currentProject.desc = getUpdatedValue(target.target);
    }

    //Updating values for edited todo cards
    const currentTodoId = +target.target.dataset.todoId;
    const currentTodoIndex = currentProject.todos.findIndex(todo => todo.id === currentTodoId);
    const currentTodo = currentProject.todos[currentTodoIndex];

    const isTodoTitleInputEl = target.target.matches("div.todo-info input.todo-title") === true;
    if(isTodoTitleInputEl){
        currentTodo.title = getUpdatedValue(target.target);
        console.log(currentTodoId);
        console.log(currentTodo);

    };

    const isTodoTxtAreaEl = target.target.matches("div.todo-info textarea") === true;
    if(isTodoTxtAreaEl){
        currentTodo.desc = getUpdatedValue(target.target);
    };

    console.log(target);
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

    console.log(target.target);

});