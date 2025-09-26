console.log(axios)
async function getComment(URL){
    //how to send get req using axios
    // axios.get(URL).then((data)=>{
    //     console.log(data)
    // })
    // .catch(err=>console.log(err))

   try{
    //let comments=await axios.get(URL)
    let response=await axios.get(URL)
    console.log(response.data);
    //console.log(comments);
   }
   catch(error){
    console.log(error)
   }
}
getComment("https://jsonplaceholder.typicode.com/comments")




//function to add new blog
addBlog("http://localhost:3300/blog","first blog","first blog desc")
async function addBlog(URL, tittle, desc){
    try{
        let newBlog={
        tittle:tittle,
        desc:desc
    }
    let response=await axios.post(URL, newBlog)
   // console.log(response)
   console.log(response.data);
    }
    catch(error){console.log(error)}

}