import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],

})
export class ButtonComponent {
  @Input() link: string = '/';
  @Input() defaultBorderColor: string = '#0063f9';
  // @Input() hoverBorderColor: string = '#7df900';
  @Input() defaultStrokeColor: string = '#0063f9';
  @Input() hoverStrokeColor: string = '#ffffff';
  @Input() label: string = 'Ver más';
  @Input() textColor: string = '#0063f9';
}
