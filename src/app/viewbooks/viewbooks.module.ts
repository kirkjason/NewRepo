import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewbooksPageRoutingModule } from './viewbooks-routing.module';

import { ViewbooksPage } from './viewbooks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewbooksPageRoutingModule,
  ],
  declarations: [ViewbooksPage],
})
export class ViewbooksPageModule {}




