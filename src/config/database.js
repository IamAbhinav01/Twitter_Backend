import mongoose from 'mongoose';

const connect = async () => {
  await mongoose.connect(
    'mongodb+srv://abhinavsunil_db_user:abhinav@cluster0.rbgfyxs.mongodb.net/'
  );
};

export default connect;
