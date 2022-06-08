import mongoose from "mongoose";

const model = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  files: {
    type: [String],
    require: false,
    default: undefined,
  },
});

export default new mongoose.model("User", model);
