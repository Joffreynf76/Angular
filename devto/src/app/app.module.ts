import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from "@angular/http";
import { FilmModule} from './film/film.module';
import { AppComponent } from './app.component';

import { RegisterComponent} from "./user/register/register.component";
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,RegisterComponent

  ],
  imports: [
    BrowserModule, FilmModule,AppRoutingModule,FormsModule,HttpModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
