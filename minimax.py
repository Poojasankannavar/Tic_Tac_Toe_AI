"""Move selection for the Tic-Tac-Toe AI (O)."""

import random

WIN_COMBOS = (
    (0, 1, 2), (3, 4, 5), (6, 7, 8),
    (0, 3, 6), (1, 4, 7), (2, 5, 8),
    (0, 4, 8), (2, 4, 6),
)


def check_winner(board):
    """Return X, O, Draw, or None for an unfinished board."""
    for a, b, c in WIN_COMBOS:
        if board[a] and board[a] == board[b] == board[c]:
            return board[a]
    if "" not in board:
        return "Draw"
    return None


def minimax(board, is_maximizing, depth=0):
    """Score a position, preferring quicker wins and slower losses."""
    winner = check_winner(board)
    if winner == "O":
        return 10 - depth
    if winner == "X":
        return depth - 10
    if winner == "Draw":
        return 0

    scores = []
    mark = "O" if is_maximizing else "X"
    for i, cell in enumerate(board):
        if cell == "":
            board[i] = mark
            scores.append(minimax(board, not is_maximizing, depth + 1))
            board[i] = ""
    return max(scores) if is_maximizing else min(scores)


def best_move(board):
    """Return an optimal empty cell index, or None if no move is available."""
    best_score = float("-inf")
    move = None
    for i, cell in enumerate(board):
        if cell == "":
            board[i] = "O"
            score = minimax(board, False, 1)
            board[i] = ""
            if score > best_score:
                best_score, move = score, i
    return move


def random_move(board):
    empty = [i for i, cell in enumerate(board) if cell == ""]
    return random.choice(empty) if empty else None


def ai_move(board, difficulty):
    """Choose an AI move for easy, medium, or hard difficulty."""
    if difficulty == "easy":
        return random_move(board)
    if difficulty == "medium" and random.random() < 0.5:
        return random_move(board)
    return best_move(board)
