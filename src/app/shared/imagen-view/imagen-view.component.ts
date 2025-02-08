import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-view',
  templateUrl: './imagen-view.component.html',
  styleUrls: ['./imagen-view.component.css']
})
export class ImagenViewComponent {
  @Input() backgroundImage: string = ''; // Imagen de fondo
  @Input() title: string = 'Quiénes Somos'; // Título
  @Input() description: string = ''; // Descripción
  @Input() videoLink: string = ''; // Link del video (solo si es modo video)
  @Input() videoThumbnail: string = ''; // Imagen del video o memoria/proveedores
  @Input() videoText: string = ''; // Imagen del video o memoria/proveedores

  @Input() mode: 'video' | 'memoria' | 'proveedores' = 'video'; // Define el tipo de contenido
  @Input() buttonText: string = ''; // Texto del botón (Descargar / Ingresa)
}
