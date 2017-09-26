import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { ColorComponent, BlueComponent, RedComponent, RGBComponent } from './color'

const routes: Routes = [
  { path: '', redirectTo: '/color', pathMatch: 'full' },
  { path: 'color', children: [
    { path: '', component: ColorComponent },
    { path: 'blue', component: BlueComponent },
    //.. add red and rgb routes here
  ]},
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }