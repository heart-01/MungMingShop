import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about'; //1.ทุกครั้งที่สร้างเพจต้องสร้าง import
import { CommunityPage } from '../pages/community/community';
import { GalleryPage } from '../pages/gallery/gallery';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage, //2.ทุกครั้งที่สร้างเพจต้องสร้าง declarations
    CommunityPage,
    GalleryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage, //3.ทุกครั้งที่สร้างเพจต้องสร้าง entryComponents
    CommunityPage,
    GalleryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
