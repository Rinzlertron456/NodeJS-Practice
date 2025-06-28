//RESTFul APIs using Node.js(Express.js)
const express=require("express");
const app=express();
const port=3000;
app.use(express.json());
app.get("/",(req,res)=>{
  res.send("Hello. Welcome to Home page");
})

