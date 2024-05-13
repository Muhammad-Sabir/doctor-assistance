# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status

# from .serializers import UserSerializer
# from .models import User

# class Login(APIView):
#     def post(self, request):
#         try:
#             user_obj = User.objects.get(email=request.data.get('email'), password=request.data.get('password'))
#             serialized_user = UserSerializer(user_obj)
            
#             return Response({"message": serialized_user.data}, status=status.HTTP_200_OK)
#         except User.DoesNotExist:
#             return Response({"message": "Invalid email or password."}, status=status.HTTP_400_BAD_REQUEST)
#         except Exception as e:
#             return Response({"message": "An error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            