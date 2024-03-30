import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send("Hello world!");
});
app.get("/about",(req,res)=>{
    res.send("<h1>This is about me</h1>");
});
app.listen(port,()=>{
    console.log('Our server is running on port ${port}');
});