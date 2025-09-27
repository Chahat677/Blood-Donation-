// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/bloodapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> console.log(' MongoDB Connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Donor Schema
const donorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  bloodGroup: String,
  contact: String,
  createdAt: { type: Date, default: Date.now }
});

const Donor = mongoose.model('Donor', donorSchema);

// POST /register
app.post('/register', async (req,res)=>{
  try {
    const donor = new Donor(req.body);
    await donor.save();
    console.log('Donor saved:', donor);
    res.json({ message: 'Donor registered ' });
  } catch(err) {
    console.error('Error saving donor:', err);
    res.status(500).json({ error: 'Could not save donor' });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, ()=> console.log(` Server running on http://localhost:${PORT}`));

