import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewModulePage } from './view-module.page';

const routes: Routes = [
  {
    path: '',
    component: ViewModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewModulePageRoutingModule {}
