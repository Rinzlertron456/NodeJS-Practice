import express from 'express';
import cors from 'cors';
import { createConnection } from 'mysql2';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "V1ky20#.^^^",
  database: "nodemysql",
  port: 3306,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

app.get("/", (_, res) => {
  res.send("Hello. Welcome to Home page");
});

app.get("/users",(req,res)=>{
  const getAllUsersQuery= "SELECT * FROM dummydata";
  connection.query(getAllUsersQuery, (error, results) => {
    if (error) {
      console.error("Error fetching users data:", error);
      return res.status(500).send("Error fetching users data");
    }
    console.log("Users Data:", results);
    res.json(results);
  })
})

app.post("/form", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, password, phoneNumber, address, city, state, zipCode, country } = req.body;

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS dummydata (
      id INT AUTO_INCREMENT PRIMARY KEY,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      firstName VARCHAR(45),
      lastName VARCHAR(45),
      email VARCHAR(45),
      password VARCHAR(45),
      phoneNumber VARCHAR(45),
      address VARCHAR(45),
      city VARCHAR(45),
      state VARCHAR(45),
      zipCode INT(10),
      country VARCHAR(45)
    );
  `;

  connection.query(createTableQuery, (error) => {
    if (error) {
      console.error("Error creating table:", error);
      return res.status(500).send("Error creating table");
    }

    const insertDataQuery = `
      INSERT INTO dummydata (firstName, lastName, email, password, phoneNumber, address, city, state, zipCode, country)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(insertDataQuery, [firstName, lastName, email, password, phoneNumber, address, city, state, zipCode, country], (error) => {
      if (error) {
        console.error("Error inserting data:", error);
        return res.status(500).send("Error inserting data");
      }
      console.log("Data inserted successfully");
      res.send("Data inserted successfully");
    });
  });
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  console.log("User ID:", userId);

  const getUserQuery = "SELECT * FROM dummydata WHERE id = ?";
  connection.query(getUserQuery, [userId], (error, results) => {
    if (error) {
      console.error("Error fetching user data:", error);
      return res.status(500).send("Error fetching user data");
    }

    if (results.length > 0) {
      console.log("User Data:", results[0]);
      res.json(results[0]); // ✅ FIXED LINE
    } else {
      res.status(404).send("User not found");
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
