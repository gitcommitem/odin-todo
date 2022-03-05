import "./style.css";

const listOfProjects = [];

import { createProject } from "./projectFactory";
import { renderProject } from "./renderProject";
import { renderProjectList } from "./renderProjectList";
import { focusProject } from "./focusProject";

const general = createProject("📨","General","General to-dos","",listOfProjects);
listOfProjects.push(general);
renderProjectList(general);
focusProject(general);
renderProject(general);

console.log(listOfProjects.length);
console.log(listOfProjects[0].id);

import { createTodoObj } from "./todoFactory";
import { renderTodo } from "./renderTodo";

const test1 = createTodoObj("This is a high priority card","You can drag cards to rearrange order or change their priority","03/01/2022","high","paused");
const test2 = createTodoObj("This is a medium priority card","You can drag cards to rearrange order or change their priority","03/01/2022","med","paused");
const test3 = createTodoObj("This is a low priority card","You can drag cards to rearrange order or change their priority","03/01/2022","low","paused");
const test4 = createTodoObj("This is a card with no priority set","You can drag cards to rearrange order or change their priority","03/01/2022","none","paused");
const test5 = createTodoObj("","","","none","");
const test6 = createTodoObj("This is a completed card","You can drag cards to rearrange order or change their priority","03/01/2022","high","completed");

const preloadedTodos = [test1,test2,test3,test4,test5,test6,test4,test4,test5];

preloadedTodos.forEach((todo)=>{
    general.todos.push(todo);
    console.log(general.todos);
});

general.todos.forEach(todo => {
    renderTodo(todo);
})

import { removePrevProjTodos } from "./removePrevProjTodos";

const sidebarEl = document.querySelector("div#sidebar");
sidebarEl.addEventListener("click",(target) =>{
    
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

const mainDivEl = document.querySelector("div#main");
mainDivEl.addEventListener("click",(target)=>{
    const currentProjectId = +document.querySelector("div#sidebar li.focus").dataset.projectId;
    const currentProjectIndex = listOfProjects.findIndex(project => project.id === currentProjectId);
    const currentProject = listOfProjects[currentProjectIndex];

    const isAddHighPriorityImgEl = target.target.matches("section#high button.add img") === true;
    const isAddHighPriorityButtonEl = target.target.matches("section#high button.add") === true;
    if(isAddHighPriorityButtonEl || isAddHighPriorityImgEl){
        const newTodo = createTodoObj("","","","high","");
        currentProject.todos.push(newTodo);
        renderTodo(newTodo);
    }

    const isAddMedPriorityImgEl = target.target.matches("section#med button.add img") === true;
    const isAddMedPriorityButtonEl = target.target.matches("section#med button.add") === true;
    if(isAddMedPriorityButtonEl || isAddMedPriorityImgEl){
        const newTodo = createTodoObj("","","","med","");
        currentProject.todos.push(newTodo);
        renderTodo(newTodo);
    }

    const isAddLowPriorityImgEl = target.target.matches("section#low button.add img") === true;
    const isAddLowPriorityButtonEl = target.target.matches("section#low button.add") === true;
    if(isAddLowPriorityButtonEl || isAddLowPriorityImgEl){
        const newTodo = createTodoObj("","","","low","");
        currentProject.todos.push(newTodo);
        renderTodo(newTodo);
    }

    const isAddNoPriorityImgEl = target.target.matches("section#none button.add img") === true;
    const isAddNoPriorityButtonEl = target.target.matches("section#none button.add") === true;
    if(isAddNoPriorityButtonEl || isAddNoPriorityImgEl){
        const newTodo = createTodoObj("","","","none","");
        currentProject.todos.push(newTodo);
        renderTodo(newTodo);
    }

    console.log(target.target.tagName);
});

mainDivEl.addEventListener("focusin",(target)=>{
    const isTitleInputEl = target.target.matches("section#project-info div.hflex input#projectTitle") === true;
    const isReadOnly = target.target.readOnly === true;
    if(isTitleInputEl && isReadOnly){
        const titleInputEl = document.querySelector("input#projectTitle");
        toggleReadOnly(titleInputEl);
    }

    const isDescTxtAreaEl = target.target.matches("section#project-info textarea#proj-desc") === true;
    if(isDescTxtAreaEl && isReadOnly){
        const descTxtAreaEl = document.querySelector("textarea#proj-desc");
        toggleReadOnly(descTxtAreaEl);
    }

});

mainDivEl.addEventListener("focusout",(target)=>{

    const isTitleInputEl = target.target.matches("section#project-info div.hflex input#projectTitle") === true;
    if(isTitleInputEl){
        const titleInputEl = document.querySelector("input#projectTitle");
        toggleReadOnly(titleInputEl);
    }

    const isDescTxtAreaEl = target.target.matches("section#project-info textarea#proj-desc") === true;
    if(isDescTxtAreaEl){
        const descTxtAreaEl = document.querySelector("textarea#proj-desc");
        toggleReadOnly(descTxtAreaEl);
    }

    console.log(target);
});
