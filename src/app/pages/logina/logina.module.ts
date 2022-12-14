import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginaPageRoutingModule } from './logina-routing.module';

import { LoginaPage } from './logina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginaPageRoutingModule
  ],
  declarations: [LoginaPage]
})
export class LoginaPageModule {}
