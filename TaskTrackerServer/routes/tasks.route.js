import express from "express";
import {
  getAllTasks,
  createTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
} from "../controllers/tasks.controller.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.patch("/:id", updateTaskStatus);
router.delete("/:id", deleteTask);

export default router;
