class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log('something went wrong');

      throw error;
    }
  }

  async destroy(data) {
    try {
      const result = await this.model.deleteOne(data);
      return result;
    } catch (error) {
      console.log('something went wrong in delete repository');
      throw error;
    }
  }
  async get(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      console.log('something went wrong in get repository');
      throw error;
    }
  }
  async getAll() {
    try {
      const result = await this.model.find({});
      return result;
    } catch (error) {
      console.log('something went wrong in get all repository');
      throw error;
    }
  }
  async update(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log('something went wrong in update repository');
      throw error;
    }
  }
}

export default CrudRepository;
