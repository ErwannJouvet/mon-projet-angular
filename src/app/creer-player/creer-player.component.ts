import { Component } from '@angular/core';
import { PlayerService } from '../services/player/player.service';
@Component({
  selector: 'app-creer-player',
  templateUrl: './creer-player.component.html',
  styleUrls: ['./creer-player.component.css']
})
export class CreerPlayerComponent {

  constructor(private playerService : PlayerService) {

  }

  submit(data : any) {
    this.playerService.postPlayer(data);
    console.log(data);
  }

}
