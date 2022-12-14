import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperardPageRoutingModule } from './recuperard-routing.module';

import { RecuperardPage } from './recuperard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperardPageRoutingModule
  ],
  declarations: [RecuperardPage]
})
export class RecuperardPageModule {}
