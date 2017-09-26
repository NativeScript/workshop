import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Competition, LeagueTable } from '../models';

// To be refactored and removed
import { FootballService } from '../football.service';

@Component({
  selector: 'my-tables',
  templateUrl: './football/tables.component.html'
})
export class TablesComponent {

  public PremierLeagueId: number = 445;
  public PrimeraDivisionId: number = 455;
  public BundesligaId: number = 452;
  public SerieAId: number = 456;
  public Ligue1Id: number = 450;
  public EredivisieId: number = 449;

  constructor(private router: Router) {
  }

  private onTeamTap(teamId: number) {
    console.log('::TablesComponent::onTeamTap::' + teamId);
    this.router.navigate(['/football/team', teamId]);
  }
}
