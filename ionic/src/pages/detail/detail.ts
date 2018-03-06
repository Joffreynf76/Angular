import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
    films=[];

    film;


  constructor(public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer) {
      this.films =[
          {'id':1,'titre':'Tomb Raider',
              'image':'assets/imgs/tombraider.jpg',
          'poster':'assets/imgs/poster.jpg',
          'resume':'Lara Croft, 21 ans, n\'a ni projet, ni ambition : fille d\'un explorateur excentrique porté disparu depuis sept ans, cette jeune femme rebelle et indépendante refuse de reprendre l\'empire de son père. Convaincue qu\'il n\'est pas mort, elle met le cap sur la destination où son père a été vu pour la dernière fois : la tombe légendaire d\'une île mythique au large du Japon. Mais le voyage se révèle des plus périlleux et il lui faudra affronter d\'innombrables ennemis et repousser ses propres limites pour devenir "Tomb Raider"…',
          'video':'https://www.youtube.com/watch?v=7ecgmgAvNVM'},
          {'id':2,'titre':'Ready player one',
              'image':'assets/imgs/ready2.jpg',
          'poster':'assets/imgs/poster2.jpg',
          'resume':'2045. Le monde est au bord du chaos. Les êtres humains se réfugient dans l\'OASIS, univers virtuel mis au point par le brillant et excentrique James Halliday. Avant de disparaître, celui-ci a décidé de léguer son immense fortune à quiconque découvrira l\'œuf de Pâques numérique qu\'il a pris soin de dissimuler dans l\'OASIS. L\'appât du gain provoque une compétition planétaire. Mais lorsqu\'un jeune garçon, Wade Watts, qui n\'a pourtant pas le profil d\'un héros, décide de participer à la chasse au trésor, il est plongé dans un monde parallèle à la fois mystérieux et inquiétant…',
          'video':'https://www.youtube.com/watch?v=oYGkAMHCOC4'},
          {'id':3,'titre':'Red sparrow',
              'image':'assets/imgs/redsparrow.jpg',
          'poster':'assets/imgs/poster3.jpg',
          'resume':'Une jeune ballerine, dont la carrière est brisée nette après une chute, est recrutée contre sa volonté par les services secrets russes. Entraînée à utiliser ses charmes et son corps comme des armes, elle découvre l’ampleur de son nouveau pouvoir et devient rapidement l’un de leurs meilleurs agents.\n' +
          'Sa première cible est un agent infiltré de la CIA en Russie. Entre manipulation et séduction, un jeu dangereux s’installe entre eux.',
          'video':'https://www.youtube.com/watch?v=JCTHIovjZVw'}
      ]


      let id=this.navParams.get('id');
    for (let i=0;i<this.films.length;i++){
    if(this.films[i].id == id){
    this.film=this.films[i];

}
}

  }
  watch(){
      return this.youtube.openVideo('7ecgmgAvNVM');
  }
  ionViewDidLoad() {

    console.log('ionViewDidLoad DetailPage');

  }

}
