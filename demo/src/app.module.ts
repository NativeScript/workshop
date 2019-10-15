import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { TestComponent } from './test/test.component';
import { SelectModalComponent } from './select-modal/select-modal.component';
import { PetSearchComponent } from './pet-search/pet-search.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetResultsComponent } from './pet-results/pet-results.component';
import { PetFavoritesComponent } from './pet-favorites/pet-favorites.component';

import { SelectModalService } from './select-modal.service';
import { PetFinderService, API_KEY_TOKEN } from 'petfinder-angular-service';

import { PetStorageService } from './pet-storage.service';

//fonts
import {TNSFontIconModule } from 'nativescript-ngx-fonticon';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        }),
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        SelectModalComponent,
        TestComponent,
        PetSearchComponent,
        PetDetailsComponent,
        PetResultsComponent,
        PetFavoritesComponent
    ],
    entryComponents: [
        SelectModalComponent
    ],
    providers: [
        SelectModalService,
        PetFinderService,
        PetStorageService,
        { provide: API_KEY_TOKEN, useValue: 'your_api_key_here' },
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
