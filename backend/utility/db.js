import mongoose from "mongoose";

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("mongodb connect successfully");
  } catch (error) {
    throw new Error(error);
  }
};
export default dbconnect;
