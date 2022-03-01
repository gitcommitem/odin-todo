import "./style.css";

import { createProject } from "./projectFactory";
import { renderProject } from "./renderProject";

const general = createProject("📨","General","General to-dos",null);
renderProject(general);

import { createTodoObj } from "./todoFactory";
import { renderTodo } from "./renderTodo";

const test1 = createTodoObj("This is a high priority card","You can drag cards to rearrange order or change their priority","03/01/2022","high","paused");
const test2 = createTodoObj("This is a medium priority card","You can drag cards to rearrange order or change their priority","03/01/2022","med","paused");
const test3 = createTodoObj("This is a low priority card","You can drag cards to rearrange order or change their priority","03/01/2022","low","paused");
const test4 = createTodoObj("This is a card with no priority set","You can drag cards to rearrange order or change their priority","03/01/2022","none","paused");
const test5 = createTodoObj("","",null,"none","Not Started");
const test6 = createTodoObj("This is a completed card","You can drag cards to rearrange order or change their priority","03/01/2022","high","completed");

const preloadedTodos = [test1,test2,test3,test4,test5,test6];

preloadedTodos.forEach((todo)=>{
    renderTodo(todo);
});