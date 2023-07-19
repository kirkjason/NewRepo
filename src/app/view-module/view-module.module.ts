import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewModulePageRoutingModule } from './view-module-routing.module';

import { ViewModulePage } from './view-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewModulePageRoutingModule
  ],
  declarations: [ViewModulePage]
})
export class ViewModulePageModule {}
