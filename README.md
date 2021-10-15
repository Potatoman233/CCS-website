## create virtual environment (env is the name of virtaul env)
python -m venv env

## activate virtual env (use this everytime before running python server)
env\Scripts\activate 

## check the virtual environment (not necessary)
import sys
print(sys.excutable)

## install all django libraries in project 
pip install -r requirements.txt

## run the web app dev server (run this after activate virtual env for backend)
python manage.py runserver

## import models to database (if changes are made in models)
python manage.py makemigrations
python manage.py migrate

## create superuser for backend
python manage.py createsuperuser

## open new terminal
## install all reactjs packages from package.json
cd mymfrontend
npm install 

## run reactjs app (run this everytime for frontend)
cd mymfrontend
npm start
