import { Component } from '@angular/core';
import { Fixture } from '../models';
import { FootballService } from '../football.service';
import { Observable, throwError } from 'rxjs';

@Component({
    selector: 'ns-test',
    moduleId: module.id,
    templateUrl: './service-test.component.html',
})
export class ServiceTestComponent {

  constructor(private footballService: FootballService) {
  }

  getPLTable() {
    this.footballService.getLeagueTable(445)
    .subscribe(
      leagueTable => this.printData(leagueTable),
      error => this.printError(error)
    );
  }

  getPLTeams() {
    this.footballService.getTeams(445)
    .subscribe(
      teams => this.printData(teams),
      error => this.printError(error)
    );
  }

  getPLFixtures() {
    this.footballService.getFixtures(445, { timeFrame: 'p7' })
    .subscribe(
      fixtures => {
        const fixturesEssential = fixtures.map((fix: Fixture) => {
          return { 
            homeTeam: fix.homeTeamName,
            awayTeam: fix.awayTeamName,
            date: fix.date,
            score: fix.result.goalsHomeTeam + ':' + fix.result.goalsAwayTeam
          }
        })

        this.printData(fixturesEssential);
      },
      error => this.printError(error)
    );
  }

  getLiverpool() {
    this.footballService.getTeam(64)
    .subscribe(
      team => this.printData(team),
      error => this.printError(error)
    );
  }

  getLiverpoolPlayers() {
    this.footballService.getPlayers(64)
    .subscribe(
      players => this.printData(players),
      error => this.printError(error)
    );
  }

  getLiverpoolFixtures() {
    this.footballService.getTeamFixtures(64)
    .subscribe(
      fixtures => this.printData(fixtures),
      error => this.printError(error)
    );
  }

  printData(item) {
    console.log(JSON.stringify(item, null, 2));
  }

  printError(error): Observable<never> {
    console.log(JSON.stringify(error, null, 2));
    return throwError(error);
  }
}
