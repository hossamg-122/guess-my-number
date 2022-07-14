let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
const correctNumber = document.querySelector(".number");
const scoreText = document.querySelector(".score");
const highScoreText = document.querySelector(".highscore");
const guessMessage = document.querySelector(".message");
const guessInput = document.querySelector(".guess");

const handleAgainClick = () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.body.classList.remove("success");
  correctNumber.textContent = "?";
  guessMessage.textContent = "Start guessing...";
  guessInput.value = "";
  scoreText.textContent = 0;
};

const handleCheckClick = () => {
  const guessNumber = Number(guessInput.value);
  let scoreNumber = Number(scoreText.textContent);
  if (!guessNumber) guessMessage.textContent = "No Number...";
  else if (guessNumber === randomNumber) {
    guessMessage.textContent = "Correct Number!";
    correctNumber.textContent = `${guessNumber}`;
    document.body.classList.add("success");
    let highScoreNumber = Number(highScoreText.textContent);
    scoreText.textContent = `${++scoreNumber}`;
    scoreNumber > highScoreNumber
      ? (highScoreText.textContent = `${scoreText.textContent}`)
      : null;
  } else if (guessNumber < randomNumber) {
    guessMessage.textContent = "Low Number!";
    scoreText.textContent = `${--scoreNumber}`;
    document.body.classList.remove("success");
  } else {
    guessMessage.textContent = "High Number!";
    scoreText.textContent = `${--scoreNumber}`;
    document.body.classList.remove("success");
  }
  console.log(guessNumber);
};

document.querySelector(".again").addEventListener("click", handleAgainClick);
document.querySelector(".check").addEventListener("click", handleCheckClick);
