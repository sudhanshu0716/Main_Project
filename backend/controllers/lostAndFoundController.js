const LostAndFound = require("../models/LostAndFound");

const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

exports.reportFoundItem = async (req, res) => {
  try {
    const { trainNumber, date, itemDescription, contactDetails } = req.body;

    if (!trainNumber || !date || !itemDescription || !contactDetails) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newItem = new LostAndFound({
      trainNumber,
      date,
      itemDescription,
      contactDetails,
      founded: false, 
    });

    await newItem.save();
    res.status(201).json({ message: "Item reported successfully!" });
  } catch (error) {
    console.error("Error reporting item:", error);
    res.status(500).json({ message: "Error reporting item." });
  }
};

exports.searchLostItems = async (req, res) => {
  try {
    const { trainNumber, date } = req.body;


    if (!trainNumber | !date) {
      return res.status(400).json({ message: "Train number and date are required." });
    }

    const lostItems = await LostAndFound.find({
      trainNumber,
      date,
      founded: false,
    }).select("trainNumber date itemDescription contactDetails");

    const formattedItems = lostItems.map((item) => ({
      ...item._doc,
      date: formatDate(item.date),
    }));

    res.status(200).json({ lostItems: formattedItems });
  } catch (error) {
    console.error("Error searching lost items:", error);
    res.status(500).json({ message: "Error searching lost items." });
  }
};

exports.markAsFounded = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Item ID is required." });
    }

    const item = await LostAndFound.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found." });
    }

    item.founded = true;
    await item.save();

    res.status(200).json({ message: "Item marked as founded." });
  } catch (error) {
    console.error("Error marking item as founded:", error);
    res.status(500).json({ message: "Failed to mark item as founded." });
  }
};

exports.getFoundedItems = async (req, res) => {
  try {
    const foundedItems = await LostAndFound.find({ founded: true }).select(
      "trainNumber date itemDescription contactDetails"
    );

    const formattedItems = foundedItems.map((item) => ({
      ...item._doc,
      date: formatDate(item.date),
    }));

    res.status(200).json({ foundedItems: formattedItems });
  } catch (error) {
    console.error("Error fetching founded items:", error);
    res.status(500).json({ message: "Error fetching founded items." });
  }
};
