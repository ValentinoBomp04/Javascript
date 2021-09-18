from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/proyecto-ai' 
mongo = PyMongo(app)

CORS(app)

db = mongo.db.users
#Creo usuarios
@app.route('/usuarios', methods=['POST'])
def c_usuarios():
    id = db.insert({
        'Name': request.json['Name'],
        'Email': request.json['Email'],
        'Password': request.json['Password']
    })
    
    return jsonify(str(ObjectId(id)))
#Obtengo los usuarios creados
@app.route('/usuarios', methods=['GET'])
def ob_usuarios():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'Name': doc['Name'],
            'Email': doc['Email'],
            'Password': doc['Password'],
        })
    
    return jsonify(users)
#Obtengo un usuario
@app.route('/usuario/<id>', methods=['GET'])
def ob_usuario(id):
    user = db.find_one({'_id': ObjectId(id)})
    print (user)
    
    return jsonify({
        '_id': str(ObjectId(user['_id'])),
         'Name': user['Name'],
         'Email': user['Email'],
         'Password': user['Password'],
    })
#Elimino un usuario
@app.route('/usuarios/<id>', methods=['DELETE'])
def del_usuarios(id):
    db.delete_one({'_id': ObjectId(id)})

    return jsonify({'msg':'Usuario eliminado'})

if __name__ == '__main__':
    app.run(debug=True)