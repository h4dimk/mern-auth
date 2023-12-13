import express from "express";
import { userList } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/users", userList);

export default router;
