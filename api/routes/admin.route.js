import express from "express";
import {
  blockUser,
  deleteUser,
  makeAdmin,
  userList,
} from "../controllers/admin.controller.js";
import { verifyToken, verifyAdmin } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/users", verifyToken, verifyAdmin, userList);
router.post("/makeadmin/:id", verifyToken, verifyAdmin, makeAdmin);
router.post("/block/:id", verifyToken, verifyAdmin, blockUser);
router.delete("/delete/:id", verifyToken, verifyAdmin, deleteUser);

export default router;
