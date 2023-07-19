import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewteacherPageRoutingModule } from './viewteacher-routing.module';

import { ViewteacherPage } from './viewteacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewteacherPageRoutingModule
  ],
  declarations: [ViewteacherPage]
})
export class ViewteacherPageModule {}
