import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewteacherPage } from './viewteacher.page';

const routes: Routes = [
  {
    path: '',
    component: ViewteacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewteacherPageRoutingModule {}
