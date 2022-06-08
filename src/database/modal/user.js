import mongoose from "mongoose";

const model = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export default new mongoose.model("User", model);
