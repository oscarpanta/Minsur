import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { AltaGerenciaComponent } from './pages/alta-gerencia/alta-gerencia.component';

const routes: Routes = [
          { path: '', component: ContenidoComponent ,
        }
          ,

          { path: 'alta-gerencia', component: AltaGerenciaComponent,
          },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuienesSomosRoutingModule { }
