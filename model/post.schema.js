const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    content: String,
    user_id: String,
    likes: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const post = mongoose.model("post", postSchema);
module.exports = post;
