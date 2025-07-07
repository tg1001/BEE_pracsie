const file2 = require('./circular dependency/file2.js');
console.log(file2); // Output: 5
function sum(a,b){return a+b;}
function sub(a,b){return a-b;}
//method 2 
module.exports = {sum, sub};