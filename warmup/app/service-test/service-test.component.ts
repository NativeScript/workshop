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
    .then(competitions => {
      const temp = competitions;
      this.print(temp);
    })
  }

  getPLCompetition() {
    this.footballService.getCompetition(426)
    .then(this.print);
  }

  getPLTable() {
    this.footballService.getLeagueTable(426)
    .then(this.print);
  }

  getPLTeams() {
    this.footballService.getTeams(426)
    .then(this.print);
  }

  getPLFixtures() {
    this.footballService.getFixtures(426)
    .then(this.print);
  }

  getLiverpool() {
    this.footballService.getTeam(64)
    .then(this.print);
  }

  getLiverpoolPlayers() {
    this.footballService.getPlayers(64)
    .then(this.print);
  }

  getLiverpoolFixtures() {
    this.footballService.getTeamFixtures(64)
    .then(this.print);
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
  }

  print(item) {
    console.log(JSON.stringify(item, null, 2));
  }
}
