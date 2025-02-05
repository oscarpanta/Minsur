import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements AfterViewInit{
  @ViewChild('header') header!: ElementRef;
  headerHeight: number = 0;

  ngAfterViewInit() {
      this.updateHeaderHeight();
  }

  updateHeaderHeight() {
    const headerElement = document.querySelector('header') as HTMLElement;
    if (headerElement) {
      this.headerHeight = headerElement.offsetHeight;
      console.log('Altura del header:', this.headerHeight); // Para verificar en consola
    }
  }

}
