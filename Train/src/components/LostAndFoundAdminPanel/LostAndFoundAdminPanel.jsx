import React, { useState } from 'react';
import axios from 'axios';
import './LostAndFoundAdminPanel.css';
import moment from 'moment';


const LostAndFoundAdminPanel = () => {
  const [date, setDate] = useState('');
  const [reports, setReports] = useState([]);

  const fetchReports = async (e) => {
    e.preventDefault();
    console.log('Fetching reports for date:', date);
    const formattedDate = moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");
    try {
      const response = await axios.post(
        'http://localhost:5000/api/lost-and-found/admin/reports',
        { date: formattedDate }
      );
      console.log('Fetched reports:', response.data.reports);
      setReports(response.data.reports);
    } catch (error) {
      console.error('Error fetching reports:', error);
      alert(error.response?.data?.message || 'Failed to fetch reports.');
    }
  };
  
  

  const deleteItem = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/lost-and-found/admin/delete/${id}`
      );
      alert(response.data.message);
      setReports(reports.filter((report) => report._id !== id));
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to delete item.');
    }
  };

  return (
    <div className="lost-admin-container">
      <h1>Lost and Found Admin Panel</h1>

      <form className="admin-date-form" onSubmit={fetchReports}>
        <h2>Search Reports by Date</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Fetch Reports</button>
      </form>

      <div className="admin-reports-list">
  <h2>Reports</h2>
  {reports.length > 0 ? (
    <ul>
      {reports.map((report) => (
        <li key={report._id}>
          <p>
            <strong>Train Number:</strong> {report.trainNumber} |{' '}
            <strong>Date:</strong> {report.date} |{' '}
            <strong>Description:</strong> {report.itemDescription}
          </p>
          <button
            className="admin-delete-button"
            onClick={() => deleteItem(report._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>No reports found.</p>
  )}
</div>

    </div>
  );
};

export default LostAndFoundAdminPanel;
