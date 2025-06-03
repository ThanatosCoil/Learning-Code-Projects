import express, { Express, Request, Response, NextFunction } from "express";
import { IUser, User } from "./models/User";

const app: Express = express();
const port = 3000;

app.use(express.json());

interface CustomRequest extends Request {
  startTime?: number;
}

//middleware
app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  next();
});

//post route -> new user -> name, email -> req.body
// /user/:id?name -> Request <{},{},{},{}>

interface User {
  name: string;
  email: string;
}

//post route
app.post("/user", (req: Request<{}, {}, User>, res: Response) => {
  const { name, email } = req.body;
  res.json({
    message: `User created ${name}-${email}`,
  });
});

//users based on id
app.get("/users/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  res.json({
    userId: id,
  });
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find();
  } catch (error) {
    res.status(400).json({
      message: "Error",
    });
  }
});

// req -> Request <p, ResBody, ReqBody, ReqQuery, Locals>
app.get("/", (req: Request, res: Response) => {
  res.send("Hello TS");
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
