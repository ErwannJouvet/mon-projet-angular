import { Component } from '@angular/core';
import { PlayerService } from '../services/player/player.service';
import { Player } from '../interface/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  prenom : string = "erwann";
  players : Player[] = [];

  constructor(private playerService : PlayerService) {

  }

  ngOnInit() {
    this.players = this.playerService.getPlayer();
  }
}