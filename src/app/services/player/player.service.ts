import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from 'src/app/interface/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private _http : HttpClient) { }

  getPlayer() : Player[] {
    return [
      {id : 1, nom : "Giovanna", prenom : "Giorno", age : 15, desc : "Le plus fort", image : "giorno.png"},
      {id : 2, nom : "Guido", prenom : "Mista", age : 18, desc : "Le plus loyal", image : "mista.jpg"},
      {id : 3, nom : "Vinegar", prenom : "Diavolo", age : 33, desc : "Le schizo", image : "diavolo.jpg"},
      {id : 2, nom : "Brando", prenom : "Dio", age : 120, desc : "Il veut pas mourir lui", image : "Dio.webp"},
    ];
  }

  postPlayer(data:any) {
    //ici pas d'api donc premier argument vide, mais pour le projet mettre l'url de notre api
    return this._http.post('', data)
  }
}
