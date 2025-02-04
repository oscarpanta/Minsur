import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SostenibilidadRoutingModule } from './sostenibilidad-routing.module';
import { AguaBiodiversidadComponent } from './pages/agua-biodiversidad/agua-biodiversidad.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
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
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AguaBiodiversidadComponent,
    ContenidoComponent,
    CuidadoAmbientalComponent,
    DerechosHumanosComponent,
    EmisionesEnergiaComponent,
    EticaCumplimientoComponent,
    GobernanzaResponsableComponent,
    RelevosComponent,
    SeguridadSaludComponent,
    TransparenciaComponent,
    ComunidadComponent,
    GestionProveedoresComponent,
    TalentoComponent
  ],
  imports: [
    CommonModule,
    SostenibilidadRoutingModule,
    SharedModule
  ]
})
export class SostenibilidadModule { }
