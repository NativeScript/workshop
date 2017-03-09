import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { PetSearchComponent } from './pet-search/pet-search.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetResultsComponent } from './pet-results/pet-results.component';

const routes: Routes = [
    { path: '', component: PetSearchComponent, pathMatch: 'full'},
    { path: 'test', component: TestComponent },
    //{ path: '', component: TestComponent, pathMatch: 'full' },
    
    { path: 'petresults', children: [
        { path: '', component: PetResultsComponent },
        { path: ':id', component: PetDetailsComponent }
    ]},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }