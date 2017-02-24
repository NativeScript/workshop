import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { TestComponent } from './test/test.component';

// Lesson 1
import { ProfileComponent } from './profile/profile.component';

// Lesson 2
import { ColorComponent, BlueComponent, RedComponent, RGBComponent } from './navigation'

const routes: Routes = [
    // { path: '', redirectTo: '/profile', pathMatch: 'full' },
    { path: '', redirectTo: '/color', pathMatch: 'full' },
    { path: 'test', component: TestComponent },

    // Lesson 1
    { path: 'profile', component: ProfileComponent },

    //Lesson 2
    { path: 'color', children: [
        { path: '', component: ColorComponent },
        { path: 'blue', component: BlueComponent },
        // exercise
        { path: 'red', component: RedComponent },
        { path: ':rgb', component: RGBComponent },
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }