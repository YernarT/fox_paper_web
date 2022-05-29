import cv2
import pandas as pd


def get_color_name(img_path, pos_x, pos_y):

    # img_path='static/picture1.jpg'
    csv_path='static/colors.csv'

    # reading csv file
    ind = ['color', 'color_name', 'hex_value', 'R', 'G', 'B']
    data = pd.read_csv(csv_path, names=ind, header=None)
    data.head()

    # reading image
    image = cv2.imread(img_path)        

    # pos_y, pos_x = 1000, 3000
    b, g, r=image[int(pos_y), int(pos_x)]
    b=int(b)
    g=int(g)
    r=int(r)

    minimum=1000
    for i in range(len(data)):
        d=abs(r-int(data.loc[i, 'R'])) + abs(g-int(data.loc[i, 'G']))+abs(b-int(data.loc[i, 'B']))
        if d <= minimum:
            minimum=d
            colorname=data.loc[i, 'color_name']
                
    return colorname, r, g, b