const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("./routes/posts");
const rootRouter = require("./routes/index");

require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// routes
app.use("/", rootRouter);
app.use("/posts", postsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
