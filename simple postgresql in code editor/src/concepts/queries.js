const db = require("../db/db");

async function createUsersTable() {
  try {
    const res = await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`);
    console.log("Users table created successfully");
  } catch (error) {
    console.error("Error creating users table:", error);
    throw error;
  }
}

async function insertUser(username, email) {
  try {
    const res = await db.query(
      `INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *`,
      [username, email]
    );
    console.log("User inserted successfully:", res.rows[0]);
  } catch (error) {
    console.error("Error inserting user:", error);
    throw error;
  }
}

async function getUsers() {
  try {
    const res = await db.query(`SELECT * FROM users`);
    console.log("Users fetched successfully:", res.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

async function updateUser(id, username, email) {
  try {
    const res = await db.query(
      `UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *`,
      [username, email, id]
    );
    if (res.rowCount > 0) {
      console.log("User updated successfully:", res.rows[0]);
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const res = await db.query(`DELETE FROM users WHERE id = $1 RETURNING *`, [
      id,
    ]);
    if (res.rowCount > 0) {
      console.log("User deleted successfully:", res.rows[0]);
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

module.exports = {
  createUsersTable,
  insertUser,
  getUsers,
  updateUser,
  deleteUser,
};
