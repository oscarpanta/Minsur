import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueHacemosRoutingModule } from './que-hacemos-routing.module';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { PiscoComponent } from './pages/unidades/pisco/pisco.component';
import { PucamarcaComponent } from './pages/unidades/pucamarca/pucamarca.component';
import { SanRafaelComponent } from './pages/unidades/san-rafael/san-rafael.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ContenidoComponent,
    PiscoComponent,
    PucamarcaComponent,
    SanRafaelComponent
  ],
  imports: [
    CommonModule,
    QueHacemosRoutingModule,
    SharedModule
  ]
})
export class QueHacemosModule { }
