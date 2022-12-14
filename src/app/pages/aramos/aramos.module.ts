import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AramosPageRoutingModule } from './aramos-routing.module';

import { AramosPage } from './aramos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AramosPageRoutingModule
  ],
  declarations: [AramosPage]
})
export class AramosPageModule {}
