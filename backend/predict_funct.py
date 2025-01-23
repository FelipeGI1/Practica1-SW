import shutil
import os
from moviepy.editor import VideoFileClip

def predict_image(model, image_path):
    path_predict = "runs/segment/predict"

    if os.path.exists(path_predict):
        shutil.rmtree(path_predict)

    model.predict(source=image_path, show=False, save=True, conf= 0.8,
                line_width=2, save_crop=False, save_txt=False, show_labels=False,
                show_conf=False, classes=[0], show_boxes=False)
    
def predict_video(model, video_path):
    path_predict = "runs/segment/predict"

    if os.path.exists(path_predict):
        shutil.rmtree(path_predict)

    results = model.predict(source=video_path, save=True, conf=0.8)
    
    video_filename = os.path.splitext(os.path.basename(video_path))[0] + ".avi"
    input_video_path = os.path.join(path_predict, video_filename)
    output_video_path = os.path.join(path_predict, f"{os.path.splitext(video_filename)[0]}.mp4")
    
    # Convert the predicted video to .mp4
    clip = VideoFileClip(input_video_path)
    clip.write_videofile(output_video_path, codec='libx264')
    
    # Remove the old .avi file
    os.remove(input_video_path)