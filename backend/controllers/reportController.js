const Report = require('../models/reportModel');

// Submit a new report
exports.submitReport = async (req, res) => {
  try {
    const { trainNo, date, scale } = req.body;
    const newReport = new Report({ trainNo, date, scale });
    await newReport.save();
    res.status(200).send({ message: 'Report submitted successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error submitting the report.' });
  }
};

// Get all reports for a specific train and date
exports.getReports = async (req, res) => {
  const { trainNo, date } = req.query;
  try {
    const reports = await Report.find({ trainNo, date });
    if (reports.length > 0) {
      const averageScale = reports.reduce((acc, report) => acc + report.scale, 0) / reports.length;
      res.status(200).json({ reports, averageScale });
    } else {
      res.status(404).send({ message: 'No reports found for this train on the given date.' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error fetching reports.' });
  }
};
