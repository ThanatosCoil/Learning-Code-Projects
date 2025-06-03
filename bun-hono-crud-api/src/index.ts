import { Hono } from "hono";
import { initDb } from "./database/db";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { loginUser, registerUser } from "./controller/auth";
import { jwt } from "hono/jwt";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "./controller/task";

const app = new Hono();

const db = initDb();

app.use("*", cors());
app.use("*", logger());

const auth = jwt({
  secret: process.env.JWT_SECRET || "JWT_SECRET",
});

const registerSchema = z.object({
  username: z.string().min(3).max(25),
  password: z.string().min(5).max(25),
  role: z.enum(["user", "admin"]).optional().default("user"),
});

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const createTaskSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().optional(),
  user_id: z.number().int().positive(),
});

app.post("/register", zValidator("json", registerSchema), (c) =>
  registerUser(c, db)
);

app.post("/login", zValidator("json", loginSchema), (c) => loginUser(c, db));

app.post("/create-task", auth, zValidator("json", createTaskSchema), (c) =>
  createTask(c, db)
);

app.get("/tasks", auth, (c) => getAllTasks(c, db));

app.get("/tasks/:id", auth, (c) => getTaskById(c, db));

app.put("/tasks/:id", auth, zValidator("json", createTaskSchema), (c) =>
  updateTask(c, db)
);

app.delete("/tasks/:id", auth, (c) => deleteTask(c, db));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/db-test", (c) => {
  const result = db.query(`SELECT sqlite_version()`).get();
  return c.json({
    message: "Database connected successfully",
    version: result,
  });
});

export default app;
