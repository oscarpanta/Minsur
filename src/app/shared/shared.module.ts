import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ImagenViewComponent } from './imagen-view/imagen-view.component';
import { CardProduccionResponsableComponent } from './card-produccion-responsable/card-produccion-responsable.component';
import { CardNoticiasComponent } from './card-noticias/card-noticias.component';
import { InfoViewGeneralComponent } from './info-view-general/info-view-general.component';
import { CardSostenibilidadComponent } from './card-sostenibilidad/card-sostenibilidad.component';
import { RouterModule } from '@angular/router';
import { CardPresentacionesComponent } from './card-presentaciones/card-presentaciones.component';
import { CardUnidadesComponent } from './card-unidades/card-unidades.component';


@NgModule({
  declarations: [
    ButtonComponent,
    ImagenViewComponent,
    CardProduccionResponsableComponent,
    CardNoticiasComponent,
    InfoViewGeneralComponent,
    CardSostenibilidadComponent,
    CardPresentacionesComponent,
    CardUnidadesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    ImagenViewComponent,
    CardProduccionResponsableComponent,
    CardNoticiasComponent,
    InfoViewGeneralComponent,
    CardSostenibilidadComponent,
    CardPresentacionesComponent,
    CardUnidadesComponent
  ]
})
export class SharedModule { }
