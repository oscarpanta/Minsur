import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { DetalleComponent } from './pages/detalle/detalle.component';


@NgModule({
  declarations: [
    ContenidoComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }
