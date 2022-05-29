# CV version

#     # reading csv file
# ind = ['color', 'color_name', 'hex_value', 'R', 'G', 'B']
# data = pd.read_csv(csv_path, names=ind, header=None)
# data.head()

#     # reading image
# image = cv2.imread(img_path)
# image = cv2.resize(image, (800, 600))

#     # declaring global variables

# clicked = False
# r = g = b = xpos = ypos = 0

#     # function to calculate minimum distance from all colors and get the most matching color

# #function to calculate minimum distance from all colors and get the most matching color

# def get_color_name(R, G, B):
#     minimum=1000
#     for i in range(len(data)):
#         d=abs(R-int(data.loc[i, 'R'])) + abs(G-int(data.loc[i, 'G']))+abs(B-int(data.loc[i, 'B']))
#         if d <= minimum:
#             minimum=d
#             colorname=data.loc[i, 'color_name']
            
#     return colorname


#     # function to get x,y coordinates of mouse double click
#     # The program needs to display the picture.
#     # After the mouse is double-clicked, the program obtains the position of the mouse click,
#     # and through this position, obtains the pixel color information of this point, that is, the RGB value.
# def draw(event, x, y, flags, params):
#     if event == cv2.EVENT_LBUTTONDBLCLK:
#         global clicked, r, g, b, xpos, ypos
#         clicked=True
#         xpos=x
#         ypos=y
#         b, g, r=image[y, x]
#         b=int(b)
#         g=int(g)
#         r=int(r)



#     # creating window
# # creating window

# cv2.namedWindow('image')
# cv2.setMouseCallback('image', draw)

#     # Display text on images


# while True:
#     cv2.imshow('image', image)
#     if clicked:
#         cv2.rectangle(image, (20, 20), (600, 60), (b, g, r), -1)
#         text=get_color_name(r, g, b) + ' R=' + str(r) + ' G=' + str(g) +' B=' + str(b)
#         print(text)

#         cv2.putText(image, text, (50, 50), 2, 0.8, (255, 255, 255), 2, cv2.LINE_AA)
#         # If the color of the pixel is too white, use black to display the text
#         if r+g+b>=600:
#             cv2.putText(image, text, (50, 50), 2, 0.8, (0, 0, 0), 2, cv2.LINE_AA)
#       ## Hit esc to close      
#     if cv2.waitKey(20) & 0xFF==27:
#         break
        
# cv2.destroyAllWindows()
