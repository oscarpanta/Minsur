import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { AltaGerenciaComponent } from './pages/alta-gerencia/alta-gerencia.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';


@NgModule({
  declarations: [
    AltaGerenciaComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    QuienesSomosRoutingModule
  ]
})
export class QuienesSomosModule { }
