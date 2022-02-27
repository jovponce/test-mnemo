import { Component, OnInit } from '@angular/core';

//Services 
import { ApiStarWarsService } from 'src/app/services/api-star-wars.service';

//Models
import { Films } from 'src/app/models/films';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  films: Array<Films>;

  constructor( private api: ApiStarWarsService ) { }

  ngOnInit(): void {
    this.getListMovies();
  }

  getListMovies(){
    return this.api.getlist().subscribe(resp => {
      console.log(resp);
      this.films = resp.results;
      this.films.sort((a,b)=>Number(b.release_date)-Number(a.release_date));
    });
  }

}
