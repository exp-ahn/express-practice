import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'user_signin.html'));
});

app.get('/post', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'post_list.html'));
});

app.get('/post_detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'post_detail.html'));
});

app.get('/post_write', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'post_write.html'));
});

app.get('/post_modify', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'post_modify.html'));
});

app.get('/user_signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'user_signup.html'));
});

app.get('/user_modify', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'user_modify.html'));
});

app.get('/modify_pw', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'modify_pw.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
