// JavaScript Code (script.js)
// Initial variables to keep track of the game state
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Select all the buttons (cells) and reset button
const cells = document.querySelectorAll('.btn');
const resetButton = document.getElementById('reset-button');

// Function to handle cell click
function handleCellClick(event) {
    const cellIndex = event.target.id.split('-')[1];

        // Check if the cell is empty and the game is active
            if (gameBoard[cellIndex] === '' && gameActive) {
                    // Update the cell with the current player's symbol
                            event.target.value = currentPlayer;
                                    gameBoard[cellIndex] = currentPlayer;

                                            // Check for a win or draw
                                                    if (checkWin(currentPlayer)) {
                                                                displayResult(`${currentPlayer} wins!`);
                                                                            gameActive = false;
                                                                                    } else if (checkDraw()) {
                                                                                                displayResult("It's a draw!");
                                                                                                            gameActive = false;
                                                                                                                    } else {
                                                                                                                                // Switch to the other player
                                                                                                                                            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                                                                                                                                                        document.querySelector('.result').textContent = `Player ${currentPlayer}'s Turn`;
                                                                                                                                                                }
                                                                                                                                                                    }
                                                                                                                                                                    }

                                                                                                                                                                    // Function to check for a win
                                                                                                                                                                    function checkWin(player) {
                                                                                                                                                                        const winCombos = [
                                                                                                                                                                                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                                                                                                                                                                                        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                                                                                                                                                                                                [0, 4, 8], [2, 4, 6] // Diagonals
                                                                                                                                                                                                    ];

                                                                                                                                                                                                        return winCombos.some(combo => {
                                                                                                                                                                                                                return combo.every(index => gameBoard[index] === player);
                                                                                                                                                                                                                    });
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                    // Function to check for a draw
                                                                                                                                                                                                                    function checkDraw() {
                                                                                                                                                                                                                        return gameBoard.every(cell => cell !== '');
                                                                                                                                                                                                                        }

                                                                                                                                                                                                                        // Function to display the game result
                                                                                                                                                                                                                        function displayResult(result) {
                                                                                                                                                                                                                            document.querySelector('.result').textContent = result;
                                                                                                                                                                                                                                resetButton.disabled = false;
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                // Event listeners for cell clicks and reset button click
                                                                                                                                                                                                                                cells.forEach(cell => cell.addEventListener('click', handleCellClick));
                                                                                                                                                                                                                                resetButton.addEventListener('click', resetGame);

                                                                                                                                                                                                                                // Function to reset the game
                                                                                                                                                                                                                                function resetGame() {
                                                                                                                                                                                                                                    currentPlayer = 'X';
                                                                                                                                                                                                                                        gameBoard = ['', '', '', '', '', '', '', '', ''];
                                                                                                                                                                                                                                            gameActive = true;

                                                                                                                                                                                                                                                cells.forEach(cell => {
                                                                                                                                                                                                                                                        cell.value = '';
                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                document.querySelector('.result').textContent = "Player X's Turn";
                                                                                                                                                                                                                                                                    resetButton.disabled = true;
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                    