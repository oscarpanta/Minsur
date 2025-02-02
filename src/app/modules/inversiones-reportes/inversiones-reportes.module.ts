import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InversionesReportesRoutingModule } from './inversiones-reportes-routing.module';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { ReportesComponent } from './pages/reportes/reportes.component';


@NgModule({
  declarations: [
    ContenidoComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    InversionesReportesRoutingModule
  ]
})
export class InversionesReportesModule { }
