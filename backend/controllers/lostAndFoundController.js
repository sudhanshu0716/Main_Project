const LostAndFound = require('../models/LostAndFound');

exports.reportFoundItem = async (req, res) => {
  try {
    const { trainNumber, date, itemDescription, contactDetails } = req.body;

    const newItem = new LostAndFound({
      trainNumber,
      date,
      itemDescription,
      contactDetails,
      founded: false, // Newly reported items are unfounded
    });

    await newItem.save();
    res.status(201).json({ message: 'Item reported successfully!' });
  } catch (error) {
    console.error('Error reporting item:', error);
    res.status(500).json({ message: 'Error reporting item.' });
  }
};

exports.searchLostItems = async (req, res) => {
  try {
    const { trainNumber, date } = req.body;

    const lostItems = await LostAndFound.find({
      trainNumber,
      date,
      founded: false, // Fetch only unfounded items
    });

    res.status(200).json({ lostItems });
  } catch (error) {
    console.error('Error searching lost items:', error);
    res.status(500).json({ message: 'Error searching lost items.' });
  }
};

exports.markAsFounded = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await LostAndFound.findById(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    item.founded = true;
    await item.save();

    res.status(200).json({ message: 'Item marked as founded.' });
  } catch (error) {
    console.error('Error marking item as founded:', error);
    res.status(500).json({ message: 'Failed to mark item as founded.' });
  }
};

exports.getFoundedItems = async (req, res) => {
  try {
    const foundedItems = await LostAndFound.find({ founded: true });

    res.status(200).json({ foundedItems });
  } catch (error) {
    console.error('Error fetching founded items:', error);
    res.status(500).json({ message: 'Error fetching founded items.' });
  }
};
