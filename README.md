# 🎮 Tic Tac Toe AI

An interactive, browser-based Tic-Tac-Toe game built using Python, Flask, HTML, CSS, and JavaScript. Play as **X** against an AI opponent playing **O**, with three difficulty levels: Easy, Medium, and Hard. The Hard AI uses the **Minimax algorithm** to select optimal moves.

<p align="center">
  <a href="https://github.com/Poojasankannavar/Tic_Tac_Toe_AI">
    <img src="https://img.shields.io/badge/GitHub-View%20Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository">
  </a>
  <img src="https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Flask-Web%20Framework-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/AI-Minimax%20Algorithm-7C3AED?style=for-the-badge" alt="Minimax AI">
</p>

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [AI Difficulty Levels](#-ai-difficulty-levels)
- [How It Works](#-how-it-works)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation and Setup](#-installation-and-setup)
- [Running the Application](#-running-the-application)
- [AI Algorithm](#-ai-algorithm)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

## 📖 Overview

Tic Tac Toe AI is a browser-based game where a player competes against an artificial intelligence opponent.

The player uses **X**, while the AI uses **O**. The application provides three difficulty levels to offer different gameplay experiences, from random moves to optimal decision-making.

The frontend handles player interactions, updates the game board and scores, and communicates with the Flask backend to request AI moves.

This project demonstrates game development, algorithmic problem-solving, AI decision-making, and full-stack web development.

## ✨ Features

- 🎮 Interactive browser-based Tic-Tac-Toe game.
- 🤖 Play against an AI opponent.
- 🎯 Three difficulty levels: Easy, Medium, and Hard.
- 🧠 Minimax algorithm for optimal AI decisions on Hard difficulty.
- 📊 Session-based tracking of wins, losses, and draws.
- ⚡ Dynamic board updates using JavaScript.
- 🔗 Flask API endpoint for AI moves.
- 🎨 HTML and CSS-based game interface.
- 🌐 Browser-based gameplay without requiring a separate desktop application.
- 🚀 Gunicorn dependency for production deployment.

## 🎯 AI Difficulty Levels

The game provides three levels of AI difficulty.

| Difficulty | Strategy | Gameplay |
|---|---|---|
| 🟢 Easy | Random moves | Provides a simple opponent. |
| 🟡 Medium | Mixes random and strategic moves | Offers a more challenging experience. |
| 🔴 Hard | Minimax algorithm | Selects optimal moves for the game. |

### Easy Mode

The AI chooses a random available cell on the board.

### Medium Mode

The AI combines random moves with strategic decisions, creating a less predictable opponent.

### Hard Mode

The AI uses the Minimax algorithm to evaluate possible moves and select an optimal move. With correct implementation, the AI should not lose when playing standard Tic-Tac-Toe optimally.

## ⚙️ How It Works

1. **Game Initialization:** The browser displays an empty 3 × 3 board.
2. **Player Move:** The user clicks an available cell to place X.
3. **Board Update:** JavaScript updates the game board and checks the game status.
4. **AI Request:** The frontend sends the current board state and selected difficulty to Flask through the `/ai_move` endpoint.
5. **AI Decision:** The backend selects a move using the strategy for the chosen difficulty.
6. **Response:** Flask returns the AI's next move.
7. **Game Update:** JavaScript places O on the board and checks for a win, loss, or draw.
8. **Score Tracking:** The interface updates the session scores.

### Game Workflow

```text
        Start New Game
              |
              v
        Display Board
              |
              v
        Player Places X
              |
              v
       Check Game Status
              |
        Game Over?
         /       \
       Yes        No
        |          |
        v          v
 Display Result   Send Board
                   to Flask
                      |
                      v
                 AI Selects O
                      |
                      v
                 Update Board
                      |
                      v
                Check Game Status
                      |
                      v
                 Continue Game
```

## 🛠️ Technology Stack

### Backend

- **Python** — Core application logic.
- **Flask** — Web server and API endpoint.
- **Minimax Algorithm** — Optimal decision-making for Hard difficulty.
- **Gunicorn** — Production WSGI server dependency.

### Frontend

- **HTML5** — Game page and board structure.
- **CSS3** — Game styling and layout.
- **JavaScript** — Player interactions, board updates, score tracking, and backend requests.

### Development Tools

- **Git** — Version control.
- **GitHub** — Source code hosting.
- **Visual Studio Code / PyCharm** — Development environment.

## 📂 Project Structure

```text
Tic_Tac_Toe_AI/
│
├── app.py
├── minimax.py
├── requirements.txt
│
├── templates/
│   └── index.html
│
├── static/
│   └── app.js
│
└── README.md
```

This structure reflects the main files described for the project. Keep additional files and folders aligned with your actual repository.

## 💻 Installation and Setup

### Prerequisites

Install the following:

- Python 3.x
- pip
- Git
- A modern web browser

### 1. Clone the Repository

```bash
git clone https://github.com/Poojasankannavar/Tic_Tac_Toe_AI.git
```

Navigate to the project directory:

```bash
cd Tic_Tac_Toe_AI
```

### 2. Create a Virtual Environment

**Windows:**

```bash
python -m venv .venv
.venv\Scripts\activate
```

**macOS/Linux:**

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Dependencies

If `requirements.txt` is available, install the dependencies:

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Flask is the primary application dependency. Gunicorn is used for production serving.

## ▶️ Running the Application

Start the Flask development server:

```bash
python app.py
```

Open the following address in your browser:

```text
http://127.0.0.1:5000
```

Select a difficulty level and play against the AI.

For production deployment, use Gunicorn if the Flask application object is named `app` in `app.py`:

```bash
gunicorn app:app
```

## 🧠 AI Algorithm

The Hard difficulty uses the **Minimax algorithm**, a recursive decision-making algorithm commonly used in two-player games.

Minimax evaluates possible future moves by considering the best outcomes for both players.

### How Minimax Works

1. Generate the available moves.
2. Simulate each possible move.
3. Check whether a move produces a win, loss, or draw.
4. Evaluate the resulting game states.
5. Choose the move with the best outcome for the AI, assuming the opponent also plays optimally.

### Why Minimax?

- Evaluates possible future game states.
- Supports optimal decisions in standard Tic-Tac-Toe.
- Does not require a trained machine learning model.
- Demonstrates search algorithms and adversarial decision-making.

**Note:** Minimax is a search algorithm, not a machine learning model. The AI's performance depends on the correctness of the implementation in `minimax.py`.

## 🚀 Deployment

The application can be deployed to a Python-compatible hosting platform.

### Deployment Checklist

- [ ] Push the project to GitHub.
- [ ] Include `requirements.txt`.
- [ ] Configure the build and start commands.
- [ ] Use Gunicorn for production serving.
- [ ] Verify Flask routes and static file paths.
- [ ] Test all three difficulty levels.
- [ ] Test win, loss, and draw conditions.
- [ ] Verify that the `/ai_move` endpoint handles board states correctly.
- [ ] Test the application in desktop and mobile browsers.

## 🔮 Future Improvements

- Add a restart-game button and improved game transitions.
- Improve the visual design with animations and sound effects.
- Add player-versus-player mode.
- Store scores across sessions.
- Add difficulty customization.
- Improve accessibility and mobile responsiveness.
- Add automated tests for the Minimax algorithm.
- Add a leaderboard for multiple players.
- Improve API validation and error handling.

## 👩‍💻 Author

**Pooja Sankannavar**

MCA Student | Full-Stack Developer | Software Development and AI Enthusiast

- **GitHub:** [@Poojasankannavar](https://github.com/Poojasankannavar)
- **LinkedIn:** [Pooja Sankannavar](https://www.linkedin.com/in/pooja-sankannavar-8751a0318/)
- **Repository:** [Tic_Tac_Toe_AI](https://github.com/Poojasankannavar/Tic_Tac_Toe_AI)

---

⭐ If you find this project interesting, consider giving the repository a star!

*Developed as a learning project exploring AI algorithms, Python, Flask, and interactive web development.*
