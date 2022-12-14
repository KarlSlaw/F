import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AregistrarPage } from './aregistrar.page';

const routes: Routes = [
  {
    path: '',
    component: AregistrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AregistrarPageRoutingModule {}
