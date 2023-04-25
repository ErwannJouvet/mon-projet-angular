import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/player/player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {

  playerDetail : any=[];
  playerId : any;

  constructor(private activeRoute : ActivatedRoute, private playserService : PlayerService) {

  }

 ngOnInit(){
    this.playerId = this.activeRoute.snapshot.paramMap.get('id');
    this.playerDetail = this.playserService.getPlayer().filter( x => x.id == this.playerId);
 }

}
