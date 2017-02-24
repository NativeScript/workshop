import { Component, OnInit } from '@angular/core';
import { Competition } from '../models';
import { FootballService } from '../football.service';

@Component({
    selector: "ns-test",
    moduleId: module.id,
    templateUrl: "./test.component.html",
})
export class TestComponent implements OnInit {
    competitions: Array<Competition> = [];

    constructor(private footballService: FootballService) { }

    ngOnInit(): void {
    }

    getCompetitions() {
        this.footballService.getCompetitions()
        .then(competitions => {
            this.competitions = competitions;
            this.print(competitions);
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
            // Print table for each group
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
