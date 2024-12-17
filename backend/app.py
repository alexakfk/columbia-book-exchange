from flask import Flask, jsonify, request
from flask_cors import CORS
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

books_on_sale = []

with open('books.json','r') as f:
    data = json.load(f)
    books_on_sale = data

@app.route('/')
def home():
    return "Welcome to the Flask Backend!"

@app.route('/save_book', methods=['POST'])
def save_listing():
    data = request.get_json()
    if not data:
        return jsonify({'message': 'No data provided'}), 400
    books_on_sale.append(data)
    
    print(f"Listing saved: {data}")
    return jsonify({'message': 'Listing saved successfully', 'books_on_sale': books_on_sale}), 200

@app.route('/get_books', methods=['GET'])
def get_books():
    return jsonify({'books_on_sale': books_on_sale}), 200

if __name__ == '__main__':
    app.run(debug=True)