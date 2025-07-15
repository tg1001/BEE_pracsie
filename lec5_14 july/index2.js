


buyProduct("iphone16")
.then((data)=>{
    console.log(data)
    return deductbankamount(data)
})
.then((data))=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})