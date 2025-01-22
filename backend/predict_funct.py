import shutil
import os
from ultralytics import YOLO

def predict_image(image_path):
    path_predict = "runs/segment/predict"

    if os.path.exists(path_predict):
        shutil.rmtree(path_predict)

    model = YOLO("yolo11m-seg-custom.pt")
    model.predict(source=image_path, show=False, save=True, conf= 0.8,
                line_width=2, save_crop=False, save_txt=False, show_labels=False,
                show_conf=False, classes=[0], show_boxes=False)
    
def predict_video(video_path):
    path_predict = "runs/segment/predict2"

    if os.path.exists(path_predict):
        shutil.rmtree(path_predict)

    model = YOLO("yolo11m-seg-custom.pt")
    results = model.predict(source=video_path, save=True, conf=0.8)