import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewbooksPage } from './viewbooks.page';

const routes: Routes = [
  {
    path: '',
    component: ViewbooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewbooksPageRoutingModule {}
