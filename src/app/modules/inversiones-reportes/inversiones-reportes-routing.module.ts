import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { ReportesComponent } from './pages/reportes/reportes.component';

const routes: Routes = [
    { path: '', component: ContenidoComponent },

    { path: 'reportes', component: ReportesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InversionesReportesRoutingModule { }
