import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Fixture, Team } from '../models';
import { FootballService } from '../football.service';

@Component({
  selector: 'my-fixtures',
  templateUrl: './football/competition-fixtures.component.html',
  styleUrls: ['./football/fixture.component.css']
})
export class CompetitionFixturesComponent implements OnInit{
  public fixtures: Fixture[] = [];
  public competitionId: number;
  public competitionName: string = '';

  constructor(
    private footballService: FootballService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.competitionId = +this.route.snapshot.params['competitionId'];
    this.competitionName = this.route.snapshot.params['competitionName'];

    this.footballService.getFixtures(this.competitionId)
      .then(fixtures => this.fixtures = fixtures);
  }

  teamSelected(teamId: number) {
    console.log('::CompetitionFixturesComponent::teamSelected::' + teamId);
    this.router.navigate(['/football/team', teamId]);
  }
}
