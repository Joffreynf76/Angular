import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import {MovieListComponent} from './film/movie-list/movie-list.component';
import {AccueilComponent} from './film/accueil/accueil.component';
import {VoirFilmComponent} from './film/voir-film/voir-film.component';
import {RegisterComponent} from "./user/register/register.component";

const routes : Routes= [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    {path:'accueil', component: AccueilComponent},
    {path:'listeFilms', component: MovieListComponent},
    {path:'film/:id', component: VoirFilmComponent},
    {path:'register', component: RegisterComponent}
];


@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)

  ],
    exports:[
        RouterModule
    ],

  declarations: []
})
export class AppRoutingModule { }
