import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './movie-list/movie-list.component';
import { SurvolFilmDirective } from './survol-film.directive';
import { NotePipe } from './note.pipe';
import { VoirFilmComponent } from './voir-film/voir-film.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionFilmService} from "../gestion-film.service";
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [
      AccueilComponent,
      MovieListComponent,
      SurvolFilmDirective,
      NotePipe,
      VoirFilmComponent
  ],
    providers :[GestionFilmService]
})
export class FilmModule { }
