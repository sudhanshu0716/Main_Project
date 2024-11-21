const MarkedPoint = require("../models/MarkedPoint");

// Save a marker
exports.saveMarkedPoint = async (req, res) => {
  const { title, latitude, longitude } = req.body;

  if (!title || !latitude || !longitude) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const newPoint = new MarkedPoint({ title, latitude, longitude });
    const savedPoint = await newPoint.save();
    res.status(201).json(savedPoint);
  } catch (error) {
    res.status(500).json({ message: "Error saving marker", error });
  }
};

// Get all markers
exports.getAllMarkedPoints = async (req, res) => {
  try {
    const markers = await MarkedPoint.find();
    res.status(200).json(markers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching markers", error });
  }
};

// Delete a marker by ID
exports.deleteMarkedPoint = async (req, res) => {
  const { id } = req.params;

  try {
    await MarkedPoint.findByIdAndDelete(id);
    res.status(200).json({ message: "Marker deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting marker", error });
  }
};
