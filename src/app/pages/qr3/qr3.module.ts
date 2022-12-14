import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qr3PageRoutingModule } from './qr3-routing.module';

import { Qr3Page } from './qr3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qr3PageRoutingModule
  ],
  declarations: [Qr3Page]
})
export class Qr3PageModule {}
