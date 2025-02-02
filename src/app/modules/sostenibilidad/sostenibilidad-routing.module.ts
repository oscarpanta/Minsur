import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { AguaBiodiversidadComponent } from './pages/agua-biodiversidad/agua-biodiversidad.component';
import { CuidadoAmbientalComponent } from './pages/cuidado-ambiental/cuidado-ambiental.component';
import { DerechosHumanosComponent } from './pages/derechos-humanos/derechos-humanos.component';
import { EmisionesEnergiaComponent } from './pages/emisiones-energia/emisiones-energia.component';
import { EticaCumplimientoComponent } from './pages/etica-cumplimiento/etica-cumplimiento.component';
import { GobernanzaResponsableComponent } from './pages/gobernanza-responsable/gobernanza-responsable.component';
import { RelevosComponent } from './pages/relevos/relevos.component';
import { SeguridadSaludComponent } from './pages/seguridad-salud/seguridad-salud.component';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { ComunidadComponent } from './pages/valor-compartido/comunidad/comunidad.component';
import { GestionProveedoresComponent } from './pages/valor-compartido/gestion-proveedores/gestion-proveedores.component';
import { TalentoComponent } from './pages/valor-compartido/talento/talento.component';

const routes: Routes = [
        { path: '', component: ContenidoComponent },

        { path: 'agua-diversidad', component: AguaBiodiversidadComponent },
        { path: 'cuidado-ambiental', component: CuidadoAmbientalComponent },

        { path: 'derechos-humanos', component: DerechosHumanosComponent },
        { path: 'emisiones-energia', component: EmisionesEnergiaComponent },

        { path: 'etica-cumplimiento', component: EticaCumplimientoComponent },

        { path: 'gobernanza-responsable', component: GobernanzaResponsableComponent },

        { path: 'relevos', component: RelevosComponent },
        { path: 'seguridad-salud', component: SeguridadSaludComponent },

        { path: 'transparencia', component: TransparenciaComponent },

        { path: 'comunidad', component: ComunidadComponent },

        { path: 'gestion-proveedores', component: GestionProveedoresComponent },

        { path: 'talento', component: TalentoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SostenibilidadRoutingModule { }
