import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qr5Page } from './qr5.page';

const routes: Routes = [
  {
    path: '',
    component: Qr5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qr5PageRoutingModule {}
