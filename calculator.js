const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Express uses body-parser for parsing data from client
app.use(bodyParser.urlencoded({ extended: true }));

// Server socket
app.listen(3000, function () {
  console.log("Server is up ...");
  console.log(__dirname);
});

// Get of calculator
app.get("/", function (req, res) {
  //   res.send("<h1>Welcome back, Ron</h1>");
  res.sendFile(__dirname + "/index.html");
});

// Post of calculator
// All post requests from route "/" come here
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  res.send("The sum of " + num1 + " and " + num2 + " is: " + (num1 + num2));
});

// Get of BMICalaulator
app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// Post of BMICalaulator
// All post requests from route "/bmi" come here on submit
app.post("/bmi/", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / Math.pow(height, 2);
  res.send("<h1>Your BMI is: " + bmi + "</h1>");
});
