import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  actus=[];

  constructor(public navCtrl: NavController) {
      this.actus=[
          {'titre':'Jessica jones saison 2',
          'contenu':'Sortie le 8 mars sur netflix !'},
          {'titre':'Expandables 4',
          'contenu':'Randy Couture annonce un tournage en aout'},
          {'titre':'Rainbow six siege',
          'contenu':'Ubisoft revoit la politique tarifaire du jeu'},
          {'titre':'Nouvelle bande annonce Tomb raider',
          'contenu':'Lara Croft en mode survivor !'},
          {'titre':'Final fantasy XV',
          'contenu':'Du nouveau avec la mise à jour 1.2.0'}
      ]
  }

}
