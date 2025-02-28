import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produccion-responsable',
  templateUrl: './card-produccion-responsable.component.html',
  styleUrls: ['./card-produccion-responsable.component.css']
})
export class CardProduccionResponsableComponent {
  @Input()
  descripcion: boolean = true;
  cardRadius: string = "";
}
