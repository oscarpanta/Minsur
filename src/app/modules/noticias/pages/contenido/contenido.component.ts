import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements AfterViewInit{
 @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;
  noticias = [
    { img: 'assets/images/noticia_principal.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
    { img: 'assets/images/multimedia_galeria_princ.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
    { img: 'assets/images/noticia_principal.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
    { img: 'assets/images/noticia_principal.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
    { img: 'assets/images/noticia_principal.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
    { img: 'assets/images/noticia_principal.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
  ];
  videos = [
    {
      description: "Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo Institute.",
      thumbnail: "assets/images/quienes-somos.png",
      duration: "3:45",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_1"
    },
    {
      description: "Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo Institute",
      thumbnail: "assets/images/sostenibilidad.png",
      duration: "4:20",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_2"
    },
    {
      description: "Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo Institute",
      thumbnail: "assets/images/quienes-somos.png",
      duration: "3:45",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_1"
    },
    {
      description: "Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo Institute",
      thumbnail: "assets/images/sostenibilidad.png",
      duration: "4:20",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_2"
    }
  ];
  ngAfterViewInit() {
    if (this.swiperEl && this.swiperEl.nativeElement) {
      this.swiperEl.nativeElement.initialize();
    }
  }
  moverDerecha() {
    if (this.swiperEl && this.swiperEl.nativeElement && this.swiperEl.nativeElement.swiper) {
      this.swiperEl.nativeElement.swiper.slideNext();
    }
  }
  verVideo(url: string) {
    window.open(url, "_blank");
  }
}
