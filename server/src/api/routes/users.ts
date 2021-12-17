import * as express from "express";
import { Request, Response } from "express";

export const router = express.Router();

router.get("/:userId", (req: Request, res: Response) => {
    res.send("Test");
});
