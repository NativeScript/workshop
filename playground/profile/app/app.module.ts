import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";

import { NativeScriptUIDataFormModule } from 'nativescript-pro-ui/dataform/angular';
// import { NativeScriptUIDataFormModule } from 'nativescript-telerik-ui-pro/dataform/angular';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptUIDataFormModule,
        // NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ProfileComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
