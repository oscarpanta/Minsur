import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueHacemosRoutingModule } from './que-hacemos-routing.module';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { PiscoComponent } from './pages/unidades/pisco/pisco.component';
import { PucamarcaComponent } from './pages/unidades/pucamarca/pucamarca.component';
import { SanRafaelComponent } from './pages/unidades/san-rafael/san-rafael.component';


@NgModule({
  declarations: [
    ContenidoComponent,
    PiscoComponent,
    PucamarcaComponent,
    SanRafaelComponent
  ],
  imports: [
    CommonModule,
    QueHacemosRoutingModule
  ]
})
export class QueHacemosModule { }
