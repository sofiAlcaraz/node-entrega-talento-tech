import express from "express";
import { createUserController } from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/create", createUserController);

export default router;
