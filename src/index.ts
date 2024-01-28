import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(add(5, 5));
  return res.json({
    message: "Hello",
  });
});

app.listen(3001, () => {
  console.log("Server is Running");
});
