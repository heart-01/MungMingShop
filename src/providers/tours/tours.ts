import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ToursProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToursProvider {

  data:any; //ประกาศ data type any เป็นชนิดไหนก็ได้

  constructor(public http: HttpClient) {
    //console.log('Hello ToursProvider Provider');
    
    this.data=[      //เมื่อ page ใดๆโหลดข้อมูลจากในนี้ก็จะได้ข้อมูลเป็น array
      {id:"1",name:"siwat",tel:"0871548602",address:"testttttttt"},
      {id:"2",name:"prem",tel:"0871548603",address:"testttttttt"},
      {id:"3",name:"tuk",tel:"0871548604",address:"testttttttt"}];
  }

  loadAll(){ //เมธอทสำหรับโหลดข้อมูลใน data
    return Promise.resolve(this.data);
  }

  getCustomerById(id){  //เมธอทสำหรับรับค่า id 
    for(var i=0;i<(this.data).length;i++){  //วน loop หา id เจอไอดีค่าที่พารามิเตอร์รับมา ถ้าเจอจะ return กลับมา
      if(this.data[i].id==id){
        return Promise.resolve(this.data[i]);
      }
    }
  }

}
