const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newPost = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    meta: {
      type: String,
      required: true,
      trim: true,
    },

    tags: [String],

    author: {
      type: String,
      default: "Crazy Programmer",
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },

    thumbnail: {
      type: Object,
      url: {
        type: URL
      },
      public_id: {
        type: String
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", newPost);
