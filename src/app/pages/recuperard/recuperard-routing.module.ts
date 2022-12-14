import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperardPage } from './recuperard.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperardPageRoutingModule {}
