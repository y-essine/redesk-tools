from django.http import HttpResponse
from rest_framework.response import Response


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.", status=200)

