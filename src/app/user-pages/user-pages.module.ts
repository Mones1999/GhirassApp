import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserPagesRoutingModule } from './user-pages-routing.module';
import { MajorComponent } from './major/major.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialComponent } from './material/material.component';


@NgModule({
  declarations: [
    MajorComponent,
    MaterialComponent,
  ],
  imports: [
    CommonModule,
    UserPagesRoutingModule,
    FontAwesomeModule
  ]
})
export class UserPagesModule { }
