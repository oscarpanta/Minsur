import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ContenidoComponent } from './pages/contenido/contenido.component';


@NgModule({
  declarations: [
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule
  ]
})
export class ProveedoresModule { }
