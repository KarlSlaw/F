import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperaraPage } from './recuperara.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperaraPageRoutingModule {}
