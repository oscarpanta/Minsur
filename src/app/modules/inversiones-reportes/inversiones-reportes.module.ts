import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InversionesReportesRoutingModule } from './inversiones-reportes-routing.module';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContenidoComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    InversionesReportesRoutingModule,
    SharedModule
  ]
})
export class InversionesReportesModule { }
