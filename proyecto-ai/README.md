# Javascript
Proyecto basado en la creacion de una aplicacion web la cual tenga algunas funciones como (por ahora): la transformacion de un valor en celcius a fahrenheit, y futuramente con otras funciones que sean capaces de utilizar redes neuronales para cumplir tareas.

Para realizar este proyecto hay dos aplicaciones: BackEnd(Python: Flask) y FrontEnd(React); las cuales se interconectan y almacenan datos en Mongodb.

En la carpeta "Video-Tut", esta el Back y Front end de un tutotial de youtube que me sirvio como base para realizar este proyecto.
Enlace al video: "https://www.youtube.com/watch?v=D1W8H4Rkb9A&list=LL&index=1"

Procedimiento
Archivos a instalar:
En el Backend:
pip install virtualenv
virtualenv venv ("Para hacer la carpeta donde va a estar el entorno virtual")
.\venv\Scripts\activate.bat
pip install flask Flask-PyMongo flask-cors
Para iniciar el servicio: Python [direccion del archivo]
En el Frontend:
npx create-react-app app
npm i react-router-dom bootswatch
Para iniciar el servicio: npm start 

    

