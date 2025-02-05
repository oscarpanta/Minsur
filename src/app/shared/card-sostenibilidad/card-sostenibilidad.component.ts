import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-sostenibilidad',
  templateUrl: './card-sostenibilidad.component.html',
  styleUrls: ['./card-sostenibilidad.component.css']
})
export class CardSostenibilidadComponent {
  @Input() cards: { title: string, text: string, image: string,route:string }[] = [];
}
