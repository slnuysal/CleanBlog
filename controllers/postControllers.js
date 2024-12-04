const Post = require('../models/Post');
const fs = require('fs');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
};

exports.getPost = async (req, res) => {
  //console.log(req.params.id);
  const posts = await Post.findById(req.params.id);
  res.render('post', {
    posts,
  });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { name, message } = req.body;

  await Post.findByIdAndUpdate(id, { name, message });
  res.redirect(`/posts/${id}`);
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  await Post.findByIdAndDelete(id);
  res.redirect('/');
};
