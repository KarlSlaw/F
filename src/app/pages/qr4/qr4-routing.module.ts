import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qr4Page } from './qr4.page';

const routes: Routes = [
  {
    path: '',
    component: Qr4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qr4PageRoutingModule {}
