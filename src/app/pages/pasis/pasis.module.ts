import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasisPageRoutingModule } from './pasis-routing.module';

import { PasisPage } from './pasis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasisPageRoutingModule
  ],
  declarations: [PasisPage]
})
export class PasisPageModule {}
