//RESTFul APIs using Node.js(Express.js)
const express=require("express")
const cors=require("cors");
const { createPool } =require('mysql2')
const app=express();
const port=3000;
app.use(express.json());
app.use(cors());

const connection = createPool({
  host:"localhost",
  user:"root",
  password:"V1ky20#.^^^",
  database:"nodemysql",
  port:3306,
})

app.get("/",(req,res)=>{
  res.send("Hello. Welcome to Home page");
})
app.post("/form",(req,res)=>{
  console.log(req.body);
  connection.query("INSERT INTO dummydata (email, password) VALUES (?, ?)", [req.body.email, req.body.password], (error, results) => {
    if (error) {
      console.error("Error inserting data:", error);
      return res.status(500).send("Error inserting data");
    }
    console.log("Data inserted successfully:", results);
  });
  res.send(req.body);
})

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
})

