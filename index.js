//RESTFul APIs using Node.js(Express.js)
const express=require("express")
const cors=require("cors");
const { createConnection } =require('mysql2')
const app=express();
const port=3000;
app.use(express.json());
app.use(cors());

const connection = createConnection({
  host:"localhost",
})

app.get("/",(req,res)=>{
  res.send("Hello. Welcome to Home page");
})
app.post("/form",(req,res)=>{
  console.log(req.body);
  res.send(req.body);
})

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
})

