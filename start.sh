#!/bin/bash
#Adding executable permissions to script
chmod +x start.sh

# Activate your virtual environment
echo Activating virtual environment
source backend/backend_venv/bin/activate

# Start Django backend server
cd backend
echo Starting Backend Server
python3 manage.py runserver & sleep 5

# Start React frontend server
echo Now Starting Frontend
cd ../frontend
npm run dev

exit 0