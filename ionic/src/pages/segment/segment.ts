import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import {DetailSeriePage} from "../detail-serie/detail-serie";
import {DetailJeuxPage} from "../detail-jeux/detail-jeux";


/**
 * Generated class for the SegmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {
  films=[];
  series=[];
  jeux=[];
  detailPage= DetailPage;
  detailserie=DetailSeriePage;
  detailjeux=DetailJeuxPage;
  divertissement;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.films =[
          {'id':1,'titre':'Tomb Raider',
              'image':'assets/imgs/tombraider.jpg'},
          {'id':2,'titre':'Ready player one',
              'image':'assets/imgs/ready2.jpg'},
          {'id':3,'titre':'Red sparrow',
              'image':'assets/imgs/redsparrow.jpg'}
      ]
      this.series=[
          {'id':1,'titre':'Westworld',
              'image':'assets/imgs/westworld.png'},
          {'id':2,'titre':'Daredevil',
              'image':'assets/imgs/daredevil.ico'},
          {'id':3,'titre':'Games of thrones',
              'image':'assets/imgs/gamesofthrones.png'}
      ]
      this.jeux=[
          {'id':1,'titre':'Far cry 5',
              'image':'assets/imgs/image.png'},
          {'id':2,'titre':'Red dead redemption 2',
              'image':'assets/imgs/red2.jpg'},
          {'id':3,'titre':'Final fantasy VII:Remake',
              'image':'assets/imgs/ff7.jpg'}
      ];
      this.divertissement='films';


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

}
