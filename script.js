let memoryGame = null;


window.addEventListener("load", () => {
  // Obtener el nivel de dificultad del almacenamiento local
  const difficulty = localStorage.getItem("difficulty") || "easy";
  let selectedCards = [];
  console.log('Difficulty: ', difficulty);

  // Configurar el número de cartas basado en el nivel de dificultad
  if (difficulty === "easy") {
    selectedCards = cards.slice(0, 5).concat(cards.slice(0, 5)); // 10 cartas (5 pares)
  } else if (difficulty === "medium") {
    selectedCards = cards.slice(0, 6).concat(cards.slice(0, 6)); // 12 cartas (6 pares)
  } else if (difficulty === "hard") {
    selectedCards = cards// 24 cartas (12 pares)
  }

  
  // Inicializar el juego con las cartas seleccionadas
  memoryGame = new MemoryGame(selectedCards);
  memoryGame.shuffleCards();
  renderBoard(memoryGame);

  // Obtener el puntaje final y mostrarlo en el HTML (si existe)
  const finalScore = localStorage.getItem("finalScore");
  if (finalScore) {
    document.getElementById("score").innerText = finalScore;
  }

  // Control de la música de fondo
  const backgroundMusic = document.getElementById("background-sound");

  // Función para iniciar la música
  function startMusic() {
    backgroundMusic.play();
  }

  // Función para detener la música
  function stopMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reinicia la canción al comienzo
  }

  // Llama a la función startMusic al cargar la página para iniciar la música
  startMusic();

  // Si deseas detener la música al terminar el tiempo, agrega stopMusic en la función endGame
  function endGame() {
    stopMusic(); // Detener la música cuando el juego finaliza

    // Mostrar los puntajes finales en el HTML
    document.getElementById("score").innerText = memoryGame.score;
    document.getElementById("pairsGuessed").innerText = memoryGame.pairsGuessed;

    // Mostrar el contenedor de puntaje final
    document.getElementById("final-score-container").style.display = "block";

    // Agregar evento al botón "Play Again" para redirigir a index.html
    document.getElementById("play-again-button").addEventListener("click", () => {
      window.location.href = "/index.html";
    });

    // Eliminar eventos de clic en las cartas (desactivar el juego)
    document.querySelectorAll(".card").forEach((card) => {
      card.removeEventListener("click", handleCardClick);
    });
  }

  // Función para manejar el clic en una carta
  function handleCardClick(event) {
    const cardElement = event.target;
    memoryGame.flipCard(cardElement);

    // Si el juego ha terminado
    if (memoryGame.isGameOver()) {
      endGame();
    }
  }

  // Agregar el evento de clic a todas las cartas
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", handleCardClick);
  });
});
