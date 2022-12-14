import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasisPage } from './pasis.page';

const routes: Routes = [
  {
    path: '',
    component: PasisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasisPageRoutingModule {}
