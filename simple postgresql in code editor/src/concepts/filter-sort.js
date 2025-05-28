const db = require("../db/db");

async function getUserByCondition(condition) {
  try {
    const res = await db.query(`SELECT * FROM users WHERE ${condition}`);
    console.log("User fetched successfully:", res.rows);
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

async function getSortedUsers(field, order) {
  try {
    const res = await db.query(
      `SELECT * FROM users ORDER BY ${field} ${order}`
    );
    console.log("Users fetched successfully:", res.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

module.exports = { getUserByCondition, getSortedUsers };
