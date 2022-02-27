import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Services 
import { ApiStarWarsService } from 'src/app/services/api-star-wars.service';

//Models
import { FilmDetail } from 'src/app/models/film-detail';
import { GenericData } from 'src/app/models/generic-data'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  film_id:number;

  detail:FilmDetail;
  starships:Array<GenericData> = [];
  characters:Array<GenericData> = [];
  planets:Array<GenericData> = [];

  constructor( private actRoute: ActivatedRoute, private api: ApiStarWarsService ) { 
    this.film_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getDetailMovie();
  }

  getDetailMovie(){
    return this.api.getDetail(this.film_id).subscribe(resp => {
      this.detail = resp;
      this.getMoreInfo(this.detail.starships,this.starships);
      this.getMoreInfo(this.detail.characters,this.characters);
      this.getMoreInfo(this.detail.planets,this.planets);
    });
  }

  async getMoreInfo(list:Array<any>, target:Array<any>){
    list.forEach(url=>{
      let newurl = url.replace(/^http:\/\//i, 'https://');
      this.api.getStarships(newurl).subscribe(resp => {
        target.push({name:resp.name});
        target.sort((a,b) => a.name.localeCompare(b.name));
      });
    })
    
    
  }

}
