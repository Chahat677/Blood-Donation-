// testInsert.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bloodapp', { useNewUrlParser:true, useUnifiedTopology:true })
  .then(async () => {
    console.log('Connected to MongoDB — inserting test document...');
    const result = await mongoose.connection.db.collection('donors').insertOne({
      name: 'TEST_USER',
      age: 30,
      bloodGroup: 'O+',
      contact: '0000000000',
      createdAt: new Date()
    });
    console.log('Inserted id:', result.insertedId);
    await mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
  });
