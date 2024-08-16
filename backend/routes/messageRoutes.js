import express from "express";
import {
  getMessagesController,
  sendMessageController,
} from "../controllers/messageController.js";
import { protectRouteMiddleware } from "../middleware/protectRouteMiddleware.js";

const router = express.Router();

router.get("/:id", protectRouteMiddleware, getMessagesController);
router.post("/send/:id", protectRouteMiddleware, sendMessageController);

export default router;
