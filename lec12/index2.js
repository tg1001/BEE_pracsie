//we want pura html using js 
//or existing DOM k andr ....want to add new element, how to add new element?

//1. jo element insert krna h usko bna lo: create a new element using createElement func
//2. insert reqd data in that element: innerText, innerHTML
//3. insert new element in the existing DOM: appendChild or append

//array pr loop and then sigle todo ka logic uk

let todos=[{
    id:1,
    title:"cookies bake",
}, {
    id:2,
    title:"milk boil",
}, {
    id:3,
    title:"bread toast",
}]; //array of objects
// let todo={
//     id:1,
//     title:"cookies bake",
// }

let todoContainer=document.querySelector(".todocontainer");
function addTodo(todo){
    let li=document.createElement("li");
    li.innerHTML=`<div>
    <input type="checkbox" name=" " id=" ">
    <h1>${todo.title} </h1>
    <div> </div> 
    <button> X </button>
    <button> X </button>
    </div>`;
    todoContainer.appendChild(li)
}

//addTodo(todo);
function showalltodos(todos){
    todos.forEach(todo=>{
        addTodo(todo)
    });
}
showalltodos(todos);