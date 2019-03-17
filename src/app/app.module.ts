import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; //1.import providers ที่เราสร้างมาใหม่

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about'; //1.ทุกครั้งที่สร้างเพจต้องสร้าง import
import { CommunityPage } from '../pages/community/community';
import { GalleryPage } from '../pages/gallery/gallery';
import { SlidesPage } from '../pages/slides/slides';
import { CustomerdetailPage } from '../pages/customerdetail/customerdetail';
import { ToursProvider } from '../providers/tours/tours'; //2.import providers อันนี้โปรแกรมจะ import ให้เอง

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage, //2.ทุกครั้งที่สร้างเพจต้องสร้าง declarations
    CommunityPage,
    GalleryPage,
    SlidesPage,
    CustomerdetailPage
  ],
  imports: [
    HttpClientModule, //3.import providers เพิ่มลงในนี้
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage, //3.ทุกครั้งที่สร้างเพจต้องสร้าง entryComponents
    CommunityPage,
    GalleryPage,
    SlidesPage,
    CustomerdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToursProvider
  ]
})
export class AppModule {}
