import express from 'express';
import connect from './config/database.js';
// express is fast comparing to http
const app = express();

app.listen(3000, async () => {
  console.log('Server is running on port 3000');

  connect();
  console.log('Connected to MongoDB');
  // create a schema
  // create a model
  // create a model
});
