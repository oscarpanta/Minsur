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
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.forceWhiteBackground =
          event.url.startsWith('/home/') ||
          event.url.startsWith('/noticias/') ||
          event.url.startsWith('/quienes-somos/') ||
          event.url.startsWith('/que-hacemos/') ||
          event.url.startsWith('/sostenibilidad/') ||
          event.url.startsWith('/inversiones-reportes/') ||
          event.url.startsWith('/proveedores/') ||
          ['/noticias'].includes(event.url);

        this.isScrolled = this.forceWhiteBackground;
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
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
