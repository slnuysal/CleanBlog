const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const PostSchema = new Schema({
  name: String,
  message: String,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
