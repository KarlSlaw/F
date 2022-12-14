import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginaPage } from './logina.page';

const routes: Routes = [
  {
    path: '',
    component: LoginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginaPageRoutingModule {}
