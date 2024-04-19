from rest_framework import viewsets, status
from .models import Donation, ClothBank
from .serializers import DonationSerializer, ClothBankSerializer, ClothBankDonationFormSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from .clothbank import donation_banks_data
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse


class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save(donated_by = request.user)

            request.user.points += 10
            request.user.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ClothBankViewSet(viewsets.ModelViewSet):
    queryset = ClothBank.objects.all()
    serializer_class = ClothBankSerializer

@api_view(['GET'])
def get_cloth_types(request):
    cloth_types = Donation.CLOTH_CHOICES
    return Response(cloth_types,status=status.HTTP_200_OK)

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
            latitude=i["latitude"],
            longitude=i["longitude"],
            address=i["address"],
            city=i["city"],
            phone_number=i["phone_number"]
        )
        clothBank.save()
    return HttpResponse("Cloth banks populated successfully", status=status.HTTP_201_CREATED)

        
    