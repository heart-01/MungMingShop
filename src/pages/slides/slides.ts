import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  
  slides=[
    {id:"1",name:"กระเป๋ามินเนี่ยน",image:"slides_1.jpg"},
    {id:"1",name:"กระเป๋าโดเรม่อน",image:"slides_2.jpg"},
    {id:"1",name:"กระเป๋าเป็ด",image:"slides_3.jpg"}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
