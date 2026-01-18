import mongoose from 'mongoose';

const connect = async () => {
  await mongoose.connect(
    'mongodb+srv://abhinavsunil:iamAbhinav%402005@cluster0.vcvudsx.mongodb.net/'
  );
};

export default connect;
