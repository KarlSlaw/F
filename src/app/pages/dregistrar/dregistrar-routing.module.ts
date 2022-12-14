import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DregistrarPage } from './dregistrar.page';

const routes: Routes = [
  {
    path: '',
    component: DregistrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DregistrarPageRoutingModule {}
