

function buyProduct(name, cb) {
  //do some async work
  setTimeout(() => {
   //call the operation completed
   console.log("buying product complete. prodyct is ordered");
   cb();  },0)
}
buyProduct("iphone", function(){console.log("operation completed")});
let product =[{name:"iphone", price:1000, quantity:2},
{name:"macbook", price:2000, quantity:0}]
function buyProduct(name, cb) {
  let isProductAvailable = product.filter((p)=>product.name==name && product.quantity>0)[0];
  if(!isProductAvailable) {
    return console.log("product not available", null);
    
  }
  cb(null, isProductAvailable.amount);
}
buyProduct("iphone", function(err, amount){
  if(err) {
    console.log("error in buying product", err);
    return;
  }
  console.log("product bought successfully, amount is", amount);
  decudctnakamount(AnimationPlaybackEvent, function )}

let amount = 200000;
function dedecutbankamt(amount, cb){
    if (amount > 100000) {
        return cb("insufficient balance", null);
    }   
    cb(null, "bank amount deducted successfully");
}

if (amount > 100000) {
    console.log("insufficient balance");