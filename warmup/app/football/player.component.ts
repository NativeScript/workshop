import { Component, OnInit } from '@angular/core';
import { Player } from '../models';

@Component({
  moduleId: module.id,
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  public player: Player;

  constructor() { }

  ngOnInit() { }
}
