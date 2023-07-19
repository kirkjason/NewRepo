import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditModulePageRoutingModule } from './edit-module-routing.module';

import { EditModulePage } from './edit-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditModulePageRoutingModule
  ],
  declarations: [EditModulePage]
})
export class EditModulePageModule {}
