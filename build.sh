#!/bin/bash
#Adding executable permissions to script
chmod +x start.sh



#Build Backend first
cd backend

# Creating your virtual environment 
echo Creating Virtual Environment
python3 -m venv backend_venv

#Activating it
source backend_venv/bin/activate

#Download requirements
echo Installing Dependancies
pip3 install -r requirements.txt

echo Migrating files
python3 manage.py migrate

#Building Frontend Now
cd ../frontend

echo Now Installing dependancies for frontend
npm install

exit 0