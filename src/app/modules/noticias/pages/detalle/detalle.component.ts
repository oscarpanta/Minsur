import { Component } from '@angular/core';
import { Noticia } from 'src/app/core/intefaces/noticias.intefaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
noticias: Noticia[] = [
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
      title: 'Minsur es la primera empresa peruana en ser reconocida por el prestigioso Shingo',
      link: '/noticias/detalle/3'
    },
  ];
}
