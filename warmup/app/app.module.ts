import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { NativeScriptUIDataFormModule } from 'nativescript-pro-ui/dataform/angular';
import { NativeScriptHttpModule } from 'nativescript-angular/http';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';

//Lesson 1
import { ProfileComponent } from './profile/profile.component';

//Lesson 2
import { ColorComponent, BlueComponent, RedComponent, RGBComponent } from './color'

// Lesson 3
// import { FootballService } from './football.service';
import { ServiceTestComponent } from './service-test/service-test.component';
import { TablesComponent } from './football/tables.component';
import { LeagueTableComponent } from './football/league-table.component';
import { CompetitionFixturesComponent } from './football/competition-fixtures.component';
import { FixtureComponent } from './football/fixture.component';
import { TeamComponent } from './football/team.component';
import { PlayerComponent } from './football/player.component';

// Lesson 4
import { WizardProfileComponent } from './plugins/wizard-profile.component';


@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUIDataFormModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule
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
    TablesComponent,
    LeagueTableComponent,
    CompetitionFixturesComponent,
    FixtureComponent,
    TeamComponent,
    PlayerComponent,

    //Lesson 4
    WizardProfileComponent
  ],
  providers: [
    //Lesson 3
    // FootballService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
