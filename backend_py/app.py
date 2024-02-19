from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/skeleton-python-mongo"
mongo = PyMongo(app)

@app.route('/')
def ping():
    return 'python working'

@app.route('/items', methods=['GET'])
def get_items():
    items = mongo.db.crudCollection.find()
    result = [{'id': str(item['_id']), 'name': item['name']} for item in items]
    return jsonify(result)

@app.route('/add', methods=['POST'])
def add_item():
    data = request.json
    collection = mongo.db.crudCollection
    result = collection.insert_one(data)
    return jsonify({'result': str(result.inserted_id)})

@app.route('/update/<id>', methods=['PUT'])
def update_item(id):
    data = request.json
    collection = mongo.db.crudCollection
    result = collection.update_one({'_id': ObjectId(id)}, {'$set': data})
    return jsonify({'modified_count': result.modified_count})

@app.route('/delete/<id>', methods=['DELETE'])
def delete_item(id):
    collection = mongo.db.crudCollection
    result = collection.delete_one({'_id': ObjectId(id)})
    return jsonify({'deleted_count': result.deleted_count})
