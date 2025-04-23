const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/:schoolName', (req, res) => {
  const schoolName = req.params.schoolName;

  const filePath = path.join(
    __dirname,
    '..',
    '..',
    'College Information',
    schoolName,
    'degreeRequirements.txt'
  );

  console.log('🔍 Looking for file at:', filePath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading file:', err);
      return res.status(404).json({ error: 'Degree requirements not found' });
    }

    console.log('📄 Raw degree file contents:\n', data);

    const degrees = data
      .split('\n')
      .filter(line => line.trim().startsWith('*'))
      .map(line => ({
        name: line.replace(/^\*/, '').trim(),
      }));

    res.json(degrees);
  });
});

module.exports = router;