//sign up feature
let signupForm=document.querySelector("#signup-form");
let signupName=document.querySelector("#signup-name");
let signupEmail=document.querySelector("#signup-email"); 
let signupPassword=document.querySelector("#signup-password");

signupForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let namevalue=signupName.value;
    let emailvalue=signupEmail.value;
    let passwordvalue=signupPassword.value;
    let response=await fetch("/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:emailvalue,
            username:namevalue,
            password:passwordvalue
        })
    }).then(res=>res.json()).then(data=>{
        console.log(data);
        alert(data.message)
    } )
    let data =await response.json();
    console.log(data);
    if(data.success){
        alert("Signup Successful" + data.data.username);
        signupForm.reset();
    }
    else{
        alert("Signup Failed");
    }

})


//login feature
let loginForm=document.querySelector("#login-form");
let loginEmail=document.querySelector("#login-email");  
let loginPassword=document.querySelector("#login-password");
loginForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let emailvalue=loginEmail.value;
    let passwordvalue=loginPassword.value;
    let response=await fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:emailvalue,
            password:passwordvalue
        })
    }).then(res=>res.json()).then(data=>{
        console.log(data);
        alert(data.message)
    } )
    let data =await response.json();
    console.log(data);
    if(data.success){
        let token=data.data.token;
        localStorage.setItem("token",token);
        // loginForm.reset();
        alert("Login Successful" + data.data.username);
    }
    else{
        alert("Login Failed");
    }

})