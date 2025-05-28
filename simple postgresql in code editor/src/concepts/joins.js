const db = require("../db/db");

async function getUsersWithPosts() {
  try {
    const res = await db.query(`
      SELECT u.id, u.username, p.title, p.content
      FROM users u
      JOIN posts p ON u.id = p.user_id
    `);
    console.log("Users with posts:", res.rows);
  } catch (error) {
    console.error("Error fetching users with posts:", error);
    throw error;
  }
}

module.exports = { getUsersWithPosts };
