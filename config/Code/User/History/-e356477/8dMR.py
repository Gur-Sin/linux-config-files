from PIL import Image
import numpy as np
import matplotlib.pyplot as plt

# img=Image.open('digits/1.1.png')
# image_array=np.array(img)

# print(image_array)
# plt.imshow(image_array)
# plt.show()

file = open("data.txt", "r")
lines = file.readlines()

# lines = "0::blahblah"

print(lines[0][3:])