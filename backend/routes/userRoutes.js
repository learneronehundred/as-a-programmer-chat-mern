import express from "express";
import { protectRouteMiddleware } from "../middleware/protectRouteMiddleware.js";
import { getSidebarUsersController } from "../controllers/userController.js";

const router = express.Router();

router.get("/", protectRouteMiddleware, getSidebarUsersController);

export default router;
