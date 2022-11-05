import { login, logout} from "./Auth.js";
import { insert, getItems, update } from "./Firestore.js";
import { getUUID } from "./Utils.js";
const buttonLogin = document.querySelector("#button-login");
const buttonLogout = document.querySelector("#button-logout");
const todoForm = document.querySelector("#todo=form");
const userInfo = document.querySelector("#user-info");
const todoInput = document.querySelector("#todo-input");
const todosContainer = document.querySelector("#todos-container");

let currentUser;
let todos = [];
firebase.auth().onAuthStateChanged( user => {
    if (user){
        currentUser = user;
        console.log("Usuario logueado", currentUser.displayName);
        init();
    } else {
        console.log("No hay usuario logueado");
        hideUI();
    }
});

buttonLogin.addEventListener("click", async (e) => {
    try{
        currentUser = await login();
    }catch (error) {}
});

buttonLogout.addEventListener("click", (e) => {
    logout();
    hideUI();
});
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = todoInput.value;

    if(text!== ''){
        addTodo(text);
        todoInput.value = "";
        loadTodos();
    }
});

async function  addTodo(text){
    try{
        const todo = {
            id: getUUID(),
            text: text,
            completed: false,
            useid: currentUser.uid,
        };
        const response = await insert(todo);
    } catch (error) {
        console.error(error);
    }
}

function init(){
    buttonLogin.classList.add('hidden');
    buttonLogout.classList.remove('hidden');
    todoForm.classList.remove('hidden');

    userInfo.innerHTML = `
    <img src="${currentUser.photoURL}" width="32"/>
    <span>${currentUser.displayName}</span>
    `;

    loadTodos();
}

async function loadTodos(){
    todosContainer.innerHTML = "";
    todos = [];
    try{
        const response = await getItems(currentUser.uid);
        todos = [...response];
        rendersTodos();
    } catch (error) {

    }
}
function rendersTodos() {
    let html = "";
    todos.forEach((todo) => {
        html += `
        <li>
        <input type="checkbox" id="${todo.id}" ${todo.completed ? "checked" : ""} />
        <span>${todo.text}</span>
        </li>
        `;
    });
   todosContainer.innerHTML = html; 

   document.querySelectorAll("#todos-container input[type=checkbox]").forEach((checkbox) =>{
    checkbox.addEventListener("change", (e) =>{
        const id = checkbox.id;
        const todo = todos.find((todo) => todo.id === id);
        todo.completed = checkbox.checkved;
        try{
            update(id, todo);
        } catch (error) {
            console.error(error);
        }
    });
   });
}

function hideUI (){
    buttonLogin.classList.remove("hidden");
    buttonLogout.classList.add("hidden");
    todoForm.classList.add("hidden");
    todosContainer.innerHTML = "";
}