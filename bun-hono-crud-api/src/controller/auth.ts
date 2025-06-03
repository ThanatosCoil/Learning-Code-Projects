import { Context } from "hono";
import { Database } from "bun:sqlite";
import { User } from "../types";
import { password as bunPassword } from "bun";
import { sign } from "hono/jwt";
export async function registerUser(c: Context, db: Database) {
  const { username, password, role = "user" } = await c.req.json();

  if (!username || !password) {
    return c.json({ error: "Username or password is incorrect" }, 401);
  }

  if (role !== "user" && role !== "admin") {
    return c.json({ error: "Invalid role" }, 400);
  }

  try {
    const user = (await db
      .query(`SELECT * FROM users WHERE username = ?`)
      .get(username)) as User | undefined;

    if (user) {
      return c.json({ error: "User already exists" }, 400);
    }

    const hashedPassword = await bunPassword.hash(password);

    await db.run(
      `INSERT INTO users (username, password, role) VALUES (?, ?, ?)`,
      [username, hashedPassword, role]
    );

    return c.json({ message: "User registered successfully" }, 201);
  } catch (error) {
    console.error("Error registering user", error);
    return c.json({ error: "Internal server error" }, 500);
  }
}

export async function loginUser(c: Context, db: Database) {
  const { username, password } = await c.req.json();

  if (!username || !password) {
    return c.json({ error: "Username or password is incorrect" }, 401);
  }

  try {
    const user = (await db
      .query(`SELECT * FROM users WHERE username = ?`)
      .get(username)) as User | undefined;

    if (!user) {
      return c.json({ error: "User not found" }, 401);
    }

    const isPasswordValid = await bunPassword.verify(password, user.password);

    if (!isPasswordValid) {
      return c.json({ error: "Invalid password" }, 401);
    }

    const token = await sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET || "JWT_SECRET"
    );

    return c.json({ token }, 200);
  } catch (error) {
    console.error("Error logging in user", error);
    return c.json({ error: "Internal server error" }, 500);
  }
}
