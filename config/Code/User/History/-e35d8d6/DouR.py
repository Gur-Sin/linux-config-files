from number_recognition import NumberRecognizer
import inspect
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt


#0:: [[[255,255,255,]]]
'''print(image_array)
plt.imshow(image_array)
plt.show()
'''

# for i in range(0, 10):
#     for j in range(1, 10):
#         img=Image.open('digits/{}.{}.png'.format(i,j))
#         image_array=np.array(img)

#         imageL=image_array.tolist()
#         imageLtoStr=str(imageL)

#         with open('data.txt', 'a') as file:
#             file.write('{}::{}\n'.format(i,imageLtoStr))

num = NumberRecognizer.recognize('digits/0.1.png')

print(f"the number is {num}")

inspect.getsource(NumberRecognizer)