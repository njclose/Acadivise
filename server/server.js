const express = require('express');
const path = require('path');
const degreeRoutes = require('./routes/degreeNamesList');

const app = express();
const PORT = process.env.PORT || 3001;

// Basic test route
app.get('/', (req, res) => {
  res.send('🎉 Server is running!');
});

// Attach your degree route
app.use('/api/degrees', degreeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});