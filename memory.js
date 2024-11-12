class MemoryGame {
  constructor(cards) {
    this.originalCards = [...cards];  // Guardamos una copia de las cartas originales
    this.cards = [...cards];
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.score = 0;
  }

  // Método para mezclar las cartas
  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  // Método para verificar si las cartas emparejadas coinciden
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    
    if (card1 === card2) {
      this.pairsGuessed++;
      this.score += 2;  // Incrementa la puntuación en 2 para cada par correcto
      return true;
    } else {
      return false;
    }
  }

  // Método para comprobar si el juego ha terminado
  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }

  // Método para reiniciar el juego
  resetGame() {
    this.cards = [...this.originalCards]; // Restaurar las cartas originales
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.score = 0;
    this.shuffleCards(); // Vuelve a mezclar las cartas

    // Actualizar los elementos del DOM
    document.querySelector('#pairs-clicked').innerText = '0';
    document.querySelector('#pairs-guessed').innerText = '0';
    document.querySelector('#score').innerText = '0';
  }
}
