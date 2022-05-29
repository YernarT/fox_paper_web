from django.views.generic import View
from django.http import JsonResponse
from django.shortcuts import render

from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings

from os import path as os_path
from logic import get_color_name


class IndexView(View):

    def get(self, request):
        # get_color_name('static/picture1.jpg', 1, 1)

        return render(request, 'index.html')

    
    def post(self, request):

        image = request.FILES['image']
        pos_x, pos_y = request.POST['pos_x'], request.POST['pos_y']
        img_path = default_storage.save(f'image/{image.name}', ContentFile(image.read()))
        img_path = os_path.join(settings.MEDIA_ROOT, img_path)
        
        color_name, r, g, b = get_color_name(img_path, pos_x, pos_y)

        return JsonResponse({'color_name': color_name, 'r': r, 'g': g, 'b': b}, status=200)

    