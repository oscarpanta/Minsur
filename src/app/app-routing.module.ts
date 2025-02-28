import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),   data: { breadcrumb: 'Inicio' } },
      { path: 'quienes-somos', loadChildren: () => import('./modules/quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule),  data: { breadcrumb: 'Quiénes Somos' } },
      { path: 'sostenibilidad', loadChildren: () => import('./modules/sostenibilidad/sostenibilidad.module').then(m => m.SostenibilidadModule), data: { breadcrumb: 'Sostenibilidad' } },
      { path: 'noticias', loadChildren: () => import('./modules/noticias/noticias.module').then(m => m.NoticiasModule) },
      { path: 'inversiones-reportes', loadChildren: () => import('./modules/inversiones-reportes/inversiones-reportes.module').then(m => m.InversionesReportesModule),data: { breadcrumb: 'Inversiones y reportes' } },
      { path: 'proveedores', loadChildren: () => import('./modules/proveedores/proveedores.module').then(m => m.ProveedoresModule) },
      { path: 'que-hacemos', loadChildren: () => import('./modules/que-hacemos/que-hacemos.module').then(m => m.QueHacemosModule),data:{breadcrumb:'Que hacemos'} },

      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
