"""Flask application for the Tic-Tac-Toe AI game."""

from flask import Flask, jsonify, render_template, request

from minimax import ai_move, check_winner

app = Flask(__name__)


@app.get("/")
def home():
    return render_template("index.html")


@app.post("/ai_move")
def get_ai():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify(error="Request body must be a JSON object."), 400

    board = data.get("board")
    difficulty = data.get("difficulty")
    if not isinstance(board, list) or len(board) != 9 or any(
        cell not in ("", "X", "O") for cell in board
    ):
        return jsonify(error="Board must contain exactly nine empty, X, or O cells."), 400
    if difficulty not in ("easy", "medium", "hard"):
        return jsonify(error="Difficulty must be easy, medium, or hard."), 400

    # The browser sends the board after the human's X move. Reject impossible,
    # finished, or out-of-turn positions instead of returning an invalid move.
    x_count = board.count("X")
    o_count = board.count("O")
    if x_count != o_count + 1 or check_winner(board) is not None:
        return jsonify(error="Board is not an active position awaiting the AI."), 400

    move = ai_move(board, difficulty)
    return jsonify(move=move)


if __name__ == "__main__":
    app.run(debug=False)
