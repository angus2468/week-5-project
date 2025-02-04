import express from "express";
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

app.get("/", (req, res) => res.json("Hello there (◕ᴥ◕ʋ)"));

//using databases from supabase, allow program to access for movie API(maybe) and book API(maybe) and use a DB to hold user info

//DB connection information

//get requests for fetching current data

//post requests for adding information sign up

// app.post("/userInfo", async (req, res) => {
//   const userNameClient = req.body.userName;
//   const passwordClient = req.body.password;
//   const firstNameClient = req.body.firstName;
//   const lastNameClient = req.body.lastName;

//   console.log(req.body);

//   const data = await db.query(
//     `INSERT INTO (userName, password, firstName, lastName) VALUES ('${userNameClient}', '${passwordClient}', '${firstNameClient}', '${lastNameClient}')`
//   );
//   res.json(data);
// });

//setting reminders using general date and time stamps

//get requests
app.get("/checklist", async (req, res) => {
  const result = await db.query("SELECT * FROM checklist");
  res.json(result);
});

app.get("/userInfo", async (req, res) => {
  const result = await db.query("SELECT * FROM userInfo");
  res.json(result);
});

app.get("/moviewatchlist", async (req, res) => {
  const result = await db.query("SELECT * FROM moviewatchlist");
  res.json(result);
});

app.get("/reminders", async (req, res) => {
  const result = await db.query("SELECT * FROM reminders");
  res.json(result);
});

app.get("/booklist", async (req, res) => {
  const result = await db.query("SELECT * FROM bookslist");
  res.json(result);
});

//post requests
app.post("/checklist", async (req, res) => {
  const checklistClient = req.body.task;
  const completedClient = req.body.completed;

  console.log(req.body);

  const data = await db.query(
    `INSERT INTO checklist (task, completed) VALUES ('${checklistClient}', '${completedClient}')`
  );
  res.json(data);
});

app.post("/userInfo", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;

  console.log(req.body);

  const data = await db.query(
    `INSERT INTO userInfo (username, password, firstname, lastname) VALUES ('${username}', '${password}', '${firstname}', '${lastname}')`
  );
  res.json(data);
});

app.post("/moviewatchlist", async (req, res) => {
  const moviename = req.body.moviename;
  const moviegenre = req.body.moviegenre;
  const movielanguage = req.body.movielanguage;

  console.log(req.body);

  const data = await db.query(
    `INSERT INTO moviewatchlist (moviename, moviegenre, movielanguage) VALUES ('${moviename}', '${moviegenre}', '${movielanguage}')`
  );
  res.json(data);
});

app.post("/reminders", async (req, res) => {
  const reminder = req.body.reminder;
  const reminderdate = req.body.reminderdate;

  console.log(req.body);

  const data = await db.query(
    `INSERT INTO reminders (reminder, reminderdate) VALUES ('${reminder}', '${reminderdate}')`
  );
  res.json(data);
});

app.post("/booklist", async (req, res) => {
  const name = req.body.name;
  const genre = req.body.genre;
  const author = req.body.author;

  console.log(req.body);

  const data = await db.query(
    `INSERT INTO bookslist (name, genre, author) VALUES ('${name}', '${genre}', '${author}')`
  );
  res.json(data);
});

//delete requests
app.delete("/checklist/:id", async (req, res) => {
  console.log(req.params.id);
  const deleted = await db.query(`DELETE FROM checklist WHERE id = $1`, [
    req.params.id,
  ]);
  res.send(req.params.id);
});

app.delete("/userInfo/:id", async (request, response) => {
  const deleted = await db.query(`DELETE FROM userInfo WHERE id = $1`, [
    request.params.id,
  ]);
  response.json(deleted);
});

app.delete("/moviewatchlist/:id", async (request, response) => {
  const deleted = await db.query(`DELETE FROM moviewatchlist WHERE id = $1`, [
    request.params.id,
  ]);
  response.json(deleted);
});

app.delete("/reminders/:id", async (request, response) => {
  const deleted = await db.query(`DELETE FROM reminders id = $1`, [
    request.params.id,
  ]);
  response.json(deleted);
});

app.delete("/booklist/:id", async (request, response) => {
  const deleted = await db.query(`DELETE FROM bookslist WHERE id = $1`, [
    request.params.id,
  ]);
  response.json(deleted);
});

//update requests
app.listen(8080, () => {
  console.log("Ther server is running and lsitening on port 8080");
});
