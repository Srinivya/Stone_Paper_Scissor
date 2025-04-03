let choices = ["Stone", "paper", "scissor"];

let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let User = document.querySelector(".User");
let computer = document.querySelector(".computer");
let Userscore = document.querySelector(".Userscore");
let computerscore = document.querySelector(".computerscore");
let user_choose = document.querySelector(".user_choose");
let com_Choose = document.querySelector(".com_Choose");
let usercount = 0;
let computercount = 0;

let other_ele = document.createElement("button");

function game(player) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];

  let userElement = document.getElementById(player.toLowerCase());
  let computerElement = document.getElementById(computerchoice.toLowerCase());

  userElement.classList.add("bounce1");
  setTimeout(() => {
    userElement.classList.remove("bounce1");
  }, 1500);

  computerElement.classList.add("bounce2");
  setTimeout(() => {
    computerElement.classList.remove("bounce2");
  }, 1500);

  if (player === computerchoice) {
    User.textContent = "tie";
    computer.textContent = "tie";
    user_choose.textContent = player;
    com_Choose.textContent = computerchoice;
  } else {
    if (player === "Stone" && computerchoice == "scissor") {
      usercount++;
      User.textContent = "YOU WIN!";
      user_choose.textContent = "Stone";
      com_Choose.textContent = "scissor";
      computer.textContent = "-";
    } else if (player == "Stone" && computerchoice == "paper") {
      computercount++;
      computer.textContent = "COMPUTER WIN!";
      user_choose.textContent = "Stone";
      com_Choose.textContent = "paper";
      User.textContent = "-";
    } else if (player == "paper" && computerchoice == "Stone") {
      usercount++;
      Userscore.textContent = usercount;
      User.textContent = "YOU WIN!";
      user_choose.textContent = "paper";
      com_Choose.textContent = "Stone";
      computer.textContent = "-";
    } else if (player == "paper" && computerchoice == "scissor") {
      computercount++;
      computer.textContent = "COMPUTER WIN!";
      user_choose.textContent = "paper";
      com_Choose.textContent = "scissor";
      User.textContent = "-";
    } else if (player == "scissor" && computerchoice == "Stone") {
      computercount++;
      computer.textContent = "COMPUTER WIN!";
      user_choose.textContent = "scissor";
      com_Choose.textContent = "Stone";
      User.textContent = "-";
    } else if (player == "scissor" && computerchoice == "paper") {
      usercount++;
      User.textContent = "YOU WIN!";
      user_choose.textContent = "scissor";
      com_Choose.textContent = "paper";
      computer.textContent = "-";
    }
  }
  if (User.textContent === "YOU WIN!") {
    User.style.color = "green";
  } else if (computer.textContent === "COMPUTER WIN!") {
    computer.style.color = "red";
  }
  Userscore.textContent = usercount;
  computerscore.textContent = computercount;

  computerElement = document.getElementById(computerchoice.toLowerCase());
}
function reset() {
  Userscore.textContent = 0;
  computerscore.textContent = 0;
  usercount = 0;
  computercount = 0;
  User.textContent = "";
  computer.textContent = "";
  user_choose.textContent = "";
  com_Choose.textContent = "";
  stone.style.backgroundColor = "";
  paper.style.backgroundColor = "";
  scissor.style.backgroundColor = "";
}
