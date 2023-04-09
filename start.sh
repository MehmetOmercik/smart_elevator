#!/bin/bash
# Script that starts both frontend and backend

#Adding executable permissions to script
# chmod +x start.sh

# Activate your virtual environment
echo Activating backend virtual environment
source backend/backend_venv/bin/activate

# Start Django backend server
cd backend
echo Starting Backend Server
python3 manage.py migrate
python3 manage.py runserver & sleep 2 &
open http://127.0.0.1:8000/systemconfig/1/

# Start React frontend server
echo Now Starting Frontend & sleep 2
cd ../frontend
npm run dev & open http://localhost:5173/

exit 0