const MarkedPoint = require("../models/MarkedPoint");

exports.saveMarkedPoints = async (req, res) => {
  try {
    const { points } = req.body;

    if (!points || !Array.isArray(points)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    await MarkedPoint.insertMany(points.map(({ lat, lng, title }) => ({
      latitude: lat,
      longitude: lng,
      title,
    })));

    res.status(200).json({ message: "Points saved successfully" });
  } catch (error) {
    console.error("Error saving points:", error);
    res.status(500).json({ message: "Failed to save points." });
  }
};
