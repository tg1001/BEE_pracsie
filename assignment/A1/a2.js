const fs= require("fs")
const { json } = require("stream/consumers");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let todo;

rl.question('Enter titial of your ToDo list: ', (title) => {
    rl.question("Enter desciption of you ToDo: ", (desc)=>{
        console.log(`Your title is: ${title}`);
        console.log(`your decp is: ${desc}`);
        //first read file save todo in list then append new task in it then write it in a file

        fs.readFile("./todo.txt","utf-8",function(err,data){

          if(err) console.log(err);
            todo=JSON.parse(data);
            let task={Title:title,Desc:desc };
         todo.push(task);  //{Title:title,Desc:desc }
          console.log(todo)
          //now will write it in a file

          fs.writeFile("./todo.txt",JSON.stringify(todo),function(err){
            if(err) console.log(err);
            console.log("done new task uploaded")
          })

        })
    rl.close();
})
});