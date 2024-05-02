from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Request
from .serializers import RequestSerializer

class RequestFormView(APIView):
    def post(self, request):
        serializer = RequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Request submitted successfully!'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
