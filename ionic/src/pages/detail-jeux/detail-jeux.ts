import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailJeuxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-jeux',
  templateUrl: 'detail-jeux.html',
})
export class DetailJeuxPage {
    jeux=[];
    jeu;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.jeux = [
          {
              'id': 1, 'titre': 'Far cry 5',
              'image': 'assets/imgs/image.png',
              'poster':'assets/imgs/poster7.png',
              'resume':' Far Cry 5 est un jeu d\'action / aventure jouable en solo. Bienvenue à Hope County dans le Montana, terre de liberté et de bravoure qui abrite un culte fanatique prêchant la fin du monde : Eden’s Gate. Défiez son chef, Joseph Seed, et ses frères et soeur, et libérez les citoyens.',
              'video':'https://www.youtube.com/watch?v=l1iKrKWka3Q'
          },
          {
              'id': 2, 'titre': 'Red dead redemption 2',
              'image': 'assets/imgs/red2.jpg',
              'poster':'assets/imgs/poster8.jpg',
              'resume':' Suite du précédent volet multi récompensé, Red Dead Redemption II nous permettra de nous replonger dans une ambiance western synonyme de vastes espaces sauvages et de villes malfamées. Duels sous un soleil de plomb et grande aventure se partageront la vedette.',
              'video':'https://www.youtube.com/watch?v=8thHKcCJnB0'
          },
          {
              'id': 3, 'titre': 'Final fantasy VII:Remake',
              'image': 'assets/imgs/ff7.jpg',
              'poster':'assets/imgs/poster9.jpg',
              'resume':' Final Fantasy VII Remake sur Xbox One est le remake de Final Fantasy VII. Le joueur y incarne toujours Cloud, un ancien soldat ayant rejoint le groupe terroriste Avalanche. Ce dernier essaye de déjouer les plans de la Shinra et en vient à se battre avec Sephiroth.',
              'video':'https://www.youtube.com/watch?v=A3sBZ5Nr4hc'
          }
      ]
      let id = this.navParams.get('id');
      for (let k = 0; k < this.jeux.length; k++) {
          if (this.jeux[k].id == id) {
              this.jeu = this.jeux[k];
          }
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailJeuxPage');
  }

}
