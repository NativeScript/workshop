import { Component } from '@angular/core';
import { Competition } from '../models';
import { FootballService } from '../football.service';

@Component({
    selector: "ns-test",
    moduleId: module.id,
    templateUrl: "./service-test.component.html",
})
export class ServiceTestComponent {

  constructor(private footballService: FootballService) {
  }

  getCompetitions() {
    this.footballService.getCompetitions()
    .then(competitions => this.print(competitions))
    .catch(this.printError);
  }

  getPLCompetition() {
    this.footballService.getCompetition(426)
    .then(this.print)
    .catch(this.printError);
  }

  getPLTable() {
    this.footballService.getLeagueTable(426)
    .then(this.print)
    .catch(this.printError);
  }

  getPLTeams() {
    this.footballService.getTeams(426)
    .then(this.print)
    .catch(this.printError);
  }

  getPLFixtures() {
    this.footballService.getFixtures(426, { timeFrame: 'n7' })
    .then(this.print)
    .catch(this.printError);
  }

  getLiverpool() {
    this.footballService.getTeam(64)
    .then(this.print)
    .catch(this.printError);
  }

  getLiverpoolPlayers() {
    this.footballService.getPlayers(64)
    .then(this.print)
    .catch(this.printError);
  }

  getLiverpoolFixtures() {
    this.footballService.getTeamFixtures(64)
    .then(this.print)
    .catch(this.printError);
  }

  getChampionsLeagueTables() {
    this.footballService.getLeagueTable(440)
    .then(table => {
      // Print the table for each group
      for(let groupLetter in table.standings) {
        console.log('----- ' + groupLetter + ' -----');
        const group = table.standings[groupLetter];
        this.print(group);
      }
    })
    .catch(this.printError);
  }

  print(item) {
    console.log(JSON.stringify(item, null, 2));
  }

  printError(error) {
    alert(JSON.stringify(error, null, 2));
  }
}
