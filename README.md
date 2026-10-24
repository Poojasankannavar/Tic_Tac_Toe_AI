# Tic-Tac-Toe AI

A small Flask web app where you play X against an AI that plays O. Easy chooses random moves, Medium mixes random and optimal moves, and Hard uses minimax.

## Run on Windows

From this project directory, create and activate the virtual environment, then install the dependencies:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python app.py
```

Open http://127.0.0.1:5000. Keep the terminal open while playing; press Ctrl+C to stop the server.

If PowerShell blocks activation, run the environment's Python directly:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe app.py
```

## Run on macOS or Linux

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python app.py
```

The app uses Flask's built-in development server. Do not expose that server directly to the public internet.
