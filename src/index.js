import express from 'express';
import connect from './config/database.js';
import Tweet from './models/tweet.js';
// express is fast comparing to http
const app = express();

app.listen(3000, async () => {
  console.log('Server is running on port 3000');

  connect();
  console.log('Connected to MongoDB');
  Tweet.create({
    content: 'This is my first tweet',
    likes: 25,
    noOfRetweets: 5,
    comment: 'This is my first comment on my tweet',
  });
});
