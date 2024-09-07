import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import UserRouter from "./routes/User.js";
import ProductRoutes from "./routes/Products.js";

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello GFG Developers" });
});

// API routes
app.use("/api/user", UserRouter);
app.use("/api/products", ProductRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    status: err.status || 500,
    message: err.message || "Something went wrong",
  });
});

// Start server and connect to the database
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
