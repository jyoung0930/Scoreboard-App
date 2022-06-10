// Home scoreboard  Buttons
let hbtn1 = document.getElementById("home-score-1");
let hbtn2 = document.getElementById("home-score-2");
let hbtn3 = document.getElementById("home-score-3");
// Guest score buttons
let gbtn1 = document.getElementById("guest-score-1");
let gbtn2 = document.getElementById("guest-score-2");
let gbtn3 = document.getElementById("guest-score-3");
// Home score
let homeScore = document.getElementById("home-score");
// Guest score
let guestScore = document.getElementById("guest-score");
// New game button
let newGameButton = document.getElementById("new-game-btn");

// Intial score of Home/Guest
let hScore = 0;
let gScore = 0;
guestScore.textContent = gScore;
homeScore.textContent = hScore;
// Home button events
hbtn1.addEventListener("click", () => {
  hScore += 1;
  homeScore.textContent = hScore;
});
hbtn2.addEventListener("click", () => {
  hScore += 2;
  homeScore.textContent = hScore;
});
hbtn3.addEventListener("click", () => {
  hScore += 3;
  homeScore.textContent = hScore;
});

// Guest button events
gbtn1.addEventListener("click", () => {
  gScore += 1;
  guestScore.textContent = gScore;
});
gbtn2.addEventListener("click", () => {
  gScore += 2;
  guestScore.textContent = gScore;
});
gbtn3.addEventListener("click", () => {
  gScore += 3;
  guestScore.textContent = gScore;
});

// New game button
newGameButton.addEventListener("click", () => {
  hScore = 0;
  gScore = 0;
  guestScore.textContent = gScore;
  homeScore.textContent = hScore;
});
