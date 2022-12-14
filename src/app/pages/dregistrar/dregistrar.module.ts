import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DregistrarPageRoutingModule } from './dregistrar-routing.module';

import { DregistrarPage } from './dregistrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DregistrarPageRoutingModule
  ],
  declarations: [DregistrarPage]
})
export class DregistrarPageModule {}
