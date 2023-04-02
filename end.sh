#!/bin/bash
#Adding executable permissions to script
chmod +x start.sh

echo Killing both servers

# Killing frontend first 
echo Terminating React Vite frontend first
PID=$(lsof -t -i :5174)

# Terminate the process if it exists
if [ -n "$PID" ]; then
  echo "Killing process $PID"
  kill $PID
  echo Successfully killed frontend 
else
  echo "No process found on port 5174"
fi


#Killing backend
echo Terminating Django backend now
PID=$(lsof -t -i :8000)

# Terminate the process if it exists
if [ -n "$PID" ]; then
  echo "Killing process $PID"
  kill $PID
  echo Successfully killed backend
else
  echo "No process found on port 8000"
fi

exit 0

