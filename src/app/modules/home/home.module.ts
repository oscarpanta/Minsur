import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CanalIntegridadComponent } from './pages/canal-integridad/canal-integridad.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { ComunicadosComponent } from './pages/comunicados/comunicados.component';
import { EmisionesNetasComponent } from './pages/descripcion-produccion-responsable/emisiones-netas/emisiones-netas.component';
import { EnfoquePersonasComponent } from './pages/descripcion-produccion-responsable/enfoque-personas/enfoque-personas.component';
import { TrazabilidadComponent } from './pages/descripcion-produccion-responsable/trazabilidad/trazabilidad.component';
import { EconomiaCircularComponent } from './pages/produccion-responsable/economia-circular/economia-circular.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmisionesNetasGeneralComponent } from './pages/produccion-responsable/emisiones-netas-general/emisiones-netas-general.component';
import { EnfoquePersonasGeneralComponent } from './pages/produccion-responsable/enfoque-personas-general/enfoque-personas-general.component';


@NgModule({
  declarations: [
    CanalIntegridadComponent,
    ContenidoComponent,
    ComunicadosComponent,
    EmisionesNetasComponent,
    EnfoquePersonasComponent,
    TrazabilidadComponent,
    EconomiaCircularComponent,
    ContactanosComponent,
    TrabajaConNosotrosComponent,
    EmisionesNetasGeneralComponent,
    EnfoquePersonasGeneralComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
