import React, { useState } from "react";
import { motion } from "framer-motion";
import "./crush.css"; // CSS file for styling

const CrushTheRush = () => {
  // For checking field
  const [checkTrainNo, setCheckTrainNo] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [checkResult, setCheckResult] = useState("");

  // For providing report field
  const [trainNo, setTrainNo] = useState("");
  const [date, setDate] = useState("");
  const [scale, setScale] = useState(5); // Default scale set to 5

  // Handling form submission for checking
  const handleCheckSubmit = (e) => {
    e.preventDefault();
    // Logic to check the train status (could be a fetch call)
    setCheckResult(`Checking rush for Train No. ${checkTrainNo} on ${checkDate}`);
  };

  // Handling form submission for providing report
  const handleReportSubmit = (e) => {
    e.preventDefault();
    // Logic to send the report (could be a fetch call)
    alert(`Report submitted for Train No. ${trainNo} on ${date} with a scale of ${scale}`);
    setTrainNo("");
    setDate("");
    setScale(5);
  };

  return (
    <div className="crush-container">
      <motion.div
        className="crush-form-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="crush-title">Crush the Rush</h2>

        <div className="form-section">
          <h3 className="section-title">Check Train Rush</h3>
          <form onSubmit={handleCheckSubmit}>
            <div className="form-entry">
              <label htmlFor="checkTrainNo">Train Number</label>
              <input
                type="text"
                id="checkTrainNo"
                value={checkTrainNo}
                onChange={(e) => setCheckTrainNo(e.target.value)}
                placeholder="Enter Train Number"
                required
              />
            </div>

            <div className="form-entry">
              <label htmlFor="checkDate">Date</label>
              <input
                type="date"
                id="checkDate"
                value={checkDate}
                onChange={(e) => setCheckDate(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Check
            </button>
          </form>

          {checkResult && <p className="result">{checkResult}</p>}
        </div>

        <div className="form-section">
          <h3 className="section-title">Provide Train Report</h3>
          <form onSubmit={handleReportSubmit}>
            <div className="form-entry">
              <label htmlFor="trainNo">Train Number</label>
              <input
                type="text"
                id="trainNo"
                value={trainNo}
                onChange={(e) => setTrainNo(e.target.value)}
                placeholder="Enter Train Number"
                required
              />
            </div>

            <div className="form-entry">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="form-entry">
              <label htmlFor="scale">Scale (1-10)</label>
              <input
                type="number"
                id="scale"
                value={scale}
                onChange={(e) => setScale(e.target.value)}
                min="1"
                max="10"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Submit Report
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CrushTheRush;
