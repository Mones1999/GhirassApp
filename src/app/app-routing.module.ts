import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './user-pages/home-page/home-page.component';
import { MajorComponent } from './user-pages/major/major.component';
import { MaterialComponent } from './user-pages/material/material.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'major', component: MajorComponent},
  {path: 'material', component: MaterialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
