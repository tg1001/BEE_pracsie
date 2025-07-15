let users=[
    {
        id: 1,
        name: "John Doe",
        age: 30,
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
    },
    {
        id: 3,
        name: "Alice Johnson",
        age: 28,
    }
]


    //let user = users.find(user => user.id === id);
    // if (user) {
    //     return user.age >= 18;
    // }
    // return false;

    // if(user.age >= 18){
    //     console.log("user founf");
    // }
    // else {
    //     console.log("user not found");
    // }
function isAllowed(id){
    return new Promise((resolve,reject)=>{
        let user = users.filter((u)=>{
            return u.id == id;
        })[0]
    
    // let user = users.filter((u)=>{
    //     return u.id==id
    // })[0]
    console.log(user);
    if(!user) return reject("User not found");
    if(user.age<18) return reject("User is not allowed");
    return resolve("eligible to vote");
    })
}
// isAllowed(1);
isAllowed(1).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
console.log("start");
console.log("sum 2 number");
