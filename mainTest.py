import cv2
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np


model=load_model('BrainTumor10EpochsCategorical.h5')

image=cv2.imread('D:\\BrainTumor Classification DL\\uploads\\pred0.jpg')

img=Image.fromarray(image)

img=img.resize((64,64))

img=np.array(img)

input_img = np.expand_dims(img, axis=0)

predictions = model.predict(input_img)
result = np.argmax(predictions, axis=1)

print(result)




