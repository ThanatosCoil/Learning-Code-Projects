import { Context } from "hono";
import { Database } from "bun:sqlite";
import { Task } from "../types";

export async function createTask(c: Context, db: Database) {
  const userId = c.get("jwtPayload").userId;
  const userRole = c.get("jwtPayload").role;
  const { title, description, user_id } = await c.req.json();

  if (!userId) {
    return c.json(
      { error: "Unauthenticated! Please login to create a task." },
      401
    );
  }

  if (userRole !== "admin") {
    return c.json(
      { error: "Unauthorized. Only admins can create tasks." },
      401
    );
  }

  if (userId !== user_id) {
    return c.json(
      { error: "Invalid user ID. You can only create tasks for yourself." },
      401
    );
  }

  try {
    const result = db
      .query(
        `INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?) RETURNING *`
      )
      .get(title, description, user_id) as Task;

    return c.json(result, 201);
  } catch (error) {
    console.error("Error creating task", error);
    return c.json({ error: "Internal server error" }, 500);
  }
}

export async function getAllTasks(c: Context, db: Database) {
  try {
    const result = db.query(`SELECT * FROM tasks`).all() as Task[];

    return c.json(result, 200);
  } catch (error) {
    console.error("Error getting all tasks", error);
    return c.json({ error: "Internal server error" }, 500);
  }
}

export async function getTaskById(c: Context, db: Database) {
  const taskId = c.req.param("id");
  try {
    const result = db.query(`SELECT * FROM tasks WHERE id = ?`).get(taskId) as
      | Task
      | undefined;

    if (!result) {
      return c.json({ error: "Task not found" }, 404);
    }

    return c.json(result, 200);
  } catch (error) {
    console.error("Error getting task by ID", error);
    return c.json({ error: "Internal server error" }, 500);
  }
}

export async function updateTask(c: Context, db: Database) {
  const userId = c.get("jwtPayload").userId;
  const userRole = c.get("jwtPayload").role;
  const taskId = c.req.param("id");
  const { title, description, user_id } = await c.req.json();

  if (!userId) {
    return c.json(
      { error: "Unauthenticated! Please login to update a task." },
      401
    );
  }

  if (userRole !== "admin") {
    return c.json(
      { error: "Unauthorized. Only admins can update tasks." },
      401
    );
  }

  if (userId !== user_id) {
    return c.json(
      { error: "Invalid user ID. You can only update tasks for yourself." },
      401
    );
  }

  try {
    const task = (await db
      .query(`SELECT * FROM tasks WHERE id = ?`)
      .get(taskId)) as Task | undefined;

    if (!task) {
      return c.json({ error: "Task not found" }, 404);
    }

    const result = (await db
      .query(
        `UPDATE tasks SET title = ?, description = ?, user_id = ? WHERE id = ? RETURNING *`
      )
      .get(
        title || task.title,
        description !== undefined ? description : task.description,
        user_id || task.user_id,
        taskId
      )) as Task;

    return c.json(result, 200);
  } catch (error) {
    console.error("Error updating task", error);
    return c.json({ error: "Internal server error" }, 500);
  }
}

export async function deleteTask(c: Context, db: Database) {
  const userId = c.get("jwtPayload").userId;
  const userRole = c.get("jwtPayload").role;
  const taskId = c.req.param("id");
  const { user_id } = await c.req.json();

  if (!userId) {
    return c.json(
      { error: "Unauthenticated! Please login to delete a task." },
      401
    );
  }

  if (userRole !== "admin") {
    return c.json(
      { error: "Unauthorized. Only admins can delete tasks." },
      401
    );
  }

  if (userId !== user_id) {
    return c.json(
      { error: "Invalid user ID. You can only delete tasks for yourself." },
      401
    );
  }

  try {
    const result = await db.query(`DELETE FROM tasks WHERE id = ?`).run(taskId);

    if (result.changes === 0) {
      return c.json({ error: "Task not found" }, 404);
    }

    return c.json({ message: "Task deleted successfully" }, 200);
  } catch (error) {
    console.error("Error deleting task", error);
    return c.json({ error: "Internal server error" }, 500);
  }
}
