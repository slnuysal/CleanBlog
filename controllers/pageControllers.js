const Post = require('../models/Post');
const fs = require('fs');

exports.getAboutPage = (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
};

exports.getAddPage = (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('add_post');
};

exports.getEditPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit_post', {
    post,
  });
};
