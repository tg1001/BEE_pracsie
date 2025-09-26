//
function getUsersData(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res)
       return res.json()

    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{console.log(err)})
}

getUsersData("https://jsonplaceholder.typicode.com/users");


let list=document.querySelector("user container");
function addtolist(_data){
    let li=document.createElement("li";
        li.innerHTML=`<div class="user-info">
                <h1>${Name}</h1>
                    <p>${username}</p>

            </div>
            <div class="user-btn">
                <button class="user-delete">❌</button>
                <button class="user-edit">🖋️</button>
            </div>`;
        list.appendChild(li);
        )
}