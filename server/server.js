import express, { response } from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
  });
  
  app.get("/", (req, res) => response.json("Hello there (◕ᴥ◕ʋ)"));
  
  app.get("/userInfo", async (req, res) => {
    const result = await db.query("SELECT * FROM userInfo");
  });
//using databases from supabase, allow program to access for movie API(maybe) and book API(maybe) and use a DB to hold user info

//DB connection information

//get requests for fetching current data

//post requests for adding information to watched/read DB

//setting reminders using general date and time stamps

//delete reminders

//update requests
app.listen(8080, () => {
    console.log("Ther server is running and lsitening on port 8080");
  });
  