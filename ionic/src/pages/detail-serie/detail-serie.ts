import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailSeriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-serie',
  templateUrl: 'detail-serie.html',
})
export class DetailSeriePage {
  series=[];
  serie;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.series=[
          {'id':1,'titre':'Westworld',
              'image':'assets/imgs/westworld.png',
          'poster':'assets/imgs/poster4.jpg',
          'resume':'A Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes. Cet univers bien huilé est mis en péril lorsqu\'à la suite d\'une mise à jour, quelques robots comment à adopter des comportements imprévisibles, voire erratiques. En coulisses, l\'équipe, qui tire les ficelles de ce monde alternatif, s\'inquiète de ces incidents de plus en plus nombreux. Les enjeux du programme Westworld étant énormes, la Direction ne peut se permettre une mauvaise publicité qui ferait fuir ses clients. Que se passe-t-il réellement avec les androïdes ré-encodés ?',
          'video':'https://www.youtube.com/watch?v=IuS5huqOND4'},
          {'id':2,'titre':'Daredevil',
              'image':'assets/imgs/daredevil.ico',
          'poster':'assets/imgs/poster5.jpg',
          'resume':'Aveugle depuis l’enfance, mais doté de sens incroyablement développés, Matt combat l’injustice le jour en tant qu’avocat et la nuit en surveillant les rue de Hell’s Kitchen, à New York, dans le costume du super-héros Daredevil.\n' +
          '\n' +
          'Adaptation du comic book Marvel homonyme.',
          'video':'https://www.youtube.com/watch?v=mGEWftxFX3M'},
          {'id':3,'titre':'Games of thrones',
              'image':'assets/imgs/gamesofthrones.png',
          'poster':'assets/imgs/poster6.jpeg',
          'resume':'Il y a très longtemps, à une époque oubliée, une force a détruit l\'équilibre des saisons. Dans un pays où l\'été peut durer plusieurs années et l\'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d\'au-delà du Mur protecteur, n\'a plus les ressources nécessaires pour assurer la sécurité de tous. Après un été de dix années, un hiver rigoureux s\'abat sur le Royaume avec la promesse d\'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s\'emparer du Trône de Fer, le symbole du pouvoir absolu.',
          'video':'https://www.youtube.com/watch?v=giYeaKsXnsI'}
      ]
      let id=this.navParams.get('id');
      for (let j=0;j<this.series.length;j++){
          if(this.series[j].id == id){
              this.serie=this.series[j];

          }
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailSeriePage');
  }

}
