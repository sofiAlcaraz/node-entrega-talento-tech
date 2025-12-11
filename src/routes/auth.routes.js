import express from "express";
import { loginController } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/", loginController);

export default router;
