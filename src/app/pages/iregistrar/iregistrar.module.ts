import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IregistrarPageRoutingModule } from './iregistrar-routing.module';

import { IregistrarPage } from './iregistrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IregistrarPageRoutingModule
  ],
  declarations: [IregistrarPage]
})
export class IregistrarPageModule {}
