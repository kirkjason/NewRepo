import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditModulePage } from './edit-module.page';

const routes: Routes = [
  {
    path: '',
    component: EditModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditModulePageRoutingModule {}
