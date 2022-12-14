import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuaPage } from './menua.page';

const routes: Routes = [
  {
    path: '',
    component: MenuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuaPageRoutingModule {}
