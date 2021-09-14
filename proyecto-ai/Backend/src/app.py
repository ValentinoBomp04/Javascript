from flask import Flask, request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/proyecto-ai' 
mongo = PyMongo(app)

db = mongo.db.client

@app.route('/')
def index():
    print (request.json)
    return '<p> Recibido</p>'

if __name__ == '__main__':
    app.run(debug=True)