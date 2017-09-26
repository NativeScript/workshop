import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { ServiceTestComponent } from './service-test/service-test.component';
import { TablesComponent } from './football/tables.component';
import { CompetitionFixturesComponent } from './football/competition-fixtures.component';
import { TeamComponent } from './football/team.component';


const routes: Routes = [
  // { path: '', redirectTo: '/service-test', pathMatch: 'full' },
  { path: '', redirectTo: '/football', pathMatch: 'full' },
  { path: 'service-test', component: ServiceTestComponent },
  { path: 'football', children: [
    { path: '', component: TablesComponent },
    { path: 'fixtures/:competitionId/:competitionName', component: CompetitionFixturesComponent },
    { path: 'team/:teamId', component: TeamComponent }
  ]},
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }