import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import proxy from "express-http-proxy";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, Gateway!" });
});

app.use(
  "/auth",
  proxy(process.env.AUTH_SERVICE_URL)
);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});