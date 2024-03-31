import express from "express";
const port=3000;
const app=express();
const today = new Date();
const day = today.getDay();

app.listen(port,()=>{
    console.log(`Server is Listening on the ${port}.`);
});
app.get("/",(req,res)=>{
    let type="weekday";
    let message="work hard🏋️‍♀️🏋️‍♀️";
    if(day===0 || day===6){
        type="weekend";
        message="have Fun😎😎";
    }
    res.render("index.ejs",{daytype: type,advice: message,});
});
