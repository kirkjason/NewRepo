import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddModulePage } from './add-module.page';

const routes: Routes = [
  {
    path: '',
    component: AddModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddModulePageRoutingModule {}
