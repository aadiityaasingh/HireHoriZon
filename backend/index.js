import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./utlis/db.js";
import companyRoute from "./routes/company.route.js";
import userRoute from "./routes/user.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

// Test route
app.get("/home", (req, res) => {
  return res.status(200).json({
    message: "I am coming from backend",
    success: true,
  });
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// ✅ PORT and Mongo URL setup
const PORT = process.env.PORT || 8080; // <- Port number
const MONGO_URL = process.env.ATLASDB_URL; // <- MongoDB connection string

// ✅ Connect to DB first, then start the server
connectDB(MONGO_URL);

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
