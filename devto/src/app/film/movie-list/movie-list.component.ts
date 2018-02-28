import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GestionFilmService} from '../../gestion-film.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    private movieList : Array <object>;
    private nbrFilm : number;

  constructor(private router : Router,private gestionFilm : GestionFilmService) { }

  ngOnInit() {
      this.gestionFilm.getAll().then(movieList => { this.movieList = movieList; });

      //this.nbrFilm = this.movieList.length;
  }

  myEvent(titre){
    alert( "Film sélectionné : "+titre);
  }
}
