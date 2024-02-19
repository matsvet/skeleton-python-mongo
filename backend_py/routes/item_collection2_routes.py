from app import app, mongo
from flask import jsonify, request
from bson.objectid import ObjectId

@app.route('/second/items', methods=['GET'])
def second_get_items():
    items = mongo.db.crudCollection2.find()
    result = [{'id': str(item['_id']), 'name': item['name']} for item in items]
    return jsonify(result)

@app.route('/second/add', methods=['POST'])
def second_add_item():
    data = request.json
    collection = mongo.db.crudCollection2
    result = collection.insert_one(data)
    return jsonify({'result': str(result.inserted_id)})

@app.route('/second/add_many', methods=['POST'])
def second_add_many_items():
    data = request.json  # Получаем данные из тела запроса
    if not data or 'items' not in data:
        return jsonify({'error': 'Missing items'}), 400

    items_to_add = data['items']
    if not isinstance(items_to_add, list):
        return jsonify({'error': 'Items must be a list'}), 400
    
    collection = mongo.db.crudCollection2
    result = collection.insert_many(items_to_add)
    return jsonify({'inserted_ids': [str(id) for id in result.inserted_ids]})

@app.route('/second/update/<id>', methods=['PUT'])
def second_update_item(id):
    data = request.json
    collection = mongo.db.crudCollection2
    result = collection.update_one({'_id': ObjectId(id)}, {'$set': data})
    return jsonify({'modified_count': result.modified_count})

@app.route('/second/delete/<id>', methods=['DELETE'])
def second_delete_item(id):
    collection = mongo.db.crudCollection2
    result = collection.delete_one({'_id': ObjectId(id)})
    return jsonify({'deleted_count': result.deleted_count})

@app.route('/second/delete_many', methods=['POST'])
def second_delete_items():
    data = request.json  # Получаем данные из тела запроса
    if not data or 'ids' not in data:
        return jsonify({'error': 'Missing ids'}), 400
    
    ids_to_delete = data['ids']
    object_ids = [ObjectId(id) for id in ids_to_delete]  # Преобразование строк в ObjectId
    collection = mongo.db.crudCollection2
    result = collection.delete_many({'_id': {'$in': object_ids}})
    return jsonify({'deleted_count': result.deleted_count})
