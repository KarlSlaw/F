import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DramosPage } from './dramos.page';

const routes: Routes = [
  {
    path: '',
    component: DramosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DramosPageRoutingModule {}
