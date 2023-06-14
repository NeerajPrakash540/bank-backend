// define application specific middleware

const appMiddleware = (req,res,next)=>{
    console.log("Bank App - Application Specific Middleware");
    next()
}

module.exports={
    appMiddleware
}