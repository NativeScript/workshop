import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { TestComponent } from './test/test.component';

// Lesson 1
import { ProfileComponent } from './profile/profile.component';

// Lesson 2
import { ColorComponent, BlueComponent, RedComponent, RGBComponent } from './navigation'

// Lesson 3
import { TablesComponent } from './football/tables.component';
import { CompetitionFixturesComponent } from './football/competition-fixtures.component';
import { LeagueTableComponent } from './football/league-table.component';
import { TeamComponent } from './football/team.component';

const routes: Routes = [
    // { path: '', redirectTo: '/profile', pathMatch: 'full' },
    // { path: '', redirectTo: '/color', pathMatch: 'full' },
    { path: '', redirectTo: '/football', pathMatch: 'full' },
    { path: 'test', component: TestComponent },

    // Lesson 1
    { path: 'profile', component: ProfileComponent },

    // Lesson 2
    { path: 'color', children: [
        { path: '', component: ColorComponent },
        { path: 'blue', component: BlueComponent },
        // exercise
        { path: 'red', component: RedComponent },
        { path: ':rgb', component: RGBComponent },
    ]},

    // Lesson 3
    { path: 'football', children: [
        { path: '', component: TablesComponent },
        { path: 'fixtures/:competitionId/:competitionName', component: CompetitionFixturesComponent },
        { path: 'team/:teamId', component: TeamComponent }
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }