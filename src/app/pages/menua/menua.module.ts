import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuaPageRoutingModule } from './menua-routing.module';

import { MenuaPage } from './menua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuaPageRoutingModule
  ],
  declarations: [MenuaPage]
})
export class MenuaPageModule {}
