import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

// Routes import
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Database import
import { connectMongoDB } from "./db/connectMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

// const app = express(); // Transfered to 'backend/socket/socket.js'.
const PORT = process.env.PORT || 8000;
//console.log("PORT ", process.env.PORT);

const __dirname = path.resolve();

// Test local server
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// Middleware
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server running on port ${PORT}`);
});
