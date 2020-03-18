var randomNumber1 = Math.floor((Math.random() * 6) + 1);

document.querySelectorAll(".dice img")[0].src = "dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelectorAll(".dice img")[1].src = "dice" + randomNumber2 + ".png";

var winner;

if(randomNumber1 > randomNumber2) {
  winner = "🏆 Player 1 Wins!"
} else {
  if(randomNumber1 == randomNumber2) {
    winner = "Draw!";
  } else {
    winner = "Player 2 Wins! 🏆";
  }
}

document.getElementsByTagName("h1")[0].innerText= winner;
