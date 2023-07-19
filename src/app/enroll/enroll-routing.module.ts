import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollPage } from './enroll.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollPageRoutingModule {}
