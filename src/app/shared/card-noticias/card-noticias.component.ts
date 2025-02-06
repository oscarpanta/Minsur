import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.css']
})
export class CardNoticiasComponent {
  @Input() titleNoticias : boolean=true
  @Input() hoverClass: string = 'hover-card-underline'; // Clase por defecto
}
