import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/core/intefaces/noticias.intefaces';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.css']
})
export class CardNoticiasComponent {
  @Input() titleNoticias: boolean = true;

  @Input() hoverClass: string = 'hover-card-underline';

  @Input() overflowClass: string = '';


  @Input() noticias: Noticia[] = [];

  @Input() displayCount: number = 3;
  @Input() paginacionActiva: boolean = false;
  @Input() itemsPorPagina: number = 6;
  currentPage: number = 1;

  get totalPages(): number {
    if (this.paginacionActiva) {
      return Math.ceil(this.noticias.length / this.itemsPorPagina);
    }
    return 1;
  }
  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  // get displayedNoticias(): Noticia[] {
  //   return this.noticias.slice(0, this.displayCount);
  // }
  get displayedNoticias(): Noticia[] {
    if (!this.paginacionActiva) {
      return this.noticias.slice(0, this.displayCount);
    }

    const startIndex = (this.currentPage - 1) * this.itemsPorPagina;
    return this.noticias.slice(startIndex, startIndex + this.itemsPorPagina);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  goToPage(page: number) {
    this.currentPage = page;
  }
}
