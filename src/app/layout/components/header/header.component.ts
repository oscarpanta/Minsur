import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  isScrolled = false;

  forceWhiteBackground = false;

  isMenuOpen = false;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Rutas donde el header debe tener fondo blanco desde el inicio
        // const whiteBackgroundRoutes = ['/noticias', '/home/trabaja-con-nosotros','/home/contactanos'];

        // this.forceWhiteBackground = whiteBackgroundRoutes.includes(event.url);
            // Verificamos si la URL empieza con "/home/" o es una de las rutas específicas
    // this.forceWhiteBackground = event.url.startsWith('/home/') || ['/noticias'].includes(event.url);
    this.forceWhiteBackground = event.url.startsWith('/home/') || event.url.startsWith('/noticias/') ||  event.url.startsWith('/quienes-somos/')
    || event.url.startsWith('/sostenibilidad/') ||  event.url.startsWith('/inversiones-reportes/')  || event.url.startsWith('/proveedores/')   ;

        this.isScrolled = this.forceWhiteBackground; // Si la ruta coincide, aplicamos el fondo blanco
      }
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    // this.isScrolled = window.scrollY > 50;
    if (!this.forceWhiteBackground) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  eliminarCinta() {
    const cinta = document.querySelector('.p-cinta');
    if (cinta) {
      cinta.remove();
    }
  }
  closeMenu() {
    this.isMenuOpen = false;
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
    }
}
