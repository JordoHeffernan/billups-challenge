const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const port = 8080;

const options = [
  {
    id: 1,
    name: "rock"
  },
  {
    id: 2,
    name: "paper"
  },
  {
    id: 3,
    name: "scissors"
  },
  {
    id: 4,
    name: "lizard"
  },
  {
    id: 5,
    name: "spock"
  }
];

const rockPaperScissors = (humanGuess, computerGuess) => {
  switch (humanGuess) {
    case "rock":
      switch (computerGuess) {
        case "rock":
          return "tie"
        case "scissors":
        case "lizard":
          return "win"
        case "spock":
        case "paper":
          return "lose"
        default:
          return "tie"
      }
    case "paper":
      switch (computerGuess) {
        case "paper":
          return "tie"
        case "rock":
        case "spock":
          return "win"
        case "scissors":
        case "lizard":
          return "lose"
        default:
          return "tie"
      }
    case "scissors":
      switch (computerGuess) {
        case "scissors":
          return "tie"
        case "paper":
        case "lizard":
          return "win"
        case "rock":
        case "spock":
          return "lose"
        default:
          return "tie"
      }
    case "lizard":
      switch (computerGuess) {
        case "lizard":
          return "tie"
        case "spock":
        case "paper":
          return "win"
        case "scissors":
        case "rock":
          return "lose"
        default:
          return "tie"
      }
    case "spock":
      switch (computerGuess) {
        case "spock":
          return "tie"
        case "scissors":
        case "rock":
          return "win"
        case "lizard":
        case "paper":
          return "lose"
        default:
          return "tie"
      }
    default:
      break
  }
}

app.use(bodyParser());
app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');
  next();
});

// This is an old route used for testing logic on 
// frontend that is now performed on the server
// 
//app.get('/choice', (req, res) => {
//   let choice = options[Math.floor((Math.random() * 5))];
//   res.header("Access-Control-Allow-Origin", "*");
//   res.setHeader('Content-Type', 'application/json');
//   return res.status(200).json(choice);
// });
//

app.post('/play', (req, res) => {
  let computer = options[Math.floor((Math.random() * 5))];
  computer = computer.name;
  let { player } = req.body;
  if (!player) {
    return res.status(500).json({ error: "You must submit a choice." });
  }
  let result = rockPaperScissors(player, computer);

  let body = { result, player, computer };
  return res.status(201).json(body);
});

app.listen(port, err => {
  if (err) {
    return console.log('there was an error', err);
  }

  console.log(`server is listening on ${port} ...`)
});

module.exports = app;