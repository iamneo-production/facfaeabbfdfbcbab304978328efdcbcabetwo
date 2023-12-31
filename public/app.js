// Define constants for player symbols
const PLAYER_X = 'X';
const PLAYER_O = 'O';

// Initialize variables for game state
let currentPlayer = PLAYER_X;
let isGameOver = false;

// Get all the input elements with class 'btn'
const buttons = document.querySelectorAll('.btn');

// Get the result container and reset button
const resultContainer = document.querySelector('.result');
const resetButton = document.querySelector('#reset-button');

// Add click event listeners to each button
buttons.forEach(button => {
button.addEventListener('click', () => {
// Check if the button is empty and the game is not over
if (button.value === '' && !isGameOver) {
button.value = currentPlayer;
button.disabled = true;

// Check for a win or draw
if (checkWin() || checkDraw()) {
isGameOver = true;
resultContainer.textContent = isGameOver ? 'Player Won' : '';

// Enable the reset button
resetButton.disabled = false;
} else {
// Switch to the other player's turn
currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
}
}
});
});

// Reset the game when the reset button is clicked
resetButton.addEventListener('click', () => {
buttons.forEach(button => {
button.value = '';
button.disabled = false;
});

// Reset game state
currentPlayer = PLAYER_X;
isGameOver = false;
resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
resetButton.disabled = true;
});

// Function to check if a player has won
function checkWin() {
// Define winning combinations
const winCombos = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
[0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
[0, 4, 8], [2, 4, 6] // Diagonals
];

// Check if any winning combination is present
for (const combo of winCombos) {
const [a, b, c] = combo;
if (buttons[a].value && buttons[a].value === buttons[b].value && buttons[b].value === buttons[c].value) {
resultContainer.textContent = `Player ${currentPlayer} wins!`;
return true;
}
}

return false;
}

// Function to check if the game is a draw
function checkDraw() {
// If all buttons are filled and no player has won, it's a draw
const isDraw = Array.from(buttons).every(button => button.value !== '');
if (isDraw) {
resultContainer.textContent = "It's a draw!";
return true;
}

return false;
}

// Initialize the game with Player X's turn
resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
