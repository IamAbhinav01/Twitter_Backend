import Hashtag from '../models/hashtag.js';

class HashtagRepository {
  async create(data) {
    try {
      const hashtag = await Hashtag.create(data);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  //hastag by name
  async getHashName(text) {
    try {
      const tag = await Hashtag.find({ text: text });
      return tag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async bulkcreate() {
    try {
      const tags = await Hashtag.insertMany([]);
      return tags;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getHashtag(id) {
    try {
      const hashtag = await Hashtag.findById(id);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteHashtag(data) {
    try {
      let tweet = await Hashtag.deleteOne(data);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export default HashtagRepository;
///CRUD OPERATIONS , CREATE,RETRIEVER,UPDATE AND DELETE
