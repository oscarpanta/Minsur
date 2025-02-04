import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { AltaGerenciaComponent } from './pages/alta-gerencia/alta-gerencia.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AltaGerenciaComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    QuienesSomosRoutingModule,
    SharedModule
  ]
})
export class QuienesSomosModule { }
