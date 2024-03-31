import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended: true}));
// function bandNameGenerator(req, res, next) {
//   console.log(req.body);
//   bandName = req.body["street"] + req.body["pet"];
//   next();
// }

app.listen(3000,(req,res)=>{
  console.log(`Listening on the port ${port}.`);
});
app.get("/",(req,res)=>{// Route handlers and this is Route handler for home page so when we try to access the localhost user actually making a req for home page.
  res.sendFile(__dirname + "/public/index.html");

});
app.post("/submit",(req, res)=>{
  var fn=req.body.street;
  var ln=req.body.pet;
  var fullname=fn+ln;
  res.send(`<h1>Welcome to bandname Generator</h1><h2>THe bandname is ${fullname} 😍😍😍.`);
  
});
