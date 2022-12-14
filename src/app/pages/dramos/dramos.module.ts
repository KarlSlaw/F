import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DramosPageRoutingModule } from './dramos-routing.module';

import { DramosPage } from './dramos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DramosPageRoutingModule
  ],
  declarations: [DramosPage]
})
export class DramosPageModule {}
