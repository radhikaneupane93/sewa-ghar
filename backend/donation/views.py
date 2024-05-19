from rest_framework import viewsets, status, generics
from .models import Donation, ClothBank
from users.models import CustomUser
from .serializers import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .add_cloth_banks import donation_banks_data
from django.http import HttpResponse
from rest_framework.decorators import action
from django.core.mail import send_mail

class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all().order_by('-donation_date')
    serializer_class = DonationSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request):
        print(request.data)
        serializer = self.serializer_class(data=request.data)
        

        if serializer.is_valid():
            serializer.save(donated_by = request.user)
            request.user.points += 10
            request.user.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticated])
    def create_donation(self, request):
        return self.create(request)

class DonationListView(generics.ListAPIView):
     queryset = Donation.objects.all().order_by('-id')
     serializer_class = DonationViewSerializer

class ClothBankViewSet(viewsets.ModelViewSet):
    queryset = ClothBank.objects.all()
    serializer_class = ClothBankSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def verify_donation(request):
    if request.method == 'POST':
        serializer = DonationVerificationSerializer(data=request.data)
        if serializer.is_valid():
            donation_id = serializer.validated_data.get('donation_id')
            new_status = serializer.validated_data.get('status')

            try:
                donation = Donation.objects.get(pk=donation_id)
            except Donation.DoesNotExist:
                return Response({"error": "Donation not found"}, status=status.HTTP_404_NOT_FOUND)

            # Check if the authenticated user has the role 'CLOTHBANKADMIN'
            if request.user.role != CustomUser.Role.CLOTHBANKADMIN:
                return Response({"error": "You do not have permission to verify donations"}, status=status.HTTP_403_FORBIDDEN)
            donated_by = donation.donated_by.email
            donated_to = donation.cloth_bank.title
            subject = f"Donation Verified {donated_to}"
            message = f"Dear {donation.donated_by.name},  Your cloth donation has been verified by {donated_to}.You are requested to bring your clothes within one week. If you encounter any issues, please contact us as soon as possible. "
            donation.status = new_status
            donation.save()
            try:
                send_mail(subject=subject, message=message,from_email="np03cs4s220226@heraldcollege.edu.np", recipient_list=[donated_by])
            except Exception as e:
                return Response({"error": f"{e}", "message": "Donation Verified Successfully"}, status=status.HTTP_200_OK)

            return Response({"message": "Email Sent. Donation verified successfully"}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def get_cloth_types(request):
        cloth_types = Donation.CLOTH_CHOICES
        return Response(cloth_types, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_cloth_banks(request):
        cloth_bank = ClothBank.objects.all()
        serializer = ClothBankDonationFormSerializer(cloth_bank, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


def populate_clothBank(request):
    data = donation_banks_data
    for i in data:
        clothBank = ClothBank.objects.create(
            title=i["title"],
            description=i["description"],
            latitude=i["latitude"],
            longitude=i["longitude"],
            address=i["address"],
            city=i["city"],
            phone_number=i["phone_number"]
        )
        clothBank.save()
    return HttpResponse("Cloth banks populated successfully", status=status.HTTP_201_CREATED)