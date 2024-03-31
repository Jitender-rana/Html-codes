import express from "express";
import bodyparser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyparser.urlencoded({extended: true}));//tells what we are using behind the scenes to parse the data that is coming in.
//there is no body without this above line of code.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



app.post("/submit",(req,res)=>{
  console.log(req.body);

});
