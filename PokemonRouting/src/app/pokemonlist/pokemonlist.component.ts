import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IPokeDex {
  count: number;
  results: IPokemon[];
}

interface IPokemon {
  name: string;
  url: string;
}

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  public searchString: string ='';
  public pokeDex: IPokemon[];
  public url: string ='https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
    let count: IPokeDex = await this.httpClient.get<IPokeDex>(this.url).toPromise();
    this.pokeDex = (await this.httpClient.get<IPokeDex>(this.url+'?limit=' + count.count).toPromise()).results;
  }

  public search(event){
    this.searchString=event;
  }
}
