const mongoose = require("mongoose");

// MongoDB URL
const MongoURL =
  "mongodb+srv://admin-yash:Test1234@cluster0.egrcbdv.mongodb.net/hotel-room";

// Mongoose connection with options
mongoose
  .connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Export the connection for reuse in other files if necessary
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

module.exports = db;
