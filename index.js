//RESTFul APIs using Node.js(Express.js)
import express, { json } from "express";
const app=express();
const port=3000;
app.use(json());
app.get("/",(req,res)=>{
  res.send("Hello. Welcome to Home page");
})
app.get("/form",(req,res)=>{
  console.log(req.body);
  res.send(req.body);
})

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
})

