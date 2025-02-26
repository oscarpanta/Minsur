import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-descargar',
  templateUrl: './button-descargar.component.html',
  styleUrls: ['./button-descargar.component.css'],

})
export class ButtonDescargaComponent {
  @Input() link: string = '/';
  @Input() defaultBorderColor: string = '#0063f9';
  @Input() hoverBorderColor: string = '#7df900';
  @Input() defaultStrokeColor: string = '#0063f9';
  @Input() hoverStrokeColor: string = '#ffffff';
  @Input() label: string = 'descargar';
  @Input() textColor: string = '#0063f9';
}
