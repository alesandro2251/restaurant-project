from django.shortcuts import render
from .serializers import ReservationSerializer
from .models import Reservation
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse


class ReservationView(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    
@api_view(['POST'])
def addStudent(request):
    serilizer = ReservationSerializer(data=request.data)

    if serilizer.is_valid():
        serilizer.save()

    return Response(serilizer.data)

@api_view(['GET'])
def get_reservation_data(request):
    reservations = Reservation.objects.all()
    data = list(reservations.values())
    return Response(data)



