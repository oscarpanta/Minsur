import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-view-general',
  templateUrl: './info-view-general.component.html',
  styleUrls: ['./info-view-general.component.css']
})
export class InfoViewGeneralComponent {
  @Input() titulo1 : string = "";
  @Input() titulo2 : string = "";
  @Input() descripcion : string = "";
}
