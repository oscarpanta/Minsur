import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-reporte',
  templateUrl: './button-reporte.component.html',
  styleUrls: ['./button-reporte.component.css'],

})
export class ButtonReporteComponent {
  @Input() link: string = '/';
  @Input() defaultBorderColor: string = '#0063f9';
  @Input() hoverBorderColor: string = '#7df900';
  @Input() defaultStrokeColor: string = '#0063f9';
  @Input() hoverStrokeColor: string = '#ffffff';
  @Input() label: string = 'ver más';
  @Input() textColor: string = '#0063f9';
}
