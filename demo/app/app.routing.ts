import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { TestComponent } from './test/test.component';
import { PetSearchComponent } from './pet-search/pet-search.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

const routes: Routes = [
    // { path: "", redirectTo: "/test", pathMatch: "full" },
    { path: "", redirectTo: "/petsearch", pathMatch: "full" },
    { path: "test", component: TestComponent },
    { path: "petsearch", children: [
        { path: '', component: PetSearchComponent },
        { path: ':id', component: PetDetailsComponent }
    ]},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }