import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  animations: [
    trigger('expandArrow', [
      state('normal', style({ width: '20px' })), // Estado inicial
      state('expanded', style({ width: '50px' })), // Estado final
      transition('normal <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class ButtonComponent {
  isHovered = false;
}
