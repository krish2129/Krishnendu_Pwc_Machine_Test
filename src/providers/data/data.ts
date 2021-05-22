import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  api_url='http://52.152.235.210:8209'

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  login(param){
    return new Promise<void>((resolve, reject) => {
      this.http.post(this.api_url+'/login',param).subscribe((res)=>{
        let data:any=res;
          resolve(data);
      },(error)=>{
        reject(error);
      })
      
    })
  }

  projectList(param){

    return new Promise<void>((resolve, reject) => {
      this.http.post(this.api_url+'/projectlist',param).subscribe((res)=>{
        let data:any=res;
          resolve(data);
      },(error)=>{
        reject(error);
      })
      
    })

  }

  usCount(param){

    return new Promise<void>((resolve, reject) => {
      this.http.post(this.api_url+'/uscount',param).subscribe((res)=>{
        let data:any=res;
          resolve(data);
      },(error)=>{
        reject(error);
      })
      
    })

  }

}
