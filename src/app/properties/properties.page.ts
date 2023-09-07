import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../services/propiedades.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {
  propertyId: any;
  propertyDetails: any;
  images = [
    'https://img.lamudi.com.mx/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2NkYWE2NzAyLTc0OGEtMzA5NS1iYTBiLTMyYTE1NmU0MzdjNS82MWQ5ZGUzMy0zYTYxLTRjZTEtYjNlNi05NzI0OTgzNGY3YWEuanBnIiwiYnJhbmQiOiJMQU1VREkiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo2NTAsImZpdCI6ImNvdmVyIn19fQ==',
    'https://img.lamudi.com.mx/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2NkYWE2NzAyLTc0OGEtMzA5NS1iYTBiLTMyYTE1NmU0MzdjNS9hNmJiNmY4Ni0xMDM2LTQyNGEtYWYzYS01MzFmODQ3ZDUxZDkuanBnIiwiYnJhbmQiOiJMQU1VREkiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo2NTAsImZpdCI6ImNvdmVyIn19fQ==',
    'https://img.lamudi.com.mx/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2NkYWE2NzAyLTc0OGEtMzA5NS1iYTBiLTMyYTE1NmU0MzdjNS9hNjZiMDIwZS1iYTY0LTRmMTItYTM2ZC0yZjExMDAxMmM2OTcuanBnIiwiYnJhbmQiOiJMQU1VREkiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo2NTAsImZpdCI6ImNvdmVyIn19fQ==',
    // Agrega más rutas de imágenes según sea necesario
  ];
  ratingStars = ['star']; // Puntuación fija
  slideOpts = {
    initialSlide: 0, // Índice de la imagen inicial
    speed: 400, // Velocidad de deslizamiento
  };
  constructor(
    private route: ActivatedRoute,
    private propiedadesService: PropiedadesService) { }

    ngOnInit() {
      this.route.paramMap.subscribe((params) => {
        const idParam = params.get('id');
        this.propertyId = idParam ? +idParam : null;

        if (this.propertyId !== null && !isNaN(this.propertyId)) {
          // Ahora puedes continuar con el código para obtener los detalles de la propiedad
          this.propertyDetails = this.propiedadesService.propiedades.find(
            (propiedad) => propiedad.id === this.propertyId
          );
        } else {
          // Maneja el caso en el que el parámetro 'id' no sea un número válido o esté ausente en la URL
          console.error("El parámetro 'id' no es un número válido o no se encuentra en la URL.");
        }
      });
    }
  onDragItem(event: any) {
    const slidingItem = event.target as HTMLIonItemSlidingElement;
    const optionsContainer = slidingItem.querySelector('ion-item') as HTMLElement;
    optionsContainer.style.transform = "translate3d(-111px, 0px, 0px)"

  }
}
