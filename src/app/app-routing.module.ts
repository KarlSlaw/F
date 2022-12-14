import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'logind',
    loadChildren: () => import('./pages/logind/logind.module').then( m => m.LogindPageModule)
  },
  {
    path: 'logina',
    loadChildren: () => import('./pages/logina/logina.module').then( m => m.LoginaPageModule)
  },
  {
    path: 'menud',
    loadChildren: () => import('./pages/menud/menud.module').then( m => m.MenudPageModule)
  },
  {
    path: 'menua',
    loadChildren: () => import('./pages/menua/menua.module').then( m => m.MenuaPageModule)
  },
  {
    path: 'iregistrar',
    loadChildren: () => import('./pages/iregistrar/iregistrar.module').then( m => m.IregistrarPageModule)
  },
  {
    path: 'aregistrar',
    loadChildren: () => import('./pages/aregistrar/aregistrar.module').then( m => m.AregistrarPageModule)
  },
  {
    path: 'dregistrar',
    loadChildren: () => import('./pages/dregistrar/dregistrar.module').then( m => m.DregistrarPageModule)
  },
  {
    path: 'aramos/:id',
    loadChildren: () => import('./pages/aramos/aramos.module').then( m => m.AramosPageModule)
  },
  {
    path: 'pasis',
    loadChildren: () => import('./pages/pasis/pasis.module').then( m => m.PasisPageModule)
  },
  {
    path: 'dramos/:id',
    loadChildren: () => import('./pages/dramos/dramos.module').then( m => m.DramosPageModule)
  },
  {
    path: 'recuperara',
    loadChildren: () => import('./pages/recuperara/recuperara.module').then( m => m.RecuperaraPageModule)
  },
  {
    path: 'recuperard',
    loadChildren: () => import('./pages/recuperard/recuperard.module').then( m => m.RecuperardPageModule)
  },
  {
    path: 'qr1',
    loadChildren: () => import('./pages/qr1/qr1.module').then( m => m.Qr1PageModule)
  },
  {
    path: 'qr2',
    loadChildren: () => import('./pages/qr2/qr2.module').then( m => m.Qr2PageModule)
  },
  {
    path: 'qr3',
    loadChildren: () => import('./pages/qr3/qr3.module').then( m => m.Qr3PageModule)
  },
  {
    path: 'qr4',
    loadChildren: () => import('./pages/qr4/qr4.module').then( m => m.Qr4PageModule)
  },
  {
    path: 'qr5',
    loadChildren: () => import('./pages/qr5/qr5.module').then( m => m.Qr5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
