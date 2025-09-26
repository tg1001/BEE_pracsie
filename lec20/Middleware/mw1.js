function m1(req,res,next){
    console.log("Middleware 1 executed");
    req.userId="4"
    next()
}
function m2(req,res,next){
    console.log("Middleware 2 executed");
    console.log(req.userId);
    req.isAdmin=true;
    next()
}

module.exports.m1=m1;
module.exports.m2=m2;

//u can run middleware in different diff level