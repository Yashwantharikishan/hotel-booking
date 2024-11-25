const express = require("express");
const cors = require("cors"); // Import CORS
const app = express();
const dbconfig = require("./Config/db");
const roomsRoutes = require("./routes/roomsRoutes");
const userRoute = require("./routes/usersRoute");

app.use(cors()); // Enable CORS to allow requests from other origins
app.use(express.json()); // Middleware to parse JSON data

// Use the routes
app.use("/api/rooms", roomsRoutes);
app.use("/api/users", userRoute); // Register the user routes

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port} ⚡`);
});
