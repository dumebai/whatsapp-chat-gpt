const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const mongoUri = (process.env.MONGODB_URI || '').trim();
console.log('Connecting to MongoDB at', mongoUri);

const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const campaignRoutes = require('./routes/campaignRoutes');

const app = express();
app.use(cors());
app.use(express.json());

process.on('unhandledRejection', err => {
  console.error('Unhandled rejection:', err);
});

mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.error('Initial connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/campaigns', campaignRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
