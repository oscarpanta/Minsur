import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { SanRafaelComponent } from './pages/unidades/san-rafael/san-rafael.component';
import { PiscoComponent } from './pages/unidades/pisco/pisco.component';
import { PucamarcaComponent } from './pages/unidades/pucamarca/pucamarca.component';

const routes: Routes = [
        { path: '', component: ContenidoComponent },

        { path: 'san-rafael', component: SanRafaelComponent },
        { path: 'pisco', component: PiscoComponent },

        { path: 'pucamarca', component: PucamarcaComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueHacemosRoutingModule { }
