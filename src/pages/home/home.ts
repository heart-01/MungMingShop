import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about'; // ถ้าจะให้ลิงก์ไปหน้าอื่นต้อง import หน้านั้นเข้ามาด้วย
import { CommunityPage } from '../community/community';
import { GalleryPage } from '../gallery/gallery';
import { SlidesPage } from '../slides/slides';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { //พื้นที่เขียน java script

  constructor(public navCtrl: NavController) {

  }
  //Method push เปิดหน้าใหม่
  //Method setRoot  เปิดหน้าใหม่ไม่สามารถย้อนกลับได้
  gotoAbout(){
    this.navCtrl.push(AboutPage); //ให้โหลดหน้า AboutPage ลงในที่นี้
  }

  gotoCommunity(){
    this.navCtrl.push(CommunityPage);
  }

  gotoGallery(){
    this.navCtrl.setRoot(GalleryPage);
  }

  gotoSlides(){
    this.navCtrl.push(SlidesPage);
  }

}
