export type User = {
  id: number;
  username: string;
  password: string;
  role: "user" | "admin";
  created_at: string;
};

export type Task = {
  id: number;
  title: string;
  description: string;
  user_id: number;
  created_at: string;
};
