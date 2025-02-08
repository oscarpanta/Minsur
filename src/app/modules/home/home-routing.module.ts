import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanalIntegridadComponent } from './pages/canal-integridad/canal-integridad.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { ComunicadosComponent } from './pages/comunicados/comunicados.component';
import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { EmisionesNetasComponent  as DescripcionEmisionesNetasComponent} from './pages/descripcion-produccion-responsable/emisiones-netas/emisiones-netas.component';
import { EnfoquePersonasComponent as DescripcionEnfoquePersonasComponent} from './pages/descripcion-produccion-responsable/enfoque-personas/enfoque-personas.component';
import { TrazabilidadComponent } from './pages/descripcion-produccion-responsable/trazabilidad/trazabilidad.component';
import { EconomiaCircularComponent } from './pages/produccion-responsable/economia-circular/economia-circular.component';
// import { EmisionesNetasComponent } from './pages/produccion-responsable/emisiones-netas/emisiones-netas.component';
import { EmisionesNetasGeneralComponent } from './pages/produccion-responsable/emisiones-netas-general/emisiones-netas-general.component';
import { EnfoquePersonasGeneralComponent } from './pages/produccion-responsable/enfoque-personas-general/enfoque-personas-general.component';

const routes: Routes = [
  { path: '', component: ContenidoComponent },

  { path: 'comunicados', component: ComunicadosComponent },
  { path: 'canal-integridad', component: CanalIntegridadComponent,data:{breadcrumb:'Canal Integridad'} },

  { path: 'contactanos', component: ContactanosComponent},

  { path: 'trabaja-con-nosotros', component: TrabajaConNosotrosComponent,data:{breadcrumb:'Trabaja con Nosotros'} },

  { path: 'descripcion-emisiones-netas', component: DescripcionEmisionesNetasComponent },

  { path: 'descripcion-enfoque-personas', component: DescripcionEnfoquePersonasComponent },

  { path: 'trazabilidad', component: TrazabilidadComponent },
  { path: 'economia-circular', component: EconomiaCircularComponent ,data:{breadcrumb:'Economia Circular'}},

  { path: 'emisiones-netas', component: EmisionesNetasGeneralComponent,data:{breadcrumb:'Emisiones Netas Cero'} },

  { path: 'enfoque-personas', component: EnfoquePersonasGeneralComponent,data:{breadcrumb:'Enfoque en personas'} },

  // { path: '', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
