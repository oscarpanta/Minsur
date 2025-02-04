import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ImagenViewComponent } from './imagen-view/imagen-view.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ImagenViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ImagenViewComponent
  ]
})
export class SharedModule { }
