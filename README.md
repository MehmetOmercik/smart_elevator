# Smart Elevator Program

## Description

This program utilises both React frontend and Django backend to establish a basic dynamic setup of elevator controls.
There are still some bugs that need ironing out but the program is functional.

## Setup

### NEW: Docker method

I have now successfully dockerized the application so both Mac, Linux and Windows users can easily deploy and close the application with basic commands. To use Docker, you will first need to have Docker Desktop installed on your laptop. Click the link here if you need to install it:\
https://www.docker.com/products/docker-desktop/

After the installation is complete, simply follow the next steps.\
<b>Note</b>: Make sure you don't have any other applications running on localhost:8000 or localhost:5173 otherwise the applications won't start properly.

1. Go to the root directory and type "docker-compose up --build". This will build the image and run the applications. You can now skip to the "How to Use" section to find out how to play with the applications but read the steps for additional docker info.

2. To shut down the containers just press CTRL+C in the terminal.

3. To remove the containers run "docker-compose down".

4. If you ever want to start the containers again and have already done step one before AND you haven't deleted the docker images then just type "docker-compose up" to restart the containers again. This is much faster because you don't need to build the image again.

### Mac And Linux

For Mac and Linux users, I have created a set of bash scripts that can be used to easily setup the project.

1. Download or git clone the project onto your computer (git clone https://github.com/mems22/smart_elevator.git)

2. Type "bash build.sh" into the integrated terminal to build both frontend and backend environments

3. Now run "bash start.sh" to run both ports

4. To close BOTH ports, first press Control+C in the terminal then run "bash end.sh" (control+c normally shuts the ports down but in this instance, it doesnt for django
   so I created the script to shut both down just incase)

### Windows

Unfortunately, I have not had the time to make the bash script compatible for Windows users yet so for now, you will have to manually run the
commands

1. Once again download or git clone the project.

#### <ins>Backend</ins>

2. For backend, go to the directory by typing "cd backend"

3. Create a virtual environment using "python -m venv {name_of_venv}"

4. Activate the virtual environment: "source {name_of_venv}\Scripts\activate"

5. Install dependancies: "pip install -r requirements.txt"

6. Migrate tables: "python manage.py migrate"

7. Run the server: "python manage.py runserver"

#### <ins>Frontend</ins>

8. Now in a separate terminal go to the frontend directory: "cd frontend"

9. Install dependancies: "npm install"

10: Run frontend server: "npm run dev"

## How to use

#### <ins>Frontend</ins>

Visit http://localhost:5173/ to interact with the frontend application.

Simply press the lift buttons and the floor number aswell as the arrow direction colour should update depending on the button clicked. I will
add more features later on...

#### <ins>Backend</ins>

Visit http://127.0.0.1:8000/elevator/ (Note, if you changed the port numbers when running the server you need to alter the url link to include it)
to see the list of elevators being used.

Visit http://127.0.0.1:8000/systemconfig/1/ to view and configure the system parameters. You must reload the frontend page to see the results.

## Testing

#### <ins>Frontend</ins>

Go to the frontend directory (cd frontend) and type "npm test" or "yarn test". You can also do npx vitest --ui to get the vitest User Interface to display the tests (http://localhost:51204/\_\_vitest\_\_/)

#### <ins>Backend</ins>

Go to the Backend directory, activate the backend virtual environment and run "pytest" into the command line interface. To display any print messages, type "pytest -rP".

## Reset

To reset the repo, for MacOS and Linux run "bash destroy.sh" in the terminal in the root directory.

For Windows, in the frontend simply delete node_modules and for the backend delete db.sqlite3 and the backend virtual environment.
