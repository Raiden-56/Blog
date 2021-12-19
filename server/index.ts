import * as dotenv from "dotenv";
dotenv.config();

import * as cors from "cors";
import * as express from "express";
import * as mongoose from "mongoose";
import database from "./src/database";
import { Application } from "express";
import { router } from "./src/api/routes";
import MongoStore = require("connect-mongo");
import * as ExpressSession from "express-session";
import { UserInterface } from "./src/api/interfaces";

const app: Application = express();
const port: number = Number(process.env.port) | 3002;

declare module "express-session" {
  interface SessionData {
    userId: mongoose.Types.ObjectId;
  }
}

declare module "express-serve-static-core" {
  interface Request {
    user: UserInterface;
  }
}

const SessionMiddleware = ExpressSession({
  secret: process.env.secret,
  saveUninitialized: false,
  resave: false,
  store: MongoStore.create({
    mongoUrl: process.env.mongoUrl,
  }),
});

database.Initialise();

app.use(
  cors({
    origin: [
      "http://41.97.99.98:3000",
      "http://localhost:3000",
      "http://localhost",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(SessionMiddleware);
app.use("/api", router);
app.use((req: express.Request, res: express.Response) =>
  console.log(req.method, req.url)
);

app.listen(port, () => console.log("Listening on port:", port));
