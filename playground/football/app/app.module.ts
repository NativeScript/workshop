import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { FootballService } from './football.service';
import { ServiceTestComponent } from './service-test/service-test.component';
import { TablesComponent } from './football/tables.component';
import { LeagueTableComponent } from './football/league-table.component';
import { CompetitionFixturesComponent } from './football/competition-fixtures.component';
import { FixtureComponent } from './football/fixture.component';
import { TeamComponent } from './football/team.component';
import { PlayerComponent } from './football/player.component';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,

        ServiceTestComponent,

        TablesComponent,
        LeagueTableComponent,
        CompetitionFixturesComponent,
        FixtureComponent,
        TeamComponent,
        PlayerComponent
    ],
    providers: [
        FootballService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
