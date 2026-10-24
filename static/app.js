"use strict";

const WIN_COMBOS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

let board = Array(9).fill("");
let gameOver = false;
let aiThinking = false;
let roundId = 0;
let scores = { X: 0, Draw: 0, O: 0 };

const statusText = document.getElementById("statusText");
const cells = Array.from(document.querySelectorAll(".cell"));

function checkWinner() {
    for (const [a, b, c] of WIN_COMBOS) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return board.every(Boolean) ? "Draw" : null;
}

function updateBoardUI() {
    cells.forEach((cell, index) => {
        const mark = board[index];
        cell.textContent = mark;
        cell.classList.toggle("mark-x", mark === "X");
        cell.classList.toggle("mark-o", mark === "O");
        cell.disabled = gameOver || aiThinking || Boolean(mark);
        cell.setAttribute("aria-label", mark ? `Square ${index + 1}: ${mark}` : `Square ${index + 1}, empty`);
    });
}

function updateScores() {
    document.getElementById("playerScore").textContent = scores.X;
    document.getElementById("drawScore").textContent = scores.Draw;
    document.getElementById("aiScore").textContent = scores.O;
}

function finishGame(result) {
    gameOver = true;
    scores[result] += 1;
    updateScores();
    statusText.textContent = result === "X" ? "You win! 🎉" : result === "O" ? "The AI wins this round." : "It's a draw! 🤝";
    updateBoardUI();
}

async function makeMove(index) {
    if (gameOver || aiThinking || board[index]) return;
    board[index] = "X";
    let result = checkWinner();
    if (result) {
        updateBoardUI();
        finishGame(result);
        return;
    }

    aiThinking = true;
    const requestRound = roundId;
    statusText.textContent = "The AI is thinking…";
    updateBoardUI();
    try {
        const response = await fetch("/ai_move", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ board, difficulty: document.getElementById("difficulty").value }),
        });
        const data = await response.json();
        if (requestRound !== roundId) return;
        if (!response.ok) throw new Error(data.error || "The AI could not make a move.");
        if (!Number.isInteger(data.move) || data.move < 0 || data.move > 8 || board[data.move]) {
            throw new Error("The AI returned an invalid move.");
        }
        board[data.move] = "O";
        result = checkWinner();
        if (result) finishGame(result);
        else statusText.textContent = "Your turn! Choose a square.";
    } catch (error) {
        if (requestRound !== roundId) return;
        // Roll back the human move so the request can be retried cleanly.
        board[index] = "";
        statusText.textContent = `${error.message} Please try another move.`;
    } finally {
        if (requestRound === roundId) {
            aiThinking = false;
            updateBoardUI();
        }
    }
}

function newGame() {
    roundId += 1;
    board = Array(9).fill("");
    gameOver = false;
    aiThinking = false;
    statusText.textContent = "Your turn! Choose a square.";
    updateBoardUI();
}

cells.forEach((cell) => cell.addEventListener("click", () => makeMove(Number(cell.dataset.index))));
document.getElementById("newGame").addEventListener("click", newGame);
document.getElementById("clearScores").addEventListener("click", () => {
    scores = { X: 0, Draw: 0, O: 0 };
    updateScores();
    newGame();
});

updateBoardUI();
