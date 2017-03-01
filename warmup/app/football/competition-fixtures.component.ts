import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Fixture, Team } from '../models';
import { FootballService } from '../football.service';

// import { Observable } from 'rxjs';

@Component({
  selector: 'my-fixtures',
  templateUrl: './football/competition-fixtures.component.html'
})
export class CompetitionFixturesComponent implements OnInit{
  public fixtures: Fixture[] = [];
  public competitionName: string = '';

  constructor(
    private footballService: FootballService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    const competitionId = +this.route.snapshot.params['competitionId'];
    this.competitionName = this.route.snapshot.params['competitionName'];

    this.footballService.getFixtures(competitionId, { timeFrame: 'n7'})
      .then(fixtures => this.fixtures = fixtures);
  }

  teamSelected(teamId: number) {
    console.log('::CompetitionFixturesComponent::teamSelected::' + teamId);
    this.router.navigate(['/football/team', teamId]);
  }

  // public days: Array<Fixture[]> = [];
  // groupFixtures(fixtures: Fixture[]) {
  //   this.days = [];
  //   const source = Observable.from(fixtures);
  //   const groupSubscription = source.groupBy(fix => fix.date.substr(0, 10))
  //     .flatMap(group => group.reduce((acc, curr) => [...acc, curr], []))
  //     .subscribe(day => {
  //       // console.log(JSON.stringify(group));
  //       this.days.push(day);
  //     });
  // }
}
