from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)

CORS(app, 
     resources={
         r"/api/get_book_listings": { 
             "origins": ["http://localhost:3001"] 
             }
        }, 
     supports_credentials=True)

book_listings = []

with open('book_listings.json','r') as f:
    book_listings = json.load(f)

@app.route('/')
def home():
    return "Welcome to the Flask Backend!"

@app.route('/api/get_book_listings', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_book_listings():
    response = jsonify(book_listings)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3001')
    return response, 200

# @app.route('/api/data', methods=['GET'])
# def get_data():
#     data = {"message": "Hello from Flask API"}
#     return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)