import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      { path: 'quienes-somos', loadChildren: () => import('./modules/quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule) },
      { path: 'sostenibilidad', loadChildren: () => import('./modules/sostenibilidad/sostenibilidad.module').then(m => m.SostenibilidadModule) },
      { path: 'noticias', loadChildren: () => import('./modules/noticias/noticias.module').then(m => m.NoticiasModule) },
      { path: 'inversiones-reportes', loadChildren: () => import('./modules/inversiones-reportes/inversiones-reportes.module').then(m => m.InversionesReportesModule) },
      { path: 'proveedores', loadChildren: () => import('./modules/proveedores/proveedores.module').then(m => m.ProveedoresModule) },
      { path: 'que-hacemos', loadChildren: () => import('./modules/que-hacemos/que-hacemos.module').then(m => m.QueHacemosModule) },

      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
