const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'CarRental.html'));
});
app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'AddCar.html'));
});
app.get('/show', (req, res) => {
  res.sendFile(path.join(__dirname, 'ShowCar.html'));
});

app.get('/userform', function (req, res) {
  const completePath = path.join(__dirname, 'Login.html');
  res.sendFile(completePath);
});
app.post('/login', function (req, res) {
  if (req.body.username === 'smith' && req.body.password === 'abc') {
    res.send(`
          <style>
              h2{
                  font-variant: small-caps;
                  font-weight: 300;
                  text-align: center;
                  margin-bottom: 20px;
                  color: rgba(30, 163, 134, 0.733);
                  font-size: 30px;
               }
          </style>
          <h2>You are Logged in</h2>`);
  }
});
app.listen(3001);
console.log('Server Running');
