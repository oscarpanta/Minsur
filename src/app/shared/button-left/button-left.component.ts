import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-left',
  templateUrl: './button-left.component.html',
  styleUrls: ['./button-left.component.css']
})
export class ButtonLeftComponent {
  @Input() link: string = '/';

  @Input() defaultBorderColor: string = '#0063f9';
  @Input() hoverBorderColor: string = '#7df900';

  @Input() defaultStrokeColor: string = '#0063f9';
  @Input() hoverStrokeColor: string = '#ffffff';

  @Input() label: string = 'Ver más';
  @Input() textColor: string = '#0063f9';
}
