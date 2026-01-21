import TweetService from '../services/tweet-service.js';

const tweetService = new TweetService();
export const createTweet = async (req, res) => {
  try {
    const data = req.body;
    const response = await tweetService.create(data);

    return res.status(201).json({
      sucess: true,
      message: 'Tweet created successfully',
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: 'error creating tweet',
      data: {},
      err: error,
    });
  }
};
export const getTweet = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await tweetService.getTweet();

    return res.status(201).json({
      sucess: true,
      message: 'Tweet successfully fetched',
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: 'error creating tweet',
      data: {},
      err: error,
    });
  }
};
