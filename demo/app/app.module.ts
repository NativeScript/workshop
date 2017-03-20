import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";

import { TestComponent } from './test/test.component';
import { SelectModalComponent } from './select-modal/select-modal.component';
import { PetSearchComponent } from './pet-search/pet-search.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetResultsComponent } from './pet-results/pet-results.component';
import { PetFavoritesComponent } from './pet-favorites/pet-favorites.component';

import { SelectModalService } from './select-modal.service';
import { PetFinderService } from './pet-finder.service';
import { PetStorageService } from './pet-storage.service';

//fonts
import {TNSFontIconModule, TNSFontIconService, TNSFontIconPipe, TNSFontIconPurePipe} from 'nativescript-ngx-fonticon';

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
        NativeScriptHttpModule,
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
        PetStorageService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
