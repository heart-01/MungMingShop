import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerdetailPage } from './customerdetail';

@NgModule({
  declarations: [
    CustomerdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerdetailPage),
  ],
})
export class CustomerdetailPageModule {}
