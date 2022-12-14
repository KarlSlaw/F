import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaraPageRoutingModule } from './recuperara-routing.module';

import { RecuperaraPage } from './recuperara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaraPageRoutingModule
  ],
  declarations: [RecuperaraPage]
})
export class RecuperaraPageModule {}
