import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';

import { ProfileComponent } from './profile/profile.component';
import { ColorComponent, BlueComponent, RedComponent, RGBComponent } from './color';

import { ServiceTestComponent } from './service-test/service-test.component';
import { CocktailsComponent } from './cocktail/cocktails/cocktails.component';
import { SearchComponent } from './cocktail/search/search.component';
import { RecipeComponent } from './cocktail/recipe/recipe.component';

import { WizardProfileComponent } from './plugins/wizard-profile.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,

        // NativeScriptFormsModule,
        NativeScriptHttpClientModule,

        NativeScriptUIDataFormModule
    ],
    declarations: [
        AppComponent,

        //Lesson 1
        ProfileComponent,

        //Lesson 2
        ColorComponent,
        BlueComponent,
        RedComponent,
        RGBComponent,

        //Lesson 3
        // Services
        ServiceTestComponent,
        // Components
        CocktailsComponent,
        SearchComponent,
        RecipeComponent,

        //Lesson 4
        WizardProfileComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
