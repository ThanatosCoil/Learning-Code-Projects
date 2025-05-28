import type { Server } from "bun";

interface User {
  id: number;
  name: string;
}

interface ApiResponse {
  message: string;
  method: string;
  route: string;
  data?: User | User[];
}

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

const server: Server = Bun.serve({
  port: 3000,
  fetch(req: Request): Response {
    const url = new URL(req.url);
    const method = req.method;

    let response: ApiResponse = {
      message: "Hello Bun!",
      method: method,
      route: url.pathname,
    };

    if (url.pathname === "/") {
      if (method === "GET") {
        response.message = "Get request received";
      } else if (method === "POST") {
        response.message = "Post request received";
      }
    } else if (url.pathname === "/users") {
      switch (method) {
        case "GET":
          response.message = "Get request for users received";
          response.data = users;
          break;
        case "POST":
          response.message = "Post request for users received";
        default:
          response.message = "Method not allowed";
          break;
      }
    }
    return Response.json(response);
  },
});

console.log(`Server is running on ${server.url}`);
