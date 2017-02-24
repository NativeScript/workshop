import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

//Lesson 1
import { ProfileComponent } from './profile/profile.component';

//Lesson 2
import { ColorComponent, BlueComponent, RedComponent, RGBComponent } from './navigation'

import { TestComponent } from './test/test.component';
import { FootballService } from './football.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        TestComponent,

        //Lesson 1
        ProfileComponent,

        //Lesson 2
        ColorComponent,
        BlueComponent,
        RedComponent,
        RGBComponent,

        //Lesson 3
    ],
    providers: [
        FootballService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
