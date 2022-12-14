import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AregistrarPageRoutingModule } from './aregistrar-routing.module';

import { AregistrarPage } from './aregistrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AregistrarPageRoutingModule
  ],
  declarations: [AregistrarPage]
})
export class AregistrarPageModule {}
