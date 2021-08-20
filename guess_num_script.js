"use strict";

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    displayMessage("🚫 No Number !");

    //when player wins
  } else if (guess === secretnumber) {
    displayMessage("👾 BINGO ! Correct Answer.");

    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is different
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displayMessage(guess > secretnumber ? "📉 Too High !" : "📉 Too Low !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("👎 You Lost the Game !");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing . . . ");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
