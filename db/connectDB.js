import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://beharadeepak6:stF0iw02VFiVXZVs@cluster0.njhxfsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB