import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyInfoComponent } from './components/my-info/my-info.component';

const routes: Routes = [
  { path: 'myinfo', component: MyInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
