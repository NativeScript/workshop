import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Competition, LeagueTable } from '../models';

@Component({
  selector: 'my-tables',
  templateUrl: './football/tables.component.html'
})
export class TablesComponent {
  public competitions: Competition[] = [];

  public PremierLeagueId: number = 426;
  public PrimeraDivisionId: number = 436;
  public BundesligaId: number = 430;
  public SerieAId: number = 438;
  public Ligue1Id: number = 434;
  public EredivisieId: number = 433;

  constructor() {
  }

  private onTeamTap(teamId: number) {
    console.log('::TablesComponent::onTeamTap::' + teamId);
  }
}
