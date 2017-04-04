import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fixture } from '../models';

@Component({
  selector: 'my-fixture',
  templateUrl: './football/fixture.component.html',
  styleUrls: ['./football/fixture.component.css']
})
export class FixtureComponent {

  public displayScore(): boolean {
    return undefined;
  }

  public inPlay(): boolean {
    return undefined;
  }

  public homeTeamTap() {
    
  }

  public awayTeamTap() {

  }
}
