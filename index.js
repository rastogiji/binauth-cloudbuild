const express = require("express");

app=express();

app.get("/", (req,res)=>{
    res.send("<h1>Hello World</h1>");
})
app.listen(8080,(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Server Running on Port 8080");
    }
})