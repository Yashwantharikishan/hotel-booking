const express = require("express");
const router = express.Router();
const Room = require("../Models/rooms"); // Assuming this is a Mongoose model

// Get all rooms
router.get("/getallroom", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms); // Respond with the retrieved rooms
  } catch (error) {
    console.error("Error fetching rooms:", error.message); // Log the error for debugging
    res
      .status(500)
      .json({ message: "An error occurred while fetching rooms." });
  }
});

// Get room by ID
router.post("/getroombyid", async (req, res) => {
  const { roomid } = req.body; // Extract roomid from the request body
  try {
    const room = await Room.findById(roomid); // Query database for the room
    if (room) {
      res.json(room); // Respond with the room data
    } else {
      res.status(404).json({ error: "Room not found" }); // Send an error response
    }
  } catch (error) {
    console.error("Error fetching room:", error.message);
    res.status(500).json({ error: "An error occurred while fetching room." });
  }
});

module.exports = router;
