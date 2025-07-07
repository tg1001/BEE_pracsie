const file1 = require('./file1.js');
console.log(file1); // Output: 5
function sum(a,b){return a+b;}
function sub(a,b){return a-b;}
//method 2 
module.exports = {sum, sub};
