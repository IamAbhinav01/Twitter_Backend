import TweetRepository from '../Repository/tweet-repository.js';
import HashtagRepository from '../Repository/hashtag-repository.js';

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }
  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#[a-zA-Z0-9_]+/g)
      .map((tag) => tag.slice(1).toLowerCase());
    const tweet = await this.tweetRepository.create(data);
    const alreadyPresentTags = await this.hashtagRepository.findByNames(tags);
    const textOfPresentTags = alreadyPresentTags.map((tag) => tag.text);
    const newTags = tags.filter((tag) => !textOfPresentTags.includes(tag));

    newTags = newTags.map((tag) => {
      return { text: tag, tweets: [tweet.id] };
    });
    await this.hashtagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweet.push(tweet.id);
      tag.save();
    });
    return tweet;
  }
  async getTweet(tweetId) {
    const tweet = await this.tweetRepository.getTweet(tweetId);
    return tweet;
  }
}
export default TweetService;
