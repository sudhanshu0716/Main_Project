const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const markedPointsRoutes = require('./routes/markedPoints');
const lostAndFoundRoutes = require('./routes/lostAndFound');
const adminRoutes = require('./routes/adminRoutes'); // Import admin routes\\



dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/marked-points', markedPointsRoutes);
app.use('/api/lost-and-found', lostAndFoundRoutes);

// Admin routes
app.use('/api/admin', adminRoutes); // Use admin routes with the /api/admin prefix

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
