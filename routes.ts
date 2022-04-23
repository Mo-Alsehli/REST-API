import { Express, Request, Response } from "express";

// Checking The Status Of The Server As 200 Means OK.
export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
}
