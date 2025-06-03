const db = require("../db/db");

async function createPostsTable() {
  try {
    const res = await db.query(`CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
    console.log("Posts table created successfully");
  } catch (error) {
    console.error("Error creating posts table:", error);
    throw error;
  }
}

async function insertPost(title, content, userId) {
  try {
    const res = await db.query(
      `INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *`,
      [title, content, userId]
    );
    console.log("Post created successfully:", res.rows[0]);
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

module.exports = { createPostsTable, insertPost };
