const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

//Template Engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));

app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index');
});
app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
});
app.get('/add_post', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('add_post');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
