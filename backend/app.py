from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def home():
    return "Welcome to the Flask Backend!"

# @app.route('/api/data', methods=['GET'])
# def get_data():
#     data = {"message": "Hello from Flask API"}
#     return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)