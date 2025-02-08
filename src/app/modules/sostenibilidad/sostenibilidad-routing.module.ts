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

        { path: 'agua-diversidad', component: AguaBiodiversidadComponent,data:{breadcrumb:'Agua y Biodiversidad'} },
        { path: 'cuidado-ambiental', component: CuidadoAmbientalComponent,data:{breadcrumb:'Cuidado Ambiental'} },

        { path: 'derechos-humanos', component: DerechosHumanosComponent,data:{breadcrumb:'Derechos Humanos'} },
        { path: 'emisiones-energia', component: EmisionesEnergiaComponent,data:{breadcrumb:'Emisiones y Energia'} },

        { path: 'etica-cumplimiento', component: EticaCumplimientoComponent,data:{breadcrumb:'Ética y Cumplimiento'} },

        { path: 'gobernanza-responsable', component: GobernanzaResponsableComponent,data:{breadcrumb:'Gobernanza Responsable'} },

        { path: 'relaves', component: RelevosComponent,data:{breadcrumb:'Relaves'} },
        { path: 'seguridad-salud', component: SeguridadSaludComponent,data:{breadcrumb:'Seguridad y Salud'} },

        { path: 'transparencia', component: TransparenciaComponent,data:{breadcrumb:'Transparencia'} },

        { path: 'comunidad', component: ComunidadComponent,data:{breadcrumb:'Comunidad'} },

        { path: 'gestion-proveedores', component: GestionProveedoresComponent,data:{breadcrumb:'Proveedores'} },

        { path: 'talento', component: TalentoComponent,data:{breadcrumb:'Talento'} },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SostenibilidadRoutingModule { }
