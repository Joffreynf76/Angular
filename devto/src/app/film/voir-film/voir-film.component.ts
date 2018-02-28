import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GestionFilmService} from "../../gestion-film.service";

@Component({
  selector: 'app-voir-film',
  templateUrl: './voir-film.component.html',
  styleUrls: ['./voir-film.component.css']
})
export class VoirFilmComponent implements OnInit {
  private movieList : Array<any>;
  private movie : any;
  constructor(private route : ActivatedRoute, private gestionFilm : GestionFilmService) {

  }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
      this.gestionFilm.getAll().then(movieList => {this.getOne(movieList);});



  }
  getOne(f){
      let id = this.route.snapshot.params['id'];
      this.movieList=f;
      for (let i=0;i<this.movieList.length;i++){
          if(this.movieList[i].id ==id){
              this.movie=this.movieList[i];

          }
      }
  }





}
