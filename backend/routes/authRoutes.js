import express from "express";
import {
  loginController,
  logoutController,
  signupController,
} from "../controllers/authController.js";

const router = express.Router();

// Test response from 'app.use("api/auth", authRoutes)' at 'server.js'.
// router.get("/login", (req, res) => {
//   res.send("Login Route");
// });

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);

export default router;
