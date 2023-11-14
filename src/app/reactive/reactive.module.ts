import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveRoutingModule } from './reactive-routing.module';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DinamicPageComponent } from './pages/dinamic-page/dinamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    BasicPageComponent,
    DinamicPageComponent,
    SwitchesPageComponent
  ]
})
export class ReactiveModule { }
