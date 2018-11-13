import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fixture } from '../models';

@Component({
  selector: 'my-fixture',
  moduleId: module.id,
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent {
  public fixture: Fixture;

  public fakeDate: Date = new Date();

  public displayScore(): boolean {
    // return this.fixture.status === 'FINISHED' || this.fixture.status === 'IN_PLAY'
    return false;
  }

}
