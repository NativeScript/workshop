import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Competition, LeagueTable } from '../models';
import { FootballService } from '../football.service';

@Component({
  selector: 'my-tables',
  templateUrl: './football/tables.component.html'
})
export class TablesComponent implements OnInit{
  public competitions: Competition[] = [];

  public PremierLeagueId: number = 426;
  public PrimeraDivisionId: number = 436;
  public BundesligaId: number = 430;
  public SerieAId: number = 438;
  public Ligue1Id: number = 434;
  public EredivisieId: number = 433;

  constructor(private footballService: FootballService) {//, private router: Router) {

  }

  ngOnInit() {
    this.footballService.getCompetitions()
      .then(competitions => {
        this.competitions = competitions.filter(this.isLeague);
      });
  }

  private isLeague(competition: Competition) {
    return (competition.numberOfTeams-1)*2 === competition.numberOfMatchdays;
  }

  private onTeamTap(teamId: number) {
    console.log('::TablesComponent::onTeamTap::' + teamId);
  }
}
