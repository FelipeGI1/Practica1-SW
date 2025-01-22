from flask import Flask, request, jsonify
from predict_funct import predict_image
import os
import shutil

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def clear_upload_folder():
    for filename in os.listdir(UPLOAD_FOLDER):
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print(f'Failed to delete {file_path}. Reason: {e}')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        clear_upload_folder()
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        predict_image(file_path)
        return jsonify({'message': 'Prediction completed', 'file_path': file_path}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)