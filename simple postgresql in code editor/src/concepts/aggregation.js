const db = require("../db/db");

async function countPostsByUser() {
  try {
    const res = await db.query(`
      SELECT u.username, COUNT(p.id) AS post_count
      FROM users u
      LEFT JOIN posts p ON u.id = p.user_id
      GROUP BY u.id
    `);
    console.log("Posts by user:", res.rows);
  } catch (error) {
    console.error("Error counting posts by user:", error);
    throw error;
  }
}

async function averagePostPerUser() {
  try {
    const res = await db.query(`
      SELECT AVG(post_count) AS avg_posts_per_user
      FROM (
        SELECT COUNT(p.id) AS post_count
        FROM users u
        LEFT JOIN posts p ON u.id = p.user_id
        GROUP BY u.id
      ) AS user_post_counts
    `);
    console.log("Average posts per user:", res.rows[0].avg_posts_per_user);
  } catch (error) {
    console.error("Error calculating average posts per user:", error);
    throw error;
  }
}

module.exports = { countPostsByUser, averagePostPerUser };
