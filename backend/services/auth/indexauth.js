import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, Auth!" });
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Auth Server is running on port ${PORT}`);
  connectDB();
});