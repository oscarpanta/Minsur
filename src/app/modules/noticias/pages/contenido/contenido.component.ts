import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Noticia } from 'src/app/core/intefaces/noticias.intefaces';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements AfterViewInit{
 @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;

  noticiasCard: Noticia[] = [
     {
       image: 'assets/images/noticia1.png',
       date: 'Junio, 2024',
       title: 'Clínica móvil Minsur ha realizado más de 2,500 atenciones en Antauta y Ajoyani',
       link: '/noticias/detalle/1'
     },
     {
       image: 'assets/images/noticia2.png',
       date: 'Mayo, 2024',
       title: 'Formamos parte de índice de sostenibilidad de la BVL y S&P Dow Jones',
       link: '/noticias/detalle/2'
     },
     {
       image: 'assets/images/noticia3.png',
       date: 'Abril, 2024',
       title: 'Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo Institute',
       link: '/noticias/detalle/3'
     },
     {
       image: 'assets/images/noticia1.png',
       date: 'Junio, 2024',
       title: 'Clínica móvil Minsur ha realizado más de 2,500 atenciones en Antauta y Ajoyani',
       link: '/noticias/detalle/1'
     },
     {
       image: 'assets/images/noticia2.png',
       date: 'Mayo, 2024',
       title: 'Formamos parte de índice de sostenibilidad de la BVL y S&P Dow Jones',
       link: '/noticias/detalle/2'
     },
     {
       image: 'assets/images/noticia3.png',
       date: 'Abril, 2024',
       title: 'Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo Institute',
       link: '/noticias/detalle/3'
     },
     // ...más noticias
   ];

  noticias = [
    { img: 'assets/images/personal_mineria_3.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
    { img: 'assets/images/emisiones_netas.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
    { img: 'assets/images/personal_mineria2.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
    { img: 'assets/images/personal_mineria2.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
    { img: 'assets/images/personal_mineria2.png', title: 'Minsur es la primera empresa peruana en ser reconocida por.' },
  ];
  videos = [
    {
      description: "Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo Institute.",
      thumbnail: "assets/images/carrousel/quienes.png",
      duration: "3:45",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_1"
    },
    {
      description: "Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo Institute",
      thumbnail: "assets/images/emisiones_netas.png",
      duration: "4:20",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_2"
    },
    {
      description: "Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo Institute",
      thumbnail: "assets/images/trabaja_nosotros2.png",
      duration: "3:45",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_1"
    },
    {
      description: "Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo Institute",
      thumbnail: "assets/images/carrousel/quienes.png",
      duration: "4:20",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_2"
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
