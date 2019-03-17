import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToursProvider } from '../../providers/tours/tours'; //import providers เข้ามา

/**
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {
  
  allCusts : any =0; //สร้างตัวแปร allCusts ชนิดเป็นอะไรก็ได้ เท่ากับ 0

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:ToursProvider) {
    // เพิ่ม public data:ToursProvider เพื่อเรียก data ที่เรา import มาจาก ToursProvider
    this.data.loadAll().then(result=>{this.allCusts=result}); 
    //ดึงข้อมูลใน loadAll มาแล้วเก็บไว้ที่ตัวแปร allCusts แล้วสร้างตัวแปร result มาส่งค่าให้กับ allCusts เพราะส่งโดยตรงไม่ได้ เท่ากับ allCusts=result
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityPage');
  }

}
