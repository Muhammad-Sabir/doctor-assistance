from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import UserSerializer
from .models import User

class Login(APIView):
    def get(self, request):
        try:
            user_obj = User.objects.get(email=request.GET.get('email'), password=request.GET.get('password'))
            serialized_user = UserSerializer(user_obj)
            
            return Response({"message": serialized_user.data})
        except User.DoesNotExist:
            return Response({"message": "Invalid email or password."})
            