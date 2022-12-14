import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AramosPage } from './aramos.page';

const routes: Routes = [
  {
    path: '',
    component: AramosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AramosPageRoutingModule {}
