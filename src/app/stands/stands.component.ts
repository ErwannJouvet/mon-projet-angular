import { Component } from '@angular/core';
import { Stand } from '../interface/stand';
import { StandService } from '../services/stand/stand.service';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.component.html',
  styleUrls: ['./stands.component.css']
})
export class StandsComponent {

  stands : Stand[] = [];

  constructor(private standService : StandService) {

  }

  ngOnInit() {
    this.stands = this.standService.getStand();
  }
}
