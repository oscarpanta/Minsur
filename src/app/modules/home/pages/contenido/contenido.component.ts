import { AfterViewInit, Component } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements AfterViewInit{
  private carousel!: any;

  ngAfterViewInit(): void {
    const carouselElement = document.getElementById('carouselExample');
    if (carouselElement) {
      this.carousel = new bootstrap.Carousel(carouselElement);
    }
  }

  goToSlide(index: number) {
    if (this.carousel) {
      this.carousel.to(index);
    }
  }
}
