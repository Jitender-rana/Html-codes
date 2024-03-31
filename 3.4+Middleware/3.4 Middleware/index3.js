import express from "express";

const app = express();
const port = 3000;
function logger(req, res,next){
  console.log("Request method that was used by user: ",req.method);
  console.log("url used by the user: ",req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
