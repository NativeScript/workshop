import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';

import { ProfileComponent } from './profile/profile.component';
import { ColorComponent, BlueComponent, RedComponent, RGBComponent } from './color';

import { ServiceTestComponent } from './service-test/service-test.component';
import { CocktailsComponent } from './cocktail/cocktails/cocktails.component';
import { CocktailItemComponent } from './cocktail/cocktail-item/cocktail-item.component';
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

        NativeScriptFormsModule,
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
        CocktailItemComponent,
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
