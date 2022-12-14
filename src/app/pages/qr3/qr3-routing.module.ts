import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qr3Page } from './qr3.page';

const routes: Routes = [
  {
    path: '',
    component: Qr3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qr3PageRoutingModule {}
