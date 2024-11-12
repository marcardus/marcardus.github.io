const cards = [
  { name: '1', img: '1.jpg' },
  { name: '2', img: '2.jpg' },
  { name: '3', img: '3.jpg' },
  { name: '4', img: '4.jpg' },
  { name: '5', img: '5.jpg' },
  { name: '6', img: '6.jpg' },
  { name: '7', img: '7.jpg' },
  { name: '8', img: '8.jpg' },
  { name: '9', img: '9.jpg' },
  { name: '10', img: '10.jpg' },
  { name: '11', img: '11.jpg' },
  { name: '12', img: '12.jpg' },
  { name: '1', img: '1.jpg' },
  { name: '2', img: '2.jpg' },
  { name: '3', img: '3.jpg' },
  { name: '4', img: '4.jpg' },
  { name: '5', img: '5.jpg' },
  { name: '6', img: '6.jpg' },
  { name: '7', img: '7.jpg' },
  { name: '8', img: '8.jpg' },
  { name: '9', img: '9.jpg' },
  { name: '10', img: '10.jpg' },
  { name: '11', img: '11.jpg' },
  { name: '12', img: '12.jpg' }
];

let timeLeft = 60;
let timerInterval = null;



function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  
  // Guardar la puntuación final en localStorage
  localStorage.setItem('finalScore', memoryGame.score);
  
  // Redirigir a la página de Game Over
  window.location.href = '/gameOver.html'; // Asegúrate de que esta URL sea correcta
}

window.addEventListener("load", () => {
  startTimer();
  memoryGame.shuffleCards();
  renderBoard();
});

function renderBoard() {
  const board = document.getElementById("memory-board");
  board.innerHTML = "";
  console.log('memoryGame.cards.length: ',memoryGame.cards.length);

  memoryGame.cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.cardName = card.name;

    cardElement.innerHTML = `
      <div class="back" name="${card.img}"></div>
      <div class="front" style="background: url(img/${card.img}) no-repeat"></div>
    `;
    cardElement.addEventListener("click", handleCardClick);
    board.appendChild(cardElement);
  });
}

let timeout = null;
function handleCardClick(event) {
  const clickedCard = event.currentTarget;

  if (timeout || clickedCard.classList.contains("turned")) return;

  clickedCard.classList.add("turned");
  memoryGame.pickedCards.push(clickedCard);

  if (memoryGame.pickedCards.length === 2) {
    memoryGame.pairsClicked++;
    updateStats();

    const [card1, card2] = memoryGame.pickedCards;
    const isPair = memoryGame.checkIfPair(card1.dataset.cardName, card2.dataset.cardName);

    if (!isPair) {
      timeout = setTimeout(() => {
        card1.classList.remove("turned");
        card2.classList.remove("turned");
        memoryGame.pickedCards = [];
        timeout = null;
      }, 1000);
    } else {
      memoryGame.pairsGuessed++;
      memoryGame.pickedCards = [];
      updateStats();

      if (memoryGame.checkIfFinished()) {
        clearInterval(timerInterval);
        // Aquí también se podría redirigir a la página de Game Over si se ha ganado
        localStorage.setItem('finalScore', memoryGame.score);
        window.location.href = '/gameOver.html'; // Asegúrate de que esta URL sea correcta
      }
    }
  }
}

function updateStats() {
  document.getElementById("score").innerText = memoryGame.score;
  document.getElementById("pairs-clicked").innerText = memoryGame.pairsClicked;
  document.getElementById("pairs-guessed").innerText = memoryGame.pairsGuessed;
}

/*
 document.getElementById("play-again-button").addEventListener("click", () => {
  clearInterval(timerInterval);
  timeLeft = 60;
  memoryGame.resetGame();
  updateStats();
  startTimer();
  renderBoard();
});

*/
