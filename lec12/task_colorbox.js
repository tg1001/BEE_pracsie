let box=document.querySelector('.box');
let btn=document.querySelector('.btn');
let sbtn=document.querySelector('.sbtn');
let colors=['red','blue','green','yellow','purple','orange'];

let intervalId=null

function changeColor() {
    let index=Math.floor(Math.random()*10);
    let color=colors[index];
    return color;
}
btn.addEventListener("click", function(){
    // let color=changeColor();
    // box.style.backgroundColor=color;
    intervalId=setInterval(()=>{
        let color=changeColor();
        box.style.backgroundColor=color;
    }, 50)
})
sbtn.addEventListener("click", function(){
   if(intervalId) {
       clearInterval(intervalId)
       
   }
})
// setTimeout(changeColor, 1000);