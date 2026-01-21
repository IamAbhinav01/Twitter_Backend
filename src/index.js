import express from 'express';
import connect from './config/database.js';
import router from './routes/index.js';
import TweetRepository from '../src/Repository/tweet-repository.js';
import HashtagRepository from './Repository/hashtag-repository.js';
import bodyParser from 'body-parser';
// express is fast comparing to http
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(3000, async () => {
  console.log('Server is running on port 3000');

  connect();
  console.log('Connected to MongoDB');
  // Tweet.create({
  //   content: 'This is my first tweet',
  //   likes: 25,
  //   noOfRetweets: 5,
  //   comment: 'This is my first comment on my tweet',
  // });

  // Hashtag.create({
  //   text: 'programming',
  //   tweets: ['6486f4e2f0d5c2b1a5e4d3c7'],
  // });
  // const tweetRepository = new TweetRepository();
  // let tweets = await tweetRepository.getAlltweets();
  // let tweet = await tweetRepository.getTweet('696f5f55237a908dc6d06619');
  // console.log(tweet);
});
