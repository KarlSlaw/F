import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qr5PageRoutingModule } from './qr5-routing.module';

import { Qr5Page } from './qr5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qr5PageRoutingModule
  ],
  declarations: [Qr5Page]
})
export class Qr5PageModule {}
