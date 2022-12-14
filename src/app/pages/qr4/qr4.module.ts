import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qr4PageRoutingModule } from './qr4-routing.module';

import { Qr4Page } from './qr4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qr4PageRoutingModule
  ],
  declarations: [Qr4Page]
})
export class Qr4PageModule {}
