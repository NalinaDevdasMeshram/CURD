import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    fathername: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: Number,
      reuired: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Usermodel = mongoose.model("user", userSchema);

export default Usermodel;
