import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
      { path: '', component: ContenidoComponent },

      { path: 'detalle:id', component: DetalleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
