import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/core/intefaces/noticias.intefaces';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.css']
})
export class CardNoticiasComponent {
  @Input() titleNoticias: boolean = true;

  @Input() hoverClass: string = 'hover-card-underline';

  @Input() noticias: Noticia[] = [];

  @Input() displayCount: number = 3;

  get displayedNoticias(): Noticia[] {
    return this.noticias.slice(0, this.displayCount);
  }
}
