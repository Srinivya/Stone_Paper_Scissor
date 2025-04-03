const grid = document.querySelector(".grid");
const stepsDisplay = document.getElementById("steps");
const pointsDisplay = document.getElementById("points");
const emojis = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍍", "🥝", "🥥"];
let cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
let firstCard = null,
  secondCard = null,
  lockBoard = false;
let steps = 0,
  points = 0;
cards.forEach((emoji, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.emoji = emoji;
  card.addEventListener("click", flipCard);
  grid.appendChild(card);
});

function flipCard() {
  if (lockBoard || this === firstCard) return;
  this.textContent = this.dataset.emoji;

  if (!firstCard) {
    firstCard = this;
    return;
  }
  secondCard = this;
  lockBoard = true;
  steps++;
  stepsDisplay.textContent = steps;

  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    points += 10;
    pointsDisplay.textContent = points;
    resetBoard();
  } else {
    setTimeout(() => {
      firstCard.textContent = "";
      secondCard.textContent = "";
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}
