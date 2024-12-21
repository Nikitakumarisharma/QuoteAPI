const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const quoteRoutes = require("./routes/quoteRoutes");

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/quotes", quoteRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
