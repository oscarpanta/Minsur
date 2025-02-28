import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-view',
  templateUrl: './imagen-view.component.html',
  styleUrls: ['./imagen-view.component.css']
})
export class ImagenViewComponent {
  @Input() backgroundImage: string = '';
  @Input() title: string = 'Quiénes Somos';
  @Input() description: string = '';
  @Input() videoLink: string = '';
  @Input() videoThumbnail: string = '';
  @Input() videoText: string = '';

  @Input() mode: 'video' | 'memoria' | 'proveedores' = 'video';
  @Input() buttonText: string = '';
}
