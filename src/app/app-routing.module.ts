import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'aboutme', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
