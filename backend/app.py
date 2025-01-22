from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from predict_funct import predict_image, predict_video
import os
import shutil

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
PREDICT_FOLDER = 'runs/segment/predict'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PREDICT_FOLDER, exist_ok=True)

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
        predict_image_path = os.path.join(PREDICT_FOLDER, file.filename)
        return jsonify({
            'message': 'Prediction completed',
            'original_image': f'/uploads/{file.filename}',
            'predicted_image': f'/runs/segment/predict/{file.filename}'
        }), 200

@app.route('/predict_video', methods=['POST'])
def predict_video_route():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        clear_upload_folder()
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        predict_video(file_path)
        predict_video_path = os.path.join("runs/segment/predict2", file.filename)
        return jsonify({
            'message': 'Prediction completed',
            'original_video': f'/uploads/{file.filename}',
            'predicted_video': f'/runs/segment/predict2/{file.filename}'
        }), 200

@app.route('/runs/segment/predict2/<filename>')
def predicted_video_file(filename):
    return send_from_directory("runs/segment/predict2", filename)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/runs/segment/predict/<filename>')
def predicted_file(filename):
    return send_from_directory(PREDICT_FOLDER, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)