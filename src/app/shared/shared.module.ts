import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    ButtonComponent  // ✅ Declarar el botón aquí
  ],
  imports: [
    CommonModule  // ✅ Importar CommonModule
  ],
  exports: [
    ButtonComponent  // ✅ Exportar el botón para que otros módulos lo usen
  ]
})
export class SharedModule { }
