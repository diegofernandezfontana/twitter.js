const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
})

app.use("/spacial", middleware1 , function(req,res,next){
    console.log("ENTRE ACA");
    next();
})

app.listen(3000,function(){
    console.log("Estoy escuchando");
})
