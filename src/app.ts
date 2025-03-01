import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
