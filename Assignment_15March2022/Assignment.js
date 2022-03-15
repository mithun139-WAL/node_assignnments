const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({extended: true}));
app.post('/register', function (req, res) {
  console.log(req.body);
  res.send(
    `<style>
        table{
            width:1000px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin:auto;
            border: 2px solid rgba(30, 163, 134, 0.733);
        }
        td,
        th,
        table{
            border: 1px solid rgba(30, 163, 134, 0.733);
            border-collapse: collapse;
            padding: 10px;
        }
        th{
            background-color: rgba(30, 163, 134, 0.733);
            
        }
    </style>
    <table>
        <thead>
            <tr>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
                <th>DATEOFBIRTH</th>
                <th>CITY</th>
                <th>COUNTRY</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${req.body.username}</td>
                <td>${req.body.email}</td>
                <td>${req.body.password}</td>
                <td>${req.body.dob}</td>
                <td>${req.body.city}</td>
                <td>${req.body.country}</td>
    </table>`
  );
});
app.get('/userform', function (req, res) {
  console.log(__dirname);
  const completePath = path.join(__dirname, 'Assignment1.html');
  res.sendFile(completePath);
});
app.get('/calculator', function (req, res) {
  console.log(__dirname);
  const completePath = path.join(__dirname, 'Assignment2.html');
  res.sendFile(completePath);
});
app.post('/calculate', function (req, res) {
  console.log(req.body);
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  switch (req.body.parameter) {
    case 'add':
      var result = num1 + num2;
      res.send(
        `The operation is ${req.body.parameter} and the result is ${result}`
      );
    case 'subtarct':
      var result = num1 - num2;
      res.send(
        `The operation is ${req.body.parameter} and the result is ${result}`
      );
    case 'multiply':
      var result = num1 * num2;
      res.send(
        `The operation is ${req.body.parameter} and the result is ${result}`
      );
    case 'divide':
      var result = num1 / num2;
      res.send(
        `The operation is ${req.body.parameter} and the result is ${result}`
      );
  }
});
app.listen(3001);
console.log('Server running');
