const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Make sure the .env file is being loaded correctly
    if (!process.env.MONGO_URI) {
      console.error("MONGO_URI is not defined in the .env file");
      process.exit(1);
    }

    // Remove useNewUrlParser and useUnifiedTopology options since they're no longer needed
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
