import { Injectable } from '@angular/core';
import { Stand } from 'src/app/interface/stand';

@Injectable({
  providedIn: 'root'
})
export class StandService {

  constructor() {}

  getStand() : Stand[] {
    return [
      {id : 1, nom : "Gold Experience Requiem", pouvoir : "Trop cheaté", detenteur : "Giorno Giovanna", image : "GoldExperienceRequiem.png"},
      {id : 1, nom : "Gold Experience Requiem", pouvoir : "Trop cheaté", detenteur : "Giorno Giovanna", image : ""},
      {id : 1, nom : "Gold Experience Requiem", pouvoir : "Trop cheaté", detenteur : "Giorno Giovanna", image : ""},
      {id : 1, nom : "Gold Experience Requiem", pouvoir : "Trop cheaté", detenteur : "Giorno Giovanna", image : "GoldExperienceRequiem.png"},
    ];
  }
}
