from app import app, mongo
from flask import jsonify, request
from bson.objectid import ObjectId

@app.route('/third/items', methods=['GET'])
def get_products():
    products = mongo.db.products.find()
    result = [
        {
            'id': str(product['_id']),
            'name': product['name'],
            'price': product['price'],
            'availability': product.get('availability', False),
            'attributes': product.get('attributes', {}),
            'categories': product.get('categories', []), # массив объектов
        } for product in products
    ]
    return jsonify(result)

@app.route('/third/add', methods=['POST'])
def add_product():
    data = request.json
    # Здесь можно добавить валидацию данных
    collection = mongo.db.products
    result = collection.insert_one(data)
    return jsonify({'result': str(result.inserted_id)})
    
# @app.route('/third/add_many', methods=['POST'])
# def second_add_many_items():
#     data = request.json  # Получаем данные из тела запроса
#     if not data or 'items' not in data:
#         return jsonify({'error': 'Missing items'}), 400

#     items_to_add = data['items']
#     if not isinstance(items_to_add, list):
#         return jsonify({'error': 'Items must be a list'}), 400
    
#     collection = mongo.db.crudCollection2
#     result = collection.insert_many(items_to_add)
#     return jsonify({'inserted_ids': [str(id) for id in result.inserted_ids]})

@app.route('/third/update/<id>', methods=['PUT'])
def update_product(id):
    data = request.json
    # Здесь можно добавить валидацию данных
    collection = mongo.db.products
    result = collection.update_one({'_id': ObjectId(id)}, {'$set': data})
    return jsonify({'modified_count': result.modified_count})

@app.route('/third/delete/<id>', methods=['DELETE'])
def delete_product(id):
    collection = mongo.db.products
    result = collection.delete_one({'_id': ObjectId(id)})
    return jsonify({'deleted_count': result.deleted_count})

# @app.route('/third/delete_many', methods=['POST'])
# def second_delete_items():
#     data = request.json  # Получаем данные из тела запроса
#     if not data or 'ids' not in data:
#         return jsonify({'error': 'Missing ids'}), 400
    
#     ids_to_delete = data['ids']
#     object_ids = [ObjectId(id) for id in ids_to_delete]  # Преобразование строк в ObjectId
#     collection = mongo.db.crudCollection2
#     result = collection.delete_many({'_id': {'$in': object_ids}})
#     return jsonify({'deleted_count': result.deleted_count})
