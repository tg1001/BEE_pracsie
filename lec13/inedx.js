const express= require('express');
const fs= require('fs');

const app = express();  
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
app.get("/users", (req, res) => 
    {
    fs.readFile('user.json', 'utf8', (err, data) => {
        if (err) {res.send(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    })