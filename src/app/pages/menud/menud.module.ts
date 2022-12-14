import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenudPageRoutingModule } from './menud-routing.module';

import { MenudPage } from './menud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenudPageRoutingModule
  ],
  declarations: [MenudPage]
})
export class MenudPageModule {}
