//mongodb return and saves data in BSON Binary JSON
//mongoose is odm, to connect our server with mongodb
const express = require("express")
const mongoose = require("mongoose")
const app = express();
// const Blogs = require("./model/blog")
// const Users = require("./model/user")

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//let blogRoutes = require("./routes/blogRoutes");
let blogRoutes = require("./routes/blogRoutes");
app.use("/api/blogs", blogRoutes);

let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);



app.listen(4445, () => {
    console.log("Server started")
})

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log("Connected!"));



