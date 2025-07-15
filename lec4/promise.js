// let p = new Promise((resolve, reject) => {
//     resolve("promise pura kiya");
// })
// console.log(p);
// p.then((data)=>{console.log(data);})
// .catch((err)=>{console.log(err)})
function buyProduct(product_Name) {
  return new Promise((resolve, reject) => {
    let isProduct = product.filter((p)=> p.name==product_Name);
    if(!isProduct) {
        return reject("product not available");
    }
    resolve(isProduct.amount);
 })
}

buyProduct().then(("iphone")).then((amount)=> {
    console.log(amount);
})
.catch((err) => {
    console.log(err);
})


function decudctnakamount(amount){
    return new Promise(resolve, reject) => { }
}