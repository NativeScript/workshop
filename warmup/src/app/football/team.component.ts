import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FootballService } from '../football.service';
import { Team, Fixture, Player } from '../models';

@Component({
  selector: 'my-team',
  moduleId: module.id,
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit{
  private team: Team;
  private fixtures: Fixture[] = [];
  // private players: Player[] = [];

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService) {
  }

  ngOnInit() {
    const teamId = +this.route.snapshot.params['teamId'];

    this.footballService.getTeam(teamId)
      .subscribe(team => this.team = team);

    this.footballService.getTeamFixtures(teamId)
      .subscribe(fixtures => this.fixtures = fixtures) 

    // this.footballService.getPlayers(teamId)
    // .subscribe(players => this.players = players);
  }

  teamSelected(teamId: number) {
    console.log('::TeamComponent::teamSelected::' + teamId);
  }
}
