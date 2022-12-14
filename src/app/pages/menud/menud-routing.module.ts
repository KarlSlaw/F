import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenudPage } from './menud.page';

const routes: Routes = [
  {
    path: '',
    component: MenudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenudPageRoutingModule {}
