import { Component } from '@angular/core';
import { Competition, Fixture } from '../models';
import { FootballService } from '../football.service';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Component({
    selector: "ns-test",
    moduleId: module.id,
    templateUrl: "./service-test.component.html",
})
export class ServiceTestComponent {

  constructor(private footballService: FootballService) {
  }

  getPLTable() {
    this.footballService.getLeagueTable(445)
    .catch(this.printError)
    .subscribe(this.print);
  }

  getPLTeams() {
    this.footballService.getTeams(445)
    .catch(this.printError)
    .subscribe(this.print);
  }

  getPLFixtures() {
    this.footballService.getFixtures(445, { timeFrame: 'p7' })
    .catch(this.printError)
    .subscribe(fixtures => {
      const fixturesEssential = fixtures.map((fix: Fixture) => {
        return { 
          homeTeam: fix.homeTeamName,
          awayTeam: fix.awayTeamName,
          date: fix.date,
          score: fix.result.goalsHomeTeam + ':' + fix.result.goalsAwayTeam
        }
      })

      this.print(fixturesEssential);
    });
  }

  getLiverpool() {
    this.footballService.getTeam(64)
    .catch(this.printError)
    .subscribe(this.print)
  }

  getLiverpoolPlayers() {
    this.footballService.getPlayers(64)
    .catch(this.printError)
    .subscribe(this.print);
  }

  getLiverpoolFixtures() {
    this.footballService.getTeamFixtures(64)
    .catch(this.printError)
    .subscribe(this.print);
  }

  print(item) {
    console.log(JSON.stringify(item, null, 2));
  }

  printError(error): ErrorObservable {
    console.log(JSON.stringify(error, null, 2));
    return Observable.throw(error);
  }
}
