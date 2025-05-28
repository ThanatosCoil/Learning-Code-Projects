import { Database } from "bun:sqlite";

async function sqlite() {
  const db = new Database("test.db");
  db.exec(
    `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL, 
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  );
  const insert = db.prepare(`INSERT INTO users (name, email) VALUES (?, ?)`);
  //insert.run("Eve", "eve@gmail.com");

  const result = db.query("SELECT * FROM users").all();
  console.log(result);

  db.run("UPDATE users SET email = ? WHERE name = ?", ["Eva@gmail.com", "Eve"]);

  const result2 = db.query("SELECT * FROM users").all();
  console.log(result2);

  const singleResult = db
    .query("SELECT * FROM users WHERE name = ?")
    .get("Adam");
  console.log(singleResult);

  db.run("DELETE FROM users WHERE name = ?", ["Adam"]);

  const result3 = db.query("SELECT * FROM users").all();
  console.log(result3);
}

sqlite();
