let Question = document.querySelector(".Question");
let input = document.querySelector("#inp");
let result = document.querySelector(".result");
let counting = document.querySelector("#counting");
let optionsContainer = document.querySelector(".options");
let count = 5;

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      "Mars",
      "Venus",
      "Jupiter",
      "Saturn",
      "Mercury",
      "Neptune",
      "Earth",
      "Uranus",
    ],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Shakespeare",
      "Hemingway",
      "Dickens",
      "Austen",
      "Twain",
      "Orwell",
      "Poe",
      "Hugo",
    ],
    answer: "Shakespeare",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: [
      "Blue Whale",
      "Elephant",
      "Giraffe",
      "Hippopotamus",
      "Rhino",
      "Polar Bear",
      "Tiger",
      "Gorilla",
    ],
    answer: "Blue Whale",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: [
      "Carbon Dioxide",
      "Oxygen",
      "Nitrogen",
      "Hydrogen",
      "Helium",
      "Methane",
      "Argon",
      "Neon",
    ],
    answer: "Carbon Dioxide",
  },
  {
    question: "Which is the fastest land animal?",
    options: [
      "Cheetah",
      "Lion",
      "Horse",
      "Leopard",
      "Jaguar",
      "Kangaroo",
      "Greyhound",
      "Ostrich",
    ],
    answer: "Cheetah",
  },
];

let currentQuestion = questions[Math.floor(Math.random() * questions.length)];
Question.textContent = currentQuestion.question;
let remainingOptions = [...currentQuestion.options];

function displayOptions() {
  optionsContainer.innerHTML = "";
  let choices = [currentQuestion.answer];

  while (choices.length < 3) {
    let randOption =
      remainingOptions[Math.floor(Math.random() * remainingOptions.length)];
    if (!choices.includes(randOption)) choices.push(randOption);
  }

  choices.sort(() => Math.random() - 0.5);
  choices.forEach((opt) => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, btn);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(userAnswer, btn) {
  if (userAnswer === currentQuestion.answer) {
    input.value = userAnswer;
    btn.style.backgroundColor = "green";
    result.textContent = "YOU FOUND IT!";
  } else {
    count--;
    input.value = userAnswer;
    counting.textContent = `You have ${count} guesses remaining`;
    result.textContent = "Wrong Guess!";
    btn.disabled = true;

    remainingOptions = remainingOptions.filter((opt) => opt !== userAnswer);
    if (remainingOptions.length > 0) displayOptions();
  }

  if (count === 0)
    result.textContent = `Game Over! The correct answer was: ${currentQuestion.answer}`;
}

function reset() {
  count = 5;
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  Question.textContent = currentQuestion.question;
  remainingOptions = [...currentQuestion.options];
  counting.textContent = "You have 5 guesses remaining";
  result.textContent = "";
  displayOptions();
}

displayOptions();
