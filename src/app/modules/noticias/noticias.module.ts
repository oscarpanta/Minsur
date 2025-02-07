import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    ContenidoComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    SharedModule
],
schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class NoticiasModule { }
