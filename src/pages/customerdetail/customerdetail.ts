import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToursProvider } from '../../providers/tours/tours'; //import providers เข้ามา


/**
 * Generated class for the CustomerdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerdetail',
  templateUrl: 'customerdetail.html',
})
export class CustomerdetailPage {
  cust : any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:ToursProvider) {
    // เพิ่ม public data:ToursProvider เพื่อเรียก data ที่เรา import มาจาก ToursProvider
    this.data.getCustomerById(this.navParams.get('id')).then(result=>{this.cust=result});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerdetailPage');
  }

}
