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
    renderTodo(todo);
});

const addProjectButtonEl = document.querySelector("div#sidebar button");
addProjectButtonEl.addEventListener("click",()=>{
    const newProj = createProject("","","","",listOfProjects);
    listOfProjects.push(newProj);
    console.log(newProj);
    renderProjectList(newProj);
    focusProject(newProj);
    renderProject(newProj);
});

const addTodoButtonEl = document.querySelectorAll("section#todos button.add")
addTodoButtonEl.forEach(button =>{
    button.addEventListener("click",()=>{

        const highPriority = document.querySelector("section#high button.add");
        if(button === highPriority){
            const newTodo = createTodoObj("","","","high","");
            renderTodo(newTodo);
        };

        const medPriority = document.querySelector("section#med button.add");
        if(button === medPriority){
            const newTodo = createTodoObj("","","","med","");
            renderTodo(newTodo);
        };

        const lowPriority = document.querySelector("section#low button.add");
        if(button === lowPriority){
            const newTodo = createTodoObj("","","","low","");
            renderTodo(newTodo);
        };

        const noPriority = document.querySelector("section#none button.add");
        if(button === noPriority){
            const newTodo = createTodoObj("","","","none","");
            renderTodo(newTodo);
        };

    });
});