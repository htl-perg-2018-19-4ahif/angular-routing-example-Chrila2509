import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

interface IAbility {
  ability: string;
}

interface IDetails {
  name: string;
  abilities: IAbility[];
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public pokemon: IDetails = { name: '', abilities: []};
  public pokeId: number;

  constructor(private httpClient: HttpClient, private acRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.acRoute.paramMap.subscribe((params: ParamMap) => {
      this.pokeId = parseInt(params.get('pokemonId'));
    });

    this.pokemon = await this.httpClient.get<IDetails>('https://pokeapi.co/api/v2/pokemon/' + this.pokeId).toPromise();
  }

}
