from rest_framework import viewsets, status, generics
from .models import Donation, ClothBank
from users.models import CustomUser
from .serializers import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .add_cloth_banks import donation_banks_data
from django.http import HttpResponse
from django.core.mail import send_mail
from rest_framework.renderers import JSONRenderer


class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all().order_by('-donation_date')
    serializer_class = DonationSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(donated_by=request.user)
            # request.user.points += 10
            request.user.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

            donated_by = donation.donated_by
            donated_to = donation.cloth_bank
            number_of_clothes = donation.no_of_clothes

            # total_numberOfdonations = donated_to.total_numberOfdonations
            # total_numberOfclothes = donated_to.total_numberOfclothes
            if new_status.upper() == 'ACCEPTED':
                
                donated_by.points += (10*number_of_clothes)
                donated_to.total_numberOfdonations += 1
                donated_to.total_numberOfclothes += number_of_clothes
                
                donation.status = new_status
                donation.save()
                donated_by.save()  # Ensure user points are saved
                donated_to.save()
                subject = f"Donation Verified by {donated_to.title}"
                message = (
                            f"Dear {donation.donated_by.name},\n\n"
                            f"Your cloth donation has been verified by {donated_to.title}.\n\n"
                            f"Congratulations! You have earned 10 rewards points  per clothes ons your donation, which makes your total points {donation.donated_by.points}.\n"
                            f"Keep Donating!\n\n"
                            f"Best regards,\n"
                            f"{donated_to.title} Team"
                          )
                try:
                    send_mail(
                        subject=subject,
                        message=message,
                        from_email="np03cs4s220226@heraldcollege.edu.np",
                        recipient_list=[donated_by.email]
                    )
                except Exception as e:
                    return Response({"error": f"{e}", "message": "Donation Verified Successfully"}, status=status.HTTP_200_OK)

                return Response({"message": "Email Sent. Donation verified successfully"}, status=status.HTTP_200_OK)

            elif new_status.upper() == 'REJECTED':
                donation.status = new_status
                donation.save()
                subject = f"Donation rejected by {donated_to.title}"
                message = (
                            f"Dear {donation.donated_by.name},\n\n"
                            f"Your cloth donation has been rejected by {donated_to.title} due to various circumstances.\n\n"
                            f"We apologize for any inconvenience this may have caused.\n\n"
                            f"Best regards,\n"
                            f"{donated_to.title} Team"
                         )
                try:
                    send_mail(
                        subject=subject,
                        message=message,
                        from_email="np03cs4s220226@heraldcollege.edu.np",
                        recipient_list=[donated_by.email]
                    )
                except Exception as e:
                    return Response({"error": f"{e}", "message": "Donation Rejected!"}, status=status.HTTP_200_OK)

                return Response({"message": "Email Sent. Donation rejected successfully"}, status=status.HTTP_200_OK)
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

@api_view(['GET'])
def get_all_clothbanks(request):
    cloth_bank = ClothBank.objects.all()
    serializer = ClothBankSerializer(cloth_bank, many=True)
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