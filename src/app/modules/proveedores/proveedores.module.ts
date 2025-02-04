import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    SharedModule
  ]
})
export class ProveedoresModule { }
