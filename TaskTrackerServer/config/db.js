import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://kanan:kanansharmehta90@clustertasktracker.gukzqpb.mongodb.net/?appName=ClusterTaskTracker"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // stop server if DB fails
  }
};

export default connectDB;
