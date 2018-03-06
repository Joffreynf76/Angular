import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SegmentPage } from '../pages/segment/segment';
import { DetailPage } from '../pages/detail/detail';
import { DetailSeriePage } from '../pages/detail-serie/detail-serie';
import { DetailJeuxPage } from '../pages/detail-jeux/detail-jeux';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SegmentPage,
    DetailPage,
    DetailSeriePage,
    DetailJeuxPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SegmentPage,
    DetailPage,
    DetailSeriePage,
    DetailJeuxPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
      YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
