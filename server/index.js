var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json()); 
app.get("/", function (req, res) {
  res.send("Hi! I am a ChatBot.");
});
app.post("/postMessage", function (req, res, next) {
  let message = req.body.message.toLowerCase();
  switch (message) {
    case "hello" || "hi": {
      res.send({
        bot_message:
          "Hi, how may I help you? \n Please reply with the numbers                                             1.General IP Queries 2.Learning Path 1 3.Learning Path 2 4.Learning Path 3 5.Live Projects",
      });
      break;
    }
    case "1": {
      res.send({
        bot_message:
          "1a IP Start date 1b IP End date 1c Prerequisites 1d Eligibility",
      });
    }
    case "1a": {
      res.send({
        bot_message: "IP start date is from March",
      });
    }
    case "1b": {
      res.send({
        bot_message: "IP end date is in last week of July",
      });
    }
    case "1c": {
      res.send({
        bot_message: "There is no prerequisites for the IP",
      });
    }
    case "1d": {
      res.send({
        bot_message:
          "Currently enrolled in graduate program and is from Maharashtra",
      });
    }
    default: {
      res.send({
        bot_message: "Sorry I didn't understood",
      });
    }
  }
});
var server = app.listen(3001, function () {});
console.log("Listening to server at port 3001");
