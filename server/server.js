express = require("express");

server = express();

sqlite3 = require("sqlite3").verbose();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});

// GET Route
server.get("/users", (req, res) => {
  // Skapa en uppkoppling till databasen
  const db = new sqlite3.Database("./gik339-Labb2.db");
  // SQL fråga
  const sql = "SELECT * FROM users";
  db.all(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
  db.close();
});